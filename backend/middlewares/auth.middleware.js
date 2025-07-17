const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const isAuth = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Login first to access this resource." });
    }

    const token = authorizationHeader && authorizationHeader.split(" ")[1];

    
    if (!token) {
      return res.status(401).json({ message: "Login first to access this resource." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");


    const user = await userModel.findById(decoded.id);

    if (user) req.user = user;

    next();
  } catch (error) {
    console.error("JWT Error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = isAuth;
