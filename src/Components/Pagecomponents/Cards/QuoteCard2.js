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

const QuoteCard2 = () => {
  
    const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.content}>
          “Do you ever start thinking and just get sad over the fact that there will always be more books unread than read.”
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
           -Anuja Panda
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteCard2;