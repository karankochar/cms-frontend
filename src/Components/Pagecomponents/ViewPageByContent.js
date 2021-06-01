import React, { Component } from "react";
import { PageService } from "../../Services/PageService";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

export default class ViewPageByContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
    };
  }
  componentDidMount() {
    let service = new PageService();
    if(sessionStorage.getItem("username") === null){
      alert("Unauthorized");
      this.props.history.push("/")
    }
    service
      .findPageByContent(this.props.match.params.content)
      .then((result) => {
        console.log(result);
        this.setState({ pages: result.data });
        })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {this.state.pages.length > 0 ? (
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    {" "}
                    <b>Page Title</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Category</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Author</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.pages.map((p) => (
                  <TableRow>
                    <TableCell align="center">
                      <Link to={`/cms-app/pages/byId/${p.pageId}`}>
                        {p.pageTitle}
                      </Link>
                    </TableCell>
                    <TableCell align="center">{p.categoryTitle}</TableCell>
                    <TableCell align="center">{p.fullName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : <h2>No page found</h2>
        }
      </div>
    );
  }
}
