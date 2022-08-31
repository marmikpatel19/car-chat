const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  categories: {
    categoryOne: {
      name: {
        type: String,
      },
      posts: [],
    },
    categoryTwo: {
      name: {
        type: String,
      },
      posts: [],
    },
    categoryThree: {
      name: {
        type: String,
      },
      posts: [],
    },
  },
});

const postsModel = mongoose.model("posts", postsSchema);
module.exports = postsModel;
