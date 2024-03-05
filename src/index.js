const http = require("node:http");
const url = require("url");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/d.js") {
    console.log("------d.jd");
    // const filePath = path.join(__dirname, "index.html");
    // fs.readFile(filePath, "utf-8", (error, data) => {
    //   res.setHeader("Set-Cookie", "myCookie=myValue; Path=/;");

    //   res.setHeader("Content-Type", "text/html");
    //   res.end(data);
    // });
    res.setHeader("Set-Cookie", "myCookie=myValue; Path=/;");
    res.writeHead(302, {
      Location: "/c.html",
      // "Access-Control-Allow-Origin": "http://172.20.7.198:8000",
      // "Access-Control-Allow-Credentials": true,
    });
    res.end();
  }
  if (req.url === "/bbb") {
    console.log("------bbb");
    // const filePath = path.join(__dirname, "index.html");
    // fs.readFile(filePath, "utf-8", (error, data) => {
    //   res.setHeader("Set-Cookie", "myCookie=myValue; Path=/;");

    //   res.setHeader("Content-Type", "text/html");
    //   res.end(data);
    // });
    res.setHeader(
      "Set-Cookie",
      "myCookie=myValue; Path=/;domain=datacanvas.com"
    );
    res.writeHead(302, {
      Location: "http://172.20.7.83:3600/",
      // "Access-Control-Allow-Origin": "http://172.20.7.198:8000",
      // "Access-Control-Allow-Credentials": true,
    });
    res.end();
  }
  if (req.url === "/index.html") {
    console.log("------");
    // const filePath = path.join(__dirname, "index.html");
    // fs.readFile(filePath, "utf-8", (error, data) => {
    //   res.setHeader("Set-Cookie", "myCookie=myValue; Path=/;");

    //   res.setHeader("Content-Type", "text/html");
    //   res.end(data);
    // });
    res.setHeader("Set-Cookie", "myCookie=myValue; Path=/;");
    res.writeHead(302, {
      Location: "/b.html",
      // "Access-Control-Allow-Origin": "http://172.20.7.198:8000",
      // "Access-Control-Allow-Credentials": true,
    });
    res.end();
  }

  if (req.url === "/c.html") {
    console.log("ccc");
    const filePath = path.join(__dirname, "c.html");
    fs.readFile(filePath, "utf-8", (error, data) => {
      // res.setHeader("Set-Cookie", "myCookie=myValue; Path=/;");

      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
    // res.setHeader("Set-Cookie", "myCookie=myValue; Path=/;");
    // res.writeHead(302, {
    //   Location: "/b.html",
    //   // "Access-Control-Allow-Origin": "http://172.20.7.198:8000",
    //   // "Access-Control-Allow-Credentials": true,
    // });
    // res.end();
  }
  if (req.url === "/d.html") {
    console.log("bbb");
    const filePath = path.join(__dirname, "d.html");
    fs.readFile(filePath, "utf-8", (error, data) => {
      // res.setHeader("Set-Cookie", "myCookie=myValue; Path=/;");

      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
    // res.setHeader("Set-Cookie", "myCookie=myValue; Path=/;");
    // res.writeHead(302, {
    //   Location: "/b.html",
    //   // "Access-Control-Allow-Origin": "http://172.20.7.198:8000",
    //   // "Access-Control-Allow-Credentials": true,
    // });
    // res.end();
  }
  //   console.log(123, req.url);
  //   const parsedUrl = url.parse(req.url, true);
  //   const params = parsedUrl.query;
  //   console.log(params, 222);
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/plain");
  //   res.end("Hello Wolrdxxx222333");

  // ajax 请求返回302 重定向到不同域，是否可以接收到响应
  if (req.url === "/ajax") {
    console.log("ajax");
    const filePath = path.join(__dirname, "d.html");
    fs.readFile(filePath, "utf-8", (error, data) => {
      // res.setHeader("Set-Cookie", "myCookie=myValue; Path=/;");

      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
    // res.setHeader("Set-Cookie", "myCookie=myValue; Path=/;");
    // res.writeHead(302, {
    //   Location: "/b.html",
    //   // "Access-Control-Allow-Origin": "http://172.20.7.198:8000",
    //   // "Access-Control-Allow-Credentials": true,
    // });
    // res.end();
  }
});

server.listen(4000, "127.0.0.1", () => {
  console.log("server start up 4000");
});
