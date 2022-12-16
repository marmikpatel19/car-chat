import "../styling/categories.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import axios from 'axios';

function Categories() {
  // Hooks for buttons
  const [isNewsClicked, setIsNewsClicked] = useState(true);
  const [isDiscussionsClicked, setIsDiscussionsClicked] = useState(false);
  const [isGeneralClicked, setIsGeneralClicked] = useState(false);

  // Array of Post objects
  const [newsPosts, setNewsPosts] = useState(null);
  const [discussionPosts, setDiscussionPosts] = useState(null);
  const [generalPosts, setGeneralPosts] = useState(null);

  useEffect(() => {
    // response.data is an array consisting of Category objects
    // within each Category object, .posts gets the array of Post objects, which can be indexed
    // each array of Post objects has fields title, discription, externalLink, and url
    const getPosts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/api/categories`
      );

      setDiscussionPosts(response.data[0].posts);
      setNewsPosts(response.data[1].posts);
      setGeneralPosts(response.data[2].posts);
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
    </div>
  );
}

export default Categories;