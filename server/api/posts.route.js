const express = require("express");
const PostsController = require("./posts.controller");
const router = express.Router();

// GET request
router.get("/", (req, res) => {
  PostsController.apiGetPosts(req, res);
});

module.exports = router;
