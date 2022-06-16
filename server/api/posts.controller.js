const PostsDAO = require("../dao/postsDAO");

class PostsController {
  // API handling for get posts
  static async apiGetPosts(req, res, next) {
    const postsPerPage = req.query.postsPerPage
      ? parseInt(req.query.postsPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    // Set filters using query string
    let filters = {};
    if (req.query.topic) {
      filters.topic = req.query.topic;
    } else if (req.query.name) {
      filters.name = req.query.name;
    }

    // Call getPosts and obtain list of posts and the total number of posts
    const { postsList, totalNumPosts } = await PostsDAO.getPosts({
      filters,
      page,
      postsPerPage,
    });

    // Response to send to user
    let response = {
      posts: postsList,
      page: page,
      filters: filters,
      entries_per_page: postsPerPage,
      total_results: totalNumPosts,
    };
    res.json(response);
  }
}

module.exports = PostsController;
