const { Post } = require("../classes/post");

const NUM_POSTS = 35;

// Creates an array of Post objects from raw JSON data of posts from Reddit API
const createPosts = (posts) => {
  var cleanedPosts = [];

  // Iterate through raw JSON date containing all posts, capturing relevant information and
  // storing them in Post objects, and into the cleanedPosts array
  for (var i = 2; i < NUM_POSTS; i++) {
    // JSON data of post
    var post = posts.data.children[i].data;

    // Post title
    var title = post.title;

    // Post description. Null indicates no description
    var description;

    try {
      description = post.selftext;

      if (description == "") {
        description = null;
      }
    } catch (error) {
      description = null;
    }

    // Post external link. Null indicates no external link
    var externalLink;

    try {
      externalLink = post.url_overridden_by_dest;

      if (externalLink == "" || externalLink == null) {
        externalLink = null;
      }
    } catch (error) {
      externalLink = null;
    }

    // Post url. Null indicates no external link
    var url;

    try {
      url = post.permalink;

      if (url == "" || url == null) {
        url = null;
      } else {
        url = "https://www.reddit.com" + url;
      }
    } catch (error) {
      url = null;
    }

    // new Post object
    const cleanedPost = new Post(title, description, externalLink, url);

    cleanedPosts.push(cleanedPost);
  }

  return cleanedPosts;
};

module.exports = {
  createPosts,
};
