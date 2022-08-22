// Represents a category of posts, and includes an array of posts within that category
class Category {
  constructor(name, posts) {
    this.name = name;
    this.posts = posts;
  }
}

module.exports = {
  Category,
};
