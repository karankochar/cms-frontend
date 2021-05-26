import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275, 
    backgroundColor: "#778da9",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    color: "white",
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    color: "white",
  },
});

const QuoteCard = () => {
    const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.content}>
            I can shake off everything as I write, my sorrows disappear, my own courage is reborn.
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
           -Anne Frank
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteCard;
