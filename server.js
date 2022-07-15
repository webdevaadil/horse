const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
connectDB();

const app = express();

app.use(express.json());
app.use("/api/auth", require("./routes/auth"));

//error handle
app.use(errorHandler)
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
process.on("unhandledRejection", (err, promise) => {
  console.log(` logged error${err}`);
  server.close(() => process.exit(1));
});
