import "../styling/categories.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./post";
import { Grid } from "@mui/material";
import { CircularProgress } from "@mui/material";

function Categories() {
  // Hooks for buttons
  const [isNewsClicked, setIsNewsClicked] = useState(true);
  const [isDiscussionsClicked, setIsDiscussionsClicked] = useState(false);
  const [isGeneralClicked, setIsGeneralClicked] = useState(false);

  // Array of Post objects
  const [newsPosts, setNewsPosts] = useState([]);
  const [discussionPosts, setDiscussionPosts] = useState([]);
  const [generalPosts, setGeneralPosts] = useState([]);
  const [isAPILoading, setIsAPILoading] = useState(true);

  useEffect(() => {
    // Response.data is an array consisting of Category objects.
    // Within each Category object, .posts gets the array of Post objects, which can be indexed.
    // Each array of Post objects has fields title, description, externalLink, and url.
    const getPosts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/api/categories`
      );

      setDiscussionPosts(response.data[0].posts);
      setNewsPosts(response.data[1].posts);
      setGeneralPosts(response.data[2].posts);
      setIsAPILoading(false);
    };

    getPosts();
  }, []);

  return (
    <div id="categories">
      <Typography component="div" align="center">
        <Button
          variant="contained"
          {...(isNewsClicked ? { color: "secondary" } : { color: "primary" })}
          sx={{
            fontWeight: "900",
            fontSize: "1.3rem",
            ["@media screen and (min-width: 550px)"]: { fontSize: "1.5rem" },
          }}
          id="categories-buttons"
          onClick={() => {
            setIsNewsClicked(true);
            setIsDiscussionsClicked(false);
            setIsGeneralClicked(false);
          }}
        >
          News
        </Button>
        <Button
          variant="contained"
          {...(isDiscussionsClicked
            ? { color: "secondary" }
            : { color: "primary" })}
          sx={{
            fontWeight: "900",
            fontSize: "1.3rem",
            ["@media screen and (min-width: 550px)"]: { fontSize: "1.5rem" },
          }}
          id="categories-buttons"
          onClick={() => {
            setIsNewsClicked(false);
            setIsDiscussionsClicked(true);
            setIsGeneralClicked(false);
          }}
        >
          Discussions
        </Button>
        <Button
          variant="contained"
          {...(isGeneralClicked
            ? { color: "secondary" }
            : { color: "primary" })}
          sx={{
            fontWeight: "900",
            fontSize: "1.3rem",
            ["@media screen and (min-width: 550px)"]: { fontSize: "1.5rem" },
          }}
          id="categories-buttons"
          onClick={() => {
            setIsNewsClicked(false);
            setIsDiscussionsClicked(false);
            setIsGeneralClicked(true);
          }}
        >
          general
        </Button>
      </Typography>
      {isAPILoading && (
        <CircularProgress
          style={{ marginLeft: "48%", marginTop: "4%", marginBottom: "4%" }}
        />
      )}
      {!isAPILoading && (
        <div id="categories-posts">
          <Grid
            container
            spacing={{ xs: 4 }}
            columnSpacing={{ sm: 2, md: 3 }}
            align="center"
            id="categories-grid"
          >
            {isNewsClicked &&
              newsPosts.map((post) => {
                return (
                  <Grid
                    key={post.title}
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                  >
                    <Post
                      title={post.title}
                      description={post.description}
                      externalLink={post.externalLink}
                      postType="news"
                    ></Post>
                  </Grid>
                );
              })}
            {isDiscussionsClicked &&
              discussionPosts.map((post) => {
                return (
                  <Grid
                    key={post.title}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}
                  >
                    <Post
                      title={post.title}
                      description={post.description}
                      externalLink={post.externalLink}
                      url={post.url}
                      postType="discussion"
                    ></Post>
                  </Grid>
                );
              })}
            {isGeneralClicked &&
              generalPosts.map((post) => {
                return (
                  <Grid
                    key={post.title}
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                  >
                    <Post
                      title={post.title}
                      description={post.description}
                      externalLink={post.externalLink}
                      url={post.url}
                      postType="general"
                    ></Post>
                  </Grid>
                );
              })}
          </Grid>
        </div>
      )}
    </div>
  );
}

export default Categories;
