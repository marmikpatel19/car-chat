const axios = require("axios").default;
const { categorizeData } = require("../helpers/categorizationAlgorithm");
const { createPosts } = require("../helpers/postManagement");
const postsModel = require("../models/postsModel");

// Posts from Reddit API
var posts;

// Cleaned posts (array of Post objects)
var cleanedPosts;

// Sorting categories
var discussions;
var news;
var general;

// GET all posts from Reddit API
const getPosts = async (req, res) => {
  // Obtain raw JSON data from Reddit's API representing posts
  const response = await axios
    .get("https://www.reddit.com/r/cars/hot.json?limit=25")
    .catch((err) => {
      console.log("Error obtaining posts from Reddit API: " + err);
      return;
    });

  posts = response.data;

  // Array of Post objects
  cleanedPosts = createPosts(posts);

  // Obtain categorized data
  try {
    const categorizedData = categorizeData(cleanedPosts);

    discussions = categorizedData[0];
    news = categorizedData[1];
    general = categorizedData[2];
  } catch (err) {
    console.log("Error categorizing posts: " + err);
    return;
  }
};

// GET all posts from Reddit API
const getCategories = async (req, res) => {
  await getPosts();

  res.send([discussions, news, general]);
};

// Create a set of posts
const createSet = async (req, res) => {
  const savePosts = new postsModel({
    date: new Date().toISOString().slice(0, 10),
    categories: {
      categoryOne: {
        name: discussions.name,
        posts: discussions.posts,
      },
      categoryTwo: {
        name: news.name,
        posts: news.posts,
      },
      categoryThree: {
        name: general.name,
        posts: general.posts,
      },
    },
  });

  savePosts
    .save()
    .catch((err) => console.log("Error adding document to mongodb: " + err));
};

module.exports = {
  getPosts,
  getCategories,
  createSet,
};
