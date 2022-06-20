const express = require("express");
const { MongoClient } = require("mongodb");
const port = process.env.PORT || 8000;
const dotenv = require("dotenv");

// Route Imports
const admin = require("./routes/adminRouter");
const main = require("./routes/mainRouter");

// App Init
const app = express();

// Ejs
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

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

/* Routes */
app.use("/api/posts", async (req, res) => {
  const allPosts = await db.collection("posts").find().toArray();
  res.render("home", { allPosts });
});

app.use("/api/posts/admin", admin);

app.use("*", main);

// Port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
