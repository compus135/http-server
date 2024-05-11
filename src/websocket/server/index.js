const ws = require("ws");
const server = new ws.Server({ port: 8080, path: "/ws/app" });

server.on("connection", (socket) => {
  console.log("New connection");
  socket.on("message", (message) => {
    console.log(`Received message: ${message}`);
    socket.send(`Echo: ${message}`);
  });
});

server.on("close", () => {
  console.log("Server closed");
});

server.on("error", (error) => {
  console.log(`Server error: ${error.message}`);
});
