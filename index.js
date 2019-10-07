const express = require("express");
const app = express();
const PORT = 4000;

function handleListening() {
  console.log(`✅  Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("Hello from Home");
}

function handleProfile(req, res) {
  res.send("It's a profile page");
}

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);

// respond with "hello world" when a GET request is made to the homepage
/* app.get("/", function(req, res) {
  res.send("hello world");
}); */
