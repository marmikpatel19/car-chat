const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  topic: String,
  num_replies: Number,
  description: String,
  user: String,
  date: Date,
  post_id: String,
});

module.exports = mongoose.model("Post", postSchema);
