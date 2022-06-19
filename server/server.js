const express = require("express");
const cors = require("cors");
const connectDB = require("./index");
const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/posts", require("./api/posts.route.js"));
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

// Set port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
