const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Load in environment variables
dotenv.config();

// Connect to MongoDB db
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URI);

    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

{
  /*const app = require("./server.js");
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const ServerApiVersion = mongo.ServerApiVersion;
const dotenv = require("dotenv");

// Load in environment variables
dotenv.config();

// Set port
const port = process.env.PORT || 8000;

// Connect to db
const client = new MongoClient(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
  const collection = client.db(`${process.env.NS}`).collection("posts");
  client.close();
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = client;
*/
}
