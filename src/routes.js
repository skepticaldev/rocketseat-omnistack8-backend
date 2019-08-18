const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send("Hello world");
});

routes.post("/devs", (req, res) => {
  return res.json({ ok: true });
});

module.exports = routes;
