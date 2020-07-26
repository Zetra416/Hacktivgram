const jwt = require('jsonwebtoken');
const secretKey = "password";

const authentication = (req, res, next) => {
  const { access_token } = req.headers;

  if (!access_token) {
    next({name: 'DATA_NOT_FOUND'})
  }
  try {
    const decoded = jwt.verify(access_token, secretKey);
    req.userData = decoded;
    next();
  }
  catch(err) {
    next(err);
  }
}

module.exports = authentication;
