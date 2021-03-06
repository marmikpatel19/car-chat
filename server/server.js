const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const port = process.env.PORT || 8000;
const dotenv = require("dotenv");
const sanitizeHTML = require("sanitize-html");

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

// Accessing JSON POST data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

app.delete("/api/posts/:id", async (req, res) => {
  if (typeof req.params.id != "string") req.params.id = "";
  db.collection("posts").deleteOne({ _id: new ObjectId(req.params.id) });
  res.send("good job");
});

app.post("/api/posts/create-post", dataCleanse, async (req, res) => {
  const info = await db.collection("posts").insertOne(req.cleanData);
  const newPost = await db
    .collection("posts")
    .findOne({ _id: new ObjectId(info.insertedId) });
  res.send(newPost);
});

app.put("/api/posts/update-post/:id", dataCleanse, async (req, res) => {
  db.collection("posts").findOneAndUpdate(
    { _id: new ObjectId(req.params.id) },
    {
      $set: {
        title: req.body.draftTitle,
        topic: req.body.draftTopic,
        description: req.body.draftDescription,
      },
    }
  );

  res.send(false);
});

app.use("/api/posts", async (req, res) => {
  const allPosts = await db.collection("posts").find().toArray();
  res.render("home", { allPosts });
});

app.use("*", main);

// Middleware for user data cleansing and sanitization
function dataCleanse(req, res, next) {
  if (typeof req.body.title != "string") req.body.title = "";
  if (typeof req.body.topic != "string") req.body.topic = "";
  if (typeof req.body.description != "string") req.body.description = "";
  if (typeof req.body._id != "string") req.body.id = "";

  // Sanitize values
  req.cleanData = {
    title: sanitizeHTML(req.body.title.trim(), {
      allowedTags: [],
      allowedAttributed: {},
    }),
    topic: sanitizeHTML(req.body.topic.trim(), {
      allowedTags: [],
      allowedAttributed: {},
    }),
    description: sanitizeHTML(req.body.description.trim(), {
      allowedTags: [],
      allowedAttributed: {},
    }),
  };

  next();
}

// Port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
