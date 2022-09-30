import "../styling/categories.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Categories() {
  return (
    <div id="categories">
      <Typography component="div" align="center">
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "900",
            fontSize: "1.3rem",
            ["@media screen and (min-width: 550px)"]: { fontSize: "1.5rem" },
          }}
          id="categories-discussions-button"
          /*onClick={() => setIsClicked(true)}*/
        >
          Discussions
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "900",
            fontSize: "1.3rem",
            ["@media screen and (min-width: 550px)"]: { fontSize: "1.5rem" },
          }}
          id="categories-news-button"
          /*onClick={() => setIsClicked(true)}*/
        >
          News
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "900",
            fontSize: "1.3rem",
            ["@media screen and (min-width: 550px)"]: { fontSize: "1.5rem" },
          }}
          id="categories-general-button"
          /* onClick={() => setIsClicked(true)}*/
        >
          general
        </Button>
      </Typography>
    </div>
  );
}

export default Categories;
