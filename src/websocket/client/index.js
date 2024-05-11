const websocket = new WebSocket("ws://localhost:8080/ws/app");

websocket.onopen = function (event) {
  console.log("WebSocket opened");
};

websocket.onmessage = function (event) {
  console.log("Received message:" + event.data);
};

websocket.onerror = function (error) {
  console.log("WebSocket error:" + JSON.stringify(error));
};

websocket.onclose = function (event) {
  console.log("WebSocket closed");
};

document.getElementById("send").addEventListener("click", function () {
  const input = document.getElementById("message");
  const message = input.value;
  console.log("send", message);
  websocket.send(message);
  input.value = "";
});
