const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mydb", "myuser", "mypassword", {
  host: "54.88.49.238",
  dialect: "mysql",
  port: 3306,
  logging: false
});


// Test the connection (optional but helpful)
sequelize.authenticate()
  .then(() => console.log("✅ MySQL connection successful"))
  .catch((err) => console.error("❌ MySQL connection failed:", err));

module.exports = sequelize;
