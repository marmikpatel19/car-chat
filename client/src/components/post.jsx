import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Link } from "@mui/material";
import { CardActionArea } from "@mui/material";
import ReadMoreAndLess from "react-read-more-less";
import "../styling/post.css";

function Post(props) {
  var width = props.postType === "discussion" ? 1000 : 500;
  var disc = props.description === null ? "" : props.description;

  return (
    <Card sx={{ maxWidth: width }}>
      <CardActionArea>
        <CardContent>
          <p id="post-title">{props.title}</p>
          <div id="post-discription">
            <ReadMoreAndLess
              className="read-more-content"
              readMoreText=" Read more"
              readLessText=" Read less"
            >
              {disc}
            </ReadMoreAndLess>
          </div>
          <Button
            component={Link}
            target="_blank"
            href={props.externalLink}
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
              target="_blank"
              href={props.url}
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
