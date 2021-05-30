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

export const SimpleCard2 = () => {
  let user = sessionStorage.getItem("name");
  let role = sessionStorage.getItem("role");
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
            {role==="User" ? <div>What's on your mind</div> : <div>Hey Admin</div> }
          </Typography>
          <Typography variant="h5" component="h2" className={classes.content}>
            {role==="User" ? <div>You can just write it out</div> : <div>Manage users</div> }
          </Typography>
          <Typography variant="body2" component="p">
            <br />
            {role==="User" ?
            <Link to="/cms-app/pages/addPage" className="btn btn-outline-light">
            Write
            </Link>
            : <Link to="/cms-app/users" className="btn btn-outline-light">
            Manage
            </Link> }
            
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
