function logErrors(err, req, res, next) {
  console.log("Log errors");
  console.error();
  'Error handler', err;
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log("Error handler");
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = { logErrors, errorHandler };
