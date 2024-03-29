import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    maxWidth: 345,
    marginTop: "2%",
    marginLeft: "2%",
    boxShadow: '0 0 10px 0 rgba(169, 169, 169 )'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));

export default function RecipeReviewCard({ key, item, isLoading }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader

        avatar={
          <Avatar aria-label="recipe" className={isLoading ? ` animate` : `${classes.avatar}`}>
            {isLoading ? ` ` : `${item.author.substring(0, 1)}`}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={isLoading ?
          <div class="wrapper">
            <div class="comment br animate w80"></div>
          </div> :
          `${item.author}`
        }
        subheader={isLoading ?
          <div class="wrapper">
            <div class="comment br animate"></div>
          </div> :
          `${item.created_at}`
        }
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" color="textPrimary" component="h6">
          {isLoading ?
            <div class="wrapper">
              <div class="title br animate"></div>
              <div class="title br animate w50"></div>
            </div> :
            `${item.title}`
          }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {isLoading ?
            <div class="wrapper">
              <div class="comment br animate"></div>
              <div class="comment br animate"></div>
              <div class="comment br animate"></div>
            </div> :
            `${item.content}`
          }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <div className="row tags-list">
            {isLoading ?
            <div class="wrapper">
              <div class="comment br animate"></div>
            </div> :
            <h6>Tags</h6>
          }{isLoading === false && item.tag.length > 0 && item.tag.map((tag, key) => (
              <b><p>{tag}</p></b>
            ))}

          </div>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}