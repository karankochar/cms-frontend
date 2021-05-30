import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


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
    
    const classes = useStyles();
    return (
        <div color="seconadry">
            <Card className={classes.root} style={{ textAlign: 'left', backgroundColor:'gray' }}  >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Hey...........
        </Typography>
        <Typography variant="h6" component="h2">
         Choose the category wisely, so you will enjoy the writing.
        </Typography>
        <Typography variant="body2" component="p">
          <br/>
         ....By Writer.
        </Typography>
       <br/>
      <Typography  variant="body2" component="p">
      <Link className='btn btn-primary' to='/addCategory'>Add Category</Link>
      </Typography>
       
        
      </CardContent>
    </Card>
        </div>
    )
}


