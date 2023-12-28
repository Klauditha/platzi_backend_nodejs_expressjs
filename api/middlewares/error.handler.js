function logErrors(err, req, res, next) {
  console.log('Log errors');
  console.error();
  'Error handler', err;
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('Error handler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

// Cannot set headers after they are sent to the client
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  else {
    next(err);
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
