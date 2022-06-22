const express = require("express");
const { MongoClient } = require("mongodb");
const port = process.env.PORT || 8000;
const dotenv = require("dotenv");

// Route Imports
const admin = require("./routes/adminRouter");
const main = require("./routes/mainRouter");

// App Init
const app = express();

// Views
app.set("view engine", "ejs");
app.set("views", "../client/src/views");
app.use(express.static("../client/public"));

// URI Configuration
dotenv.config();

/* DB Connection */
let db;

async function connectDB() {
  const client = new MongoClient(process.env.DB_URI);
  await client.connect();
  db = client.db();
}

connectDB();

/* Middleware */
var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

/* Routes */
app.use("/api/posts/admin", admin);

app.use("/api/posts/posts", async (req, res) => {
  const allPosts = await db.collection("posts").find().toArray();
  res.json(allPosts);
});

app.use("/api/posts", async (req, res) => {
  const allPosts = await db.collection("posts").find().toArray();
  res.render("home", { allPosts });
});

app.use("*", main);

// Port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
