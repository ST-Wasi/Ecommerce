const jwt = require('jsonwebtoken');
const secretkey = 'abcdefghijklmnopqrstuvwxyz'
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log(token)

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized Access: Token Not Available or Invalid 1 ' });
  }

  jwt.verify(token, secretkey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized Access: Token Not Available or Invalid 2' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = { verifyToken };
