import React, { Component } from "react";
import { PageService } from "../../Services/PageService";
import { UserService } from "../../Services/UserService";
import {CategoryService} from "../../Services/CategoryService";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import { AccountCircle, MenuBook } from "@material-ui/icons";
import { SimpleCard } from "./DashboardComponents/SimpleCard";
import { SimpleCard2 } from "./DashboardComponents/SimpleCard2";
import { Card, CardContent, Typography } from "@material-ui/core";
import Chart from "./DashboardComponents/Chart";

export default class Dashboard extends Component {
  service = new PageService();
  UserService = new UserService();
  categoryService = new CategoryService();
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      users: [],
      categories:[]
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem("username" === null)) {
      alert("Unauthorized access");
      this.props.history.push("/");
    }
    this.service
      .viewAll()
      .then((result) => {
        this.setState({ pages: result.data });
      })
      .catch((err) => {
        console.log(err);
      });
    this.UserService.viewAll().then((result) => {
      this.setState({ users: result.data });
    });
    this.categoryService.viewAll()
    .then((res)=>{
      console.log(res.data);
      this.setState({categories:res.data})
    }).catch((err)=>{
      alert(err);
    })
  }

  render() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
      <div className={styles.container}>
        {sessionStorage.getItem("username") != null ? (
          <div>
            <div className={styles.greet}>
              <div className="row">
                <div className="col-md">
                  <SimpleCard />
                </div>
                <div className="col-md">
                  <SimpleCard2 />
                </div>
              </div>
            </div>
            <Chart data={this.state.categories}/>
            <div className="row">
              <div className="col-md">
                <h3>
                  Latest Pages <MenuBook />{" "}
                </h3>
                {this.state.pages.length > 0 ? (
                  <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Page Title</TableCell>
                          <TableCell>Category</TableCell>
                          <TableCell>Author</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.state.pages
                          .slice(0)
                          .reverse()
                          .filter((item, index) => {
                            if (index < 5) {
                              return item;
                            }
                          })
                          .map((item) => (
                            <TableRow key={item.pageId}>
                              <TableCell id={styles.li}>
                                <Link to={`pages/viewPage/${item.pageId}`}>
                                  {capitalize(item.pageTitle)}
                                </Link>
                              </TableCell>
                              <TableCell>
                                {capitalize(item.categoryTitle)}
                              </TableCell>
                              <TableCell>{capitalize(item.fullName)}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                ) : null}
                <div className="mt-2">
                  <Link className="btn btn-dark" to={`/cms-app/pages`}>
                    View All Pages
                  </Link>
                </div>
              </div>
              <div className="col-md">
                <h3>
                  Latest Users <AccountCircle fontSize="medium" />
                </h3>
                <TableContainer component={Paper}>
                  <Table size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.users
                        .slice(0)
                        .reverse()
                        .filter((item, index) => {
                          if (index < 5) {
                            return item;
                          }
                        })
                        .map((item) => (
                          <TableRow key={item.userId}>
                            <TableCell>{capitalize(item.fullName)}</TableCell>
                            <TableCell>{item.email.toLowerCase()}</TableCell>
                            <TableCell>{capitalize(item.role)}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <div className="mt-2">
                  <Link className="btn btn-dark" to={`/cms-app/users`}>
                    View All Users
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
