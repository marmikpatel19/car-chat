// Reference to db
let posts;

export default class PostsDAO {
  // Get a list of all the posts
  static async getPosts({ filters = null, page = 0, postsPerPage = 10 } = {}) {
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

    let cursor;

    // Find all the posts with the given query
    try {
      cursor = await posts.find(query);
    } catch (error) {
      console.error(`Unable to issue find command, ${error}`);
      return { postsList: [], totalNumPosts: 0 };
    }

    // Manipulate search result
    const displayCursor = cursor.limit(postsPerPage).skip(postsPerPage * page);

    // Return array and total number of posts
    try {
      const postsList = await displayCursor.toArray();
      const totalNumPosts = await posts.countDocuments(query);

      return { postsList, totalNumPosts };
    } catch (error) {
      console.error(
        `Unable to convert cursor to array or count documents, ${error}`
      );
      return { postsList: [], totalNumPosts: 0 };
    }
  }
}
