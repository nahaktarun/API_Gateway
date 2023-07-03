const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const { createProxyMiddleware } = require("http-proxy-middleware");
const axios = require("axios");

const app = express();

const PORT = 3005;

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 5,
});

app.use(morgan("combined"));
app.use(limiter);

app.use("/bookingservice", async (req, res, next) => {
  // console.log(req.headers["x-access-token"]);

  try {
    const response = await axios.get(
      "http://localhost:3001/api/v1/isauthenticated",
      {
        headers: {
          "x-access-token": req.headers["x-access-token"],
        },
      }
    );
    console.log(response);

    if (response.data.success) {
      next();
    } else {
      return res.status(401).json({
        message: "unauthorized",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "unauthorized",
    });
  }

  // console.log("Hi");
  // next();
});

app.use(
  "/bookingservice",
  createProxyMiddleware({ target: "http://localhost:3002" })
);
app.get("/home", (req, res) => {
  return res.json({ message: "Success" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
