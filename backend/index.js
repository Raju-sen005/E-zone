const express = require("express");
const app = express();
const sequelize = require("./config/db");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes");
const phonepayRoutes = require("./routes/phonepayRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// ✅ Set up CORS properly
app.use(cors());

// app.options("*", cors()); // ✅ Handle preflight

// ✅ body-parser middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api", contactRoutes);
app.use("/phonepay", phonepayRoutes);

// ✅ Sequelize Start
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database Authenticated");

    await sequelize.sync({ alter: true });
    console.log("✅ Tables Synced");

    app.listen(5000, () => {
      console.log("🚀 Server is running on http://localhost:5000");
    });
  } catch (error) {
    console.error("❌ Server Error:", error);
  }
})();
