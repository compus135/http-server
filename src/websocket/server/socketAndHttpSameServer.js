const express = require("express");
const { WebSocketServer } = require("ws");
const http = require("http");

// 创建Express应用
const app = express();

// 设置一个简单的HTTP GET 路由
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from HTTP API!" });
});

// 创建HTTP服务器，并把Express应用作为请求处理器
const server = http.createServer(app);

// 实例化WebSocket服务器，共享HTTP服务器的端口
const wss = new WebSocketServer({ server });

// 监听WebSocket连接
wss.on("connection", (ws) => {
  console.log("WebSocket connection established");

  // 向客户端发送消息
  ws.send("Welcome to the WebSocket connection!");

  // 监听从客户端收到的消息
  ws.on("message", (message) => {
    console.log(`Received message from client: ${message}`);
  });

  // 处理连接关闭
  ws.on("close", () => {
    console.log("WebSocket connection closed");
  });
});

// 使HTTP服务器监听特定端口
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
