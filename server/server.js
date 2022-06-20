const express = require("express");
const { MongoClient } = require("mongodb");
const port = process.env.PORT || 8000;
const dotenv = require("dotenv");

// App Init
const app = express();

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

// Port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
