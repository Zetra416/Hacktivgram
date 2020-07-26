module.exports = function(err, req, res, next) {
  let statusCode = 500;
  let errorCode = 'UNKNOWN_ERROR';
  let message =  'Gatau apa errornya';
  console.log(err, "error nih");

  if (err.name == 'SequelizeValidationError') {
    statusCode = 400;
    errorCode = 'VALIDATION_ERROR';
    message = 'Data harus lengkap!';
  }
  else if (err.name == 'DATA_NOT_FOUND') {
    statusCode = 404;
    errorCode = 'DATA_NOT_FOUND';
    message = 'Data tidak ditemukan!' //bakal di handle di front end
  }
  else if (err.name == 'UNAUTHORIZED') {
    statusCode = 401;
    errorCode = 'UNAUTHORIZED';
    message = 'Invalid email / password!';
  }

  res.status(statusCode).json({errorCode, message});
}
