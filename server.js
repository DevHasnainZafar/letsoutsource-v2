const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const compression = require("compression");
const express = require("express");
const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  server.use(compression());
  server.all("*", (req, res) => handle(req, res));
  server.listen(port, () => {
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? "development" : process.env.NODE_ENV
      }`
    );
  });
});
