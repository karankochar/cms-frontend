import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import styles from './SimpleCard2.module.css'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor:'#778da9'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      color:'white'
    },
    pos: {
      marginBottom: 12,
    },
    content:{
      color:'white'
    }
  });

export const SimpleCard2 = () => {
    let user = sessionStorage.getItem("name");
    let role = sessionStorage.getItem("role");
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          What's on your mind?
        </Typography>
        <Typography variant="h5" component="h2" className={classes.content}>
          You can just write it out
        </Typography>
        <Typography variant="body2" component="p">
          <br/>
          <Link to='/cms-app/pages/addPage' className="btn btn-outline-light">
                  Write
          </Link>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}


