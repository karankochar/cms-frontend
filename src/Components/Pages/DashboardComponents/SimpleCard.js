import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import styles from './SimpleCard.module.css'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    
  });

export const SimpleCard = () => {
    let user = sessionStorage.getItem("name");
    let role = sessionStorage.getItem("role");
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root, styles.container}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Welcome back
        </Typography>
        <Typography variant="h5" component="h2">
          {user}({role})
        </Typography>
        <Typography variant="body2" component="p">
          <br/>
          <Link to="/cms-app/logout" className="btn btn-outline-dark">
                  Logout
          </Link>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}

