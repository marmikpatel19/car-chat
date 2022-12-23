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
          <Typography variant="body2" >
            {props.discription}
          </Typography>
          <Link
            component="button"
            variant="body2"
            href={props.externalLink}
          >
            See Video
          </Link>
          <Link
            component="button"
            variant="body2"
            href={props.url}
          >
            See Discussion
          </Link>
        </CardContent>
      </CardActionArea>
  </Card>
  );
}

export default Post;
