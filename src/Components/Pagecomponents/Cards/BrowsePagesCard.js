import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";


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

export const BrowsePagesCard = () => {
  let user = sessionStorage.getItem("name");
 
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
               <div> Hello! {user}</div> 
          </Typography>
          <Typography variant="h5" component="h2" className={classes.content}>
            <div> Why don't you have a look at all the pages </div>
          </Typography>
          <Typography variant="body2" component="p">
            <br />
            
            <Link to="/cms-app/pages" className="btn btn-outline-light">
             Browse
            </Link>
           
            
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};