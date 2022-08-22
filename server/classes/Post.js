// Represents a reddit post and include the title, description, and external link.
class Post {
  constructor(title, description, externalLink) {
    this.title = title;
    this.description = description;
    this.externalLink = externalLink;
  }
}

module.exports = {
  Post,
};
