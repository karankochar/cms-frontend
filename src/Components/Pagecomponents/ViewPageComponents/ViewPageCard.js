import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      height:400,
      backgroundColor:'#fff'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      color:'black'
    },
    pos: {
      marginBottom: 12,
    },
    content:{
      color:'black'
    }
  });

const ViewPageCard = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.content}>
          {props.data.content}
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}

export default ViewPageCard
