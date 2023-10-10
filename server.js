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

const port = process.env.PORT || 5000;

app.listen(port);
