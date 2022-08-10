const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

// URI Configuration
dotenv.config();

// App Init
const app = express();

// DB Connection
mongoose.connect(process.env.DB_URI);

/* Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

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

app.post("/api/posts/create-post", async (req, res) => {
  const info = await db.collection("posts").insertOne(req.cleanData);
  const newPost = await db
    .collection("posts")
    .findOne({ _id: new ObjectId(info.insertedId) });
  res.send(newPost);
});

app.put("/api/posts/update-post/:id", async (req, res) => {
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

// Port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
