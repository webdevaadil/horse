const ErrorResponse = require("../utlis/errorresponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  console.log(err);
  error.message = err.message;
  if (err.code === 11000) {
    const message = "duplicate filed value Enter";
    error = new ErrorResponse(message, 400);
  }
  if (err.name === "validation error") {
    const message = Object.values(err.error).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "server error",
  });
};
module.exports = errorHandler;
