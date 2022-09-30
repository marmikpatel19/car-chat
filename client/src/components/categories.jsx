import "../styling/categories.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Categories() {
  // Hooks for buttons
  const [isNewsClicked, setIsNewsClicked] = useState(true);
  const [isDiscussionsClicked, setIsDiscussionsClicked] = useState(false);
  const [isGeneralClicked, setIsGeneralClicked] = useState(false);

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
