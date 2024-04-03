const http = require("http");
const fs = require("fs");
const path = require("path");

// 配置服务器监听的端口号
const port = 3000;

// 您的静态文件目录
const staticDir = path.join(__dirname, "client");
console.log(staticDir);

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(1);
  console.log(url);
  console.log("1111111111");
  if (url === "/error") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ data: 123, success: false, va: "中国" }));
  } else if (url === "/500") {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("server error");
  } else if (url === "/ajax302") {
    res.writeHead(302, {
      location: "/", //"http://up.gcp-it.zetyun.cn/", //
    });

    res.end();
  } else {
    // 静态资源
    // 构造请求资源的文件路径
    let filePath = path.join(
      staticDir,
      req.url === "/" ? "index.html" : req.url
    );
    // 获取文件的 MIME 类型
    let contentType = "text/html";
    const ext = path.extname(filePath);
    switch (ext) {
      case ".css":
        contentType = "text/css";
        break;
      case ".js":
        contentType = "text/javascript";
        break;
      case ".json":
        contentType = "application/json";
        break;
      case ".png":
        contentType = "image/png";
        break;
      case ".jpg":
        contentType = "image/jpg";
        break;
      // 添加更多文件类型的处理
    }

    // 读取文件并响应
    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code == "ENOENT") {
          // 文件不存在
          // 可以在这里返回 404 页面
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("<h1>404 Not Found</h1>");
        } else {
          // 其他服务器错误
          res.writeHead(500);
          res.end("Sorry, there was an error: " + err.code);
        }
      } else {
        // 成功读取文件
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
      }
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
