const PostsDAO = require("../dao/postsDAO");
const Post = require("./models/postModel");

class PostsController {
  // API handling for get posts
  static async apiGetPosts(req, res, next) {
    // Set filters using query string
    let filters = {};
    if (req.query.topic) {
      filters.topic = req.query.topic;
    } else if (req.query.name) {
      filters.name = req.query.name;
    }

    // Call getPosts and obtain list of posts
    const postsList = PostsDAO.getPosts({
      filters,
      Post,
    });

    console.log(`in controller: ${postsList}`);

    // Response to send to user
    let response = {
      posts: postsList,
      filters: filters,
    };
    res.json(response);
  }
}

module.exports = PostsController;
