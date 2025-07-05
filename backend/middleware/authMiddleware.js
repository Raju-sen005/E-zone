
const jwt = require("jsonwebtoken");

const authMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).send({ message: "Unauthorized" });

    try {
      const decoded = jwt.verify(token, "your-secret-key");
      req.user = decoded;

      if (!allowedRoles.includes(decoded.role)) {
        return res.status(403).send({ message: "Access denied" });
      }

      next();
    } catch (err) {
      console.log(err);
      res.status(401).send({ message: "Invalid Token" });
    }
  };
};

module.exports = authMiddleware;
