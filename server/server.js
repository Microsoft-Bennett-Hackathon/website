const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 3000;

app.listen(port, () => {
  console.log(`the server is running on http://localhost:${port}`);
});
