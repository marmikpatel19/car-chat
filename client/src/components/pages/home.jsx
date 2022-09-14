import "../../styling/home.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Home() {
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
        >
          See Posts
        </Button>
      </Typography>
    </div>
  );
}

export default Home;
