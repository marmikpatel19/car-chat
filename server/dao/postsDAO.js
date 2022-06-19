var posts;

// Class representing a data access object
class PostsDAO {
  // Get a list of all the posts

  static async getPosts({ filters = null, Post } = {}) {
    let query;

    // Sorting the search
    if (filters) {
      // Sort by name
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } };
      }
      // Sort by topic database field
      else if ("topic" in filters) {
        query = { topic: { $eq: filters["topic"] } };
      }
    }

    // Find all the posts with the given query
    try {
      await Post.find({ query }).exec((err, data) => {
        if (err) {
          console.log(err);
        } else {
          posts = data;
          return posts;
        }
      });
    } catch (error) {
      console.error(`Error while using find(), ${error}`);
      return { postsList: [] };
    }
    return posts;
  }
}

module.exports = PostsDAO;
