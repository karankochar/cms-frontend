import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import blue from '../Pages/blue.jpg'

export default class SearchPageByContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }
  render() {



    return (



      <Card variant="outlined" style={{ textAlign: 'center', backgroundColor: '#778da9', minHeight:'100px', width: '50%' ,margin: 'auto' ,marginTop:'5%',marginBottom:'5%' }} >
        <CardContent  >
          <div>
               <h2 style={{color:'white'}}> Search Pages By content</h2>

              <div>
              <form>
                <div class="row">
                  <div class="col">
                    </div>  
                  <div class="col">
                  <input type="text" class="form-control" placeholder="Search..." value={this.state.content}
                      onChange={(e) => {
                        this.setState({ content: e.target.value });
                      }} />
                      
                  </div>
                  <div class="col">
                  
                  </div>
               
                
               
                </div> 
                
                <Link
                      className="btn btn-primary mb-2"
                      to={`/pages/viewPageByContent/${this.state.content}`}>
                      {" "}Search</Link>
                  
              </form>
            </div>
          </div>

        </CardContent>
      </Card>


  
    );
  }
}


