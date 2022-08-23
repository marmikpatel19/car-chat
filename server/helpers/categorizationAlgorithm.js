// Categorize reddit post into relevant categories based on common post attributes
const categorizeData = (posts) => {
  // Sorting categories
  var discussions = [];
  var news = [];
  var general = [];

  for (var i = 0; i < posts.length; i++) {
    // A post fits into the Discussions category if it has an associated user discussion (a description)
    if (posts[i].description != null) {
      discussions.push(posts[i]);
    }

    // A posts[i] fits into the News category if it lacks a description but includes a non-YouTube link
    else if (
      posts[i].externalLink != null &&
      !posts[i].externalLink.includes("https://www.youtube.com")
    ) {
      news.push(posts[i]);
    }
    // A posts[i] fits into the General category lacks a description and includes a non-YouTube link or no link
    else {
      general.push(posts[i]);
    }
  }

  var categorizedData = [discussions, news, general];

  return categorizedData;
};

module.exports = {
  categorizeData,
};
