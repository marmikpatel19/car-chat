import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Link } from "@mui/material";
import { CardActionArea } from "@mui/material";
import "../styling/post.css";

function Post(props) {
  var width = props.postType === "discussion" ? 1000 : 500;

  return (
    <Card sx={{ maxWidth: width }}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            sx={{
              fontWeight: "900",
              fontSize: "1.3rem",
              ["@media screen and (min-width: 550px)"]: { fontSize: "1.5rem" },
            }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{
              fontWeight: "400",
              fontSize: "1.3rem",
              ["@media screen and (min-width: 550px)"]: { fontSize: "1.5rem" },
            }}
          >
            {props.description}
          </Typography>
          <Button
            component={Link}
            to={props.externalLink}
            variant="body2"
            sx={{
              fontWeight: "400",
              fontSize: "1.3rem",
              ["@media screen and (min-width: 550px)"]: { fontSize: "1.5rem" },
            }}
            style={{
              "text-transform": "none",
              margin: "0 auto",
              display: "flex",
              color: "var(--clr-primary)",
            }}
          >
            {props.postType == "general" && "See Video"}
            {props.postType == "news" && "See News Article"}
          </Button>
          {props.postType === "discussion" && (
            <Button
              component={Link}
              to={props.url}
              variant="body2"
              sx={{
                fontWeight: "400",
                fontSize: "1.3rem",
                ["@media screen and (min-width: 550px)"]: {
                  fontSize: "1.5rem",
                },
              }}
              style={{
                "text-transform": "none",
                margin: "0 auto",
                display: "flex",
                color: "var(--clr-primary)",
              }}
            >
              See Online Discussion
            </Button>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Post;
