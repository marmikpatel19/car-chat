import "../../styling/home.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Home() {
  // Button click to fetch data
  const [isclicked, setIsClicked] = useState(false);

  // Conditional rendering of the categories component
  let categories;

  if (isclicked) {
    categories = <p>temp categories</p>;
  } else {
    categories = <></>;
  }

  return (
    <div id="home">
      <h1 id="home-title">Explore what’s trending in the automobile world!</h1>
      <Typography component="div" align="center">
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "900",
            fontSize: "1.3rem",
            ["@media screen and (min-width: 550px)"]: { fontSize: "1.5rem" },
          }}
          id="home-button"
          onClick={() => setIsClicked(true)}
        >
          See Posts
        </Button>
      </Typography>
      {categories}
    </div>
  );
}

export default Home;
