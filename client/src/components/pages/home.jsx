import "../../styling/home.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import logo from "../../images/CarChat Logo.png";
import { Link } from "@mui/material";
import Categories from "../categories";

function Home() {
  // Button click to fetch data
  const [isclicked, setIsClicked] = useState(false);

  // Conditional rendering of the categories component
  let categories = <Categories></Categories>;

  return (
    <div id="home">
      <Link href="/">
        <img id="home-logo" src={logo} alt="CarChar Logo" />
      </Link>
      <h1 id="home-title">Explore what’s trending in the automobile world!</h1>
      {!isclicked ? (
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
      ) : (
        <></>
      )}
      {isclicked ? categories : <></>}
      <div id="home-footer">
        <h3 className="home-footer-text">
          Data for this application is fetched from Reddit's{" "}
          <Link href="https://www.reddit.com/r/cars/">r/cars</Link> subreddit.
        </h3>
        <h3 className="home-footer-text">
          This project was developed by{" "}
          <Link href="https://marmikpatel19.github.io/">Marmik</Link>. See the{" "}
          <Link href="https://github.com/marmikpatel19/car-chat">
            source code
          </Link>
          .
        </h3>
      </div>
    </div>
  );
}

export default Home;
