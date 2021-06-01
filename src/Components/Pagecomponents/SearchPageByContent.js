import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { BrowsePagesCard } from "./Cards/BrowsePagesCard";
import QuoteCard1 from "./Cards/QuoteCard1"; 

export default class SearchPageByContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }
  render() {
    if (sessionStorage.getItem("username") === null) {
      alert("Unauthorized Access");
      this.props.history.push("/");
    }


    return (
    <div>
        <Card variant="outlined" style={{ textAlign: 'center' , backgroundColor: '#fff' }} >
          <CardContent  >
            <div>
              <h3 style={{ color: 'black' }}> Happy Searching !!</h3>
           
              <div>
                <form>
                  <div className="row">
                    <div className="col">
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Search a word..." value={this.state.content}
                        onChange={(e) => {
                          this.setState({ content: e.target.value });
                        }} />

                    </div>
                    <div className="col">  </div>
                  </div>
                  <br/>
                  <Link
                    className="btn btn-primary mb-2"
                    to={`/pages/viewPageByContent/${this.state.content}`}>
                    {" "}Search</Link>

                </form>
              </div>
            </div>
          </CardContent>
        </Card>
     <br />
     <br />
        <div className="row">
              <div className="col">
              <BrowsePagesCard/>
            
              </div>
              <div className="col">
        <QuoteCard1/>
              </div>
        </div>
        </div> 

    );
  }
}











