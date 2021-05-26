import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

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

const NavCard = () => {
    let name = sessionStorage.getItem("name");
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
           {name}
          </Typography>
          <Typography variant="h5" component="h2" className={classes.content}>
            Look at what other creators have been writing
          </Typography>
          <br/>
          <Link className='btn btn-light'>Browse</Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default NavCard;
