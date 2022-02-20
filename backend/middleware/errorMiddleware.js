const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  const stackTrace = process.env.NODE_ENV === "production" ? null : err.stack;
  res.status(statusCode);
  res.json({ message: err.message, stack: stackTrace });
};

module.exports = { errorHandler };
