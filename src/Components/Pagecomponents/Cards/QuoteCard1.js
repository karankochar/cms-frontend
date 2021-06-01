import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275, 
    backgroundColor: "#fec5bb",
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

const QuoteCard1 = () => {
  
    const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
        <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
               <div> Did You Know?</div> 
          </Typography>
          <Typography variant="h5" component="h2" className={classes.content}>
          “The longest sentence ever printed is 823 words. ...”
          </Typography>
         
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteCard1;