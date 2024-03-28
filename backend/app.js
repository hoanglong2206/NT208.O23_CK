const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

const userRoute = require("./routes/UserRoute");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mongoSanitize());

app.use(function (req, res, next) {
  const url = req.url;
  const method = req.method;
  console.log(`URL: ${url}`);
  console.log(`Method: ${method}`);

  next();
});

app.use("/api/user", userRoute);

module.exports = app;
