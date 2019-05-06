const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "test12345test12345");
    next();
  } catch (error) {
    res.status(401).json({
      message: "Wrong credentials!!!!!!"
    });
  }
};
