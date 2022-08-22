const axios = require("axios").default;
const { categorizeData } = require("../helpers/categorizationAlgorithm");
const { createPosts } = require("../helpers/postManagement");
const Post = require("../classes/post");

// Posts from Reddit API
var posts;

// Cleaned posts (array of Post objects)
var cleanedPosts;

// Sorting categories
var ex1;
var ex2;
var ex3;
var ex4;

// GET all posts from Reddit API
const getPosts = async (req, res) => {
  const response = await axios
    .get("https://www.reddit.com/r/cars/hot.json?limit=25")
    .catch((err) => {
      console.log("Error obtaining posts from Reddit API: " + err);
      return;
    });

  posts = response.data;

  cleanedPosts = createPosts(posts);

  /*const response = await axios
    .get("https://www.reddit.com/r/cars.json")
    .catch((err) => {
      console.log("Error obtaining posts from Reddit API: " + err);
      return;
    });

  posts = response.data;

  // Obtain categorized data
  try {
    const categorizedData = categorizeData(response.data);
    ex1 = categorizedData[0];
    ex2 = categorizedData[1];
    ex3 = categorizedData[2];
    ex4 = categorizedData[3];
  } catch (err) {
    console.log("Error categorizing posts: " + err);
    return;
  }*/
};

module.exports = {
  getPosts,
};
