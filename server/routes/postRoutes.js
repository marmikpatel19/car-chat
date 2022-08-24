const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getPosts, getCategories } = require("../controllers/postController");

// Router
const router = express.Router();

// Middleware
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// GET request to obtain all posts from Reddit API
router.get("/posts", getPosts);

// GET categories from server
router.get("/categories", getCategories);

module.exports = router;
