import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from "@mui/material";
import { CardActionArea } from '@mui/material';

function Post(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>  
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {props.title}
          </Typography>
          <Typography variant="body2" align="center">
            {props.description}
          </Typography>
          <Link
            component="button"
            variant="body2"
            href={props.externalLink}
          >
            {props.postType == "general" && "See Video"}
            {props.postType == "news" && "See News Article"}
          </Link>
          {props.postType === "discussion" && <Link
            component="button"
            variant="body2"
            href={props.url}
          >
            See Online Discussion
          </Link>}
        </CardContent>
      </CardActionArea>
  </Card>
  );
}

export default Post;
