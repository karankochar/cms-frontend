import React, { Component } from "react";
import User from "../../Models/User";

import { UserService } from "../../Services/UserService";
import Table from "material-table";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Edit from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

export default class ViewAllUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: new User(),
      users: [],
    };
  }
  componentDidMount() {
    if (sessionStorage.getItem("username") === null) {
      alert("Unauthorized Access");
      this.props.history.push("/");
    }

    let service = new UserService();
    service.findAllUser().then((result) => {
      this.setState({
        users: result.data,
      });
    });
  }

  render() {
    const role = sessionStorage.getItem("role");
    return (
      <div>
        <Card
          variant="outlined"
          style={{ textAlign: "center", backgroundColor: "#778da9" }}
        >
          <CardContent>
            <Typography variant="h3" component="h2" style={{ color: "white " }}>
              All Users
            </Typography>
            <Typography variant="body2" component="p">
              <br />
              {role == "Admin" ? (
                <Link
                  className="btn btn-outline-light"
                  to={`/cms-app/users/addUser`}
                >
                  AddUser
                </Link>
              ) : null}

              <br />
            </Typography>
          </CardContent>
        </Card>
        <br />
        
        {role === "Admin" ?
        <Table
          title="View All Users"
          columns={[
            { title: "Full Name", field: "fullName" },
            { title: "Email", field: "email" },
            { title: "User Role", field: "role" },
          ]}
          data={this.state.users}
          options={{
            paging: true,
            actionsColumnIndex: -1,
          }}
          actions={[
            {
              icon: "description",
              tooltip: "View User",
              onClick: (event, rowData) =>
                this.props.history.push(`users/search/byId/${rowData.userId}`),
            },

            {
              icon: Edit,
              tooltip: "Update User",
              onClick: (event, rowData) =>
                this.props.history.push(`users/modify/byId/${rowData.userId}`),
            },

            {
              icon: "delete",
              tooltip: "Delete User",
              onClick: (event, rowData) =>
                this.props.history.push(`users/delete/byId/${rowData.userId}`),
            },
          ]}
        ></Table>
 :  <Table
 title="View All Users"
 columns={[
   { title: "FullName", field: "fullName" },
   { title: "Email", field: "email" },
   { title: "User Role", field: "role" },
 ]}
 data={this.state.users}
 options={{
   paging: true,
   actionsColumnIndex: -1,
 }}

></Table> }
      </div>
    );
  }
}
