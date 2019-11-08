const { Router } = require("express");

const routes = new Router();

routes.get("/", (request, response) => {
  return response.json({ message: "Test ok" });
});

module.exports = routes;
