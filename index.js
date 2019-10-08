import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

const handleListening = () =>
  console.log(`✅  Listening on: http://localhost:${PORT}`);
const handleHome = (req, res) => res.send("Hello from Home");
const handleProfile = (req, res) => res.send("It's a profile page");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger("combined"));

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);

/* const between = (req, res, next) => {
  console.log("I'm between.");
  next();
};

app.use(between); */

// respond with "hello world" when a GET request is made to the homepage
/* app.get("/", function(req, res) {
  res.send("hello world");
}); */
