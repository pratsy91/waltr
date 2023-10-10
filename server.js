const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json("This is a get request");
});

app.post("/", (req, res) => {
  return res.json("This is a post request");
});

app.delete("/", (req, res) => {
  return res.json("This is a delete request");
});

app.listen(3000);
