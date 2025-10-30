const express = require("express");
const compression = require("compression");
const { parse } = require("url");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // Enable gzip compression
    server.use(compression());

    // ✅ Express 5-compatible wildcard (use regex)
    server.all(/.*/, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(
        `✅ Server ready on http://localhost:${port} (${
          dev ? "development" : "production"
        })`
      );
    });
  })
  .catch((err) => {
    console.error("❌ Error starting server:", err);
    process.exit(1);
  });
