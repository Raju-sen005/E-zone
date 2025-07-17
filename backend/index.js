const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/api.route");

require("dotenv").config();

const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DB Connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error", err));

// Routes
app.use("/api/v1", router);
app.use("/api/blogs", blogRoutes);  // ✅ यही रखें

app.get("/", (req, res) => {
  res.send("API चल रही है...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
