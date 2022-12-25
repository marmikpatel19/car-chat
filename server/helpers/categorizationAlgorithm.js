const { Category } = require("../classes/category");

// Categorize reddit post into relevant categories based on common post attributes
const categorizeData = (posts) => {
  // Sorting categories
  var discussionsArray = [];
  var newsArray = [];
  var generalArray = [];

  for (var i = 0; i < posts.length; i++) {
    // A post fits into the Discussions category if it has an associated user discussion (a description)
    if (posts[i].description != null) {
      discussionsArray.push(posts[i]);
    }

    // A post fits into the News category if it lacks a description but includes a non-YouTube link
    else if (
      posts[i].externalLink != null &&
      !posts[i].externalLink.includes("youtu")
    ) {
      newsArray.push(posts[i]);
    }
    // A post fits into the General category lacks a description and includes a non-YouTube link or no link
    else {
      generalArray.push(posts[i]);
    }
  }

  var discussions = new Category("discussions", discussionsArray);
  var news = new Category("news", newsArray);
  var general = new Category("general", generalArray);

  var categorizedData = [discussions, news, general];

  return categorizedData;
};

module.exports = {
  categorizeData,
};
