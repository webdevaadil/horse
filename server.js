const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: "./config.env" });
const express = require("express");
const cookie = require("cookie-parser");
const session = require("express-session")
const bodyparser = require("body-parser")
const redis = require("redis")
const reisStore=require("connect-redis")(session)
const client=redis.createClient()

const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(cookie())

app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

//error handle

// --------------------------deployment------------------------------
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}


// --------------------------deployment------------------------------
app.use(errorHandler)
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
process.on("unhandledRejection", (err, promise) => {
  console.log(` logged error${err}`);
  server.close(() => process.exit(1));
});
