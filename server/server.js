const express = require("express");
const cors = require("cors");
//const { db } = require("./api/models/postModel");
//const connectDB = require("./index");
const port = process.env.PORT || 8000;
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

//connectDB.connectDB();

const app = express();

app.use(cors());
app.use(express.json());

/*
 *
 *
 *
 *
 *
 */

// Load in environment variables
dotenv.config();

let db;

app.get("/", async (req, res) => {
  const allPosts = await db.collection("posts").find().toArray();
  res.send(allPosts);
});

async function connectDB() {
  const client = new MongoClient(process.env.DB_URI);
  await client.connect();
  db = client.db();
}

connectDB();

// Routes
//app.use("/api/posts", require("./api/posts.route.js"));
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

// Set port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
