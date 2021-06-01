import React, { Component } from "react";
import User from "../../Models/User";
import { UserService } from "../../Services/UserService";

import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default class AddAdmin extends Component {
  service = new UserService();
  state = {
    user: new User(),
    users: [],

    error: {
      roleError: "",
      fullNameError: "",
      userNameError: "",
      emailError: "",
      passwordError: "",
      statusError: "",
    },
  };

  validate = () => {
    let flag = true;
    let error = {};

    if (!this.state.user.userName) {
      flag = false;
      error.userNameError = "User Name Is Required";
    }
    if (!this.state.user.fullName) {
      flag = false;
      error.fullNameError = "FullName Is Required";
    }
    if (!this.state.user.email || !this.state.user.email.includes("@")) {
      flag = false;
      error.emailError = " Valid Email Is Required";
    }
    if (!this.state.user.password || this.state.user.password.length < 6) {
      flag = false;
      error.passwordError = " Valid Password Is Required";
    }

    if (!this.state.user.role || this.state.user.role === "") {
      flag = false;
      error.roleError = " Role Is Required";
    }
    if (!this.state.user.status) {
      flag = false;
      error.statusError = "Status Is Required";
    }
    

    this.setState({ error: error });
    return flag;
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = this.validate();
    if (!isValid) {
      return false;
    }

    this.service
      .addAdmin(this.state.user)
      .then((data) => {
        alert(" Added Successful");

        this.props.history.push("/cms-app/users");
      })
      .catch((error) => {
        console.log(error)
        alert(error);
        // alert(JSON.stringify(error))

        // redirect you to viewAll component after alert box
        this.props.history.push("/cms-app/users");
      });
  };

  componentDidMount() {
    if (sessionStorage.getItem("username") === null) {
      alert("Unauthorized Access");
      this.props.history.push("/");
    }
    let service = new UserService();
    service.findAllUser(this.props.match.params.id).then((result) => {
      this.setState({
        user: result.data,
      });
    });
  }

  render() {
    return (
      <div className="container">
        <Card>
          <CardContent>
            <Typography variant="h3" component="h2" className='text-center'>
              Add User or Admin
              <br />
            </Typography>
            <Typography variant="body2" component="p">
              <br />
              <form onSubmit={this.handleSubmit}>
                <div className="form-group mr2">
                  <div className="alert-danger">
                    {this.state.error.userNameError}
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    placeholder="Enter Username"
                    value={this.state.user.userName}
                    onChange={(event) =>
                      this.setState({
                        user: {
                          ...this.state.user,
                          userName: event.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="form-group mr2">
                  <div className="alert-danger">
                    {this.state.error.fullNameError}
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter Full Name"
                    value={this.state.user.fullName}
                    onChange={(event) =>
                      this.setState({
                        user: {
                          ...this.state.user,
                          fullName: event.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="form-group mr2">
                  <div className="alert-danger">
                    {this.state.error.emailError}
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email"
                    value={this.state.user.email}
                    onChange={(event) =>
                      this.setState({
                        user: { ...this.state.user, email: event.target.value },
                      })
                    }
                  />
                </div>
                <div className="form-group mr2">
                  <div className="alert-danger">
                    {this.state.error.passwordError}
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={this.state.user.password}
                    onChange={(event) =>
                      this.setState({
                        user: {
                          ...this.state.user,
                          password: event.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="form-group mr2">
                  <div className="alert-danger">
                    {this.state.error.roleError}
                  </div>

                  {/* <input
                    type="text"
                    className="form-control"
                    id="role"
                    placeholder="Enter User Role"
                    value={this.state.user.role}
                    onChange={(event) =>
                      this.setState({ user: { ...this.state.user, role: event.target.value } })
                    }
                  /> */}
                  {/* <select */}
                  <select
                    className="form-control"
                    value={this.state.user.role}
                    onChange={(event) =>
                      this.setState({
                        user: { ...this.state.user, role: event.target.value },
                      })
                    }
                  >
                    <option value="">Select role</option>
                    <option>Admin</option>
                    <option>User</option>
                  </select>
                </div>
                <div className="form-group mr2">
                  <div className="alert-danger">
                    {this.state.error.statusError}
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    id="status"
                    placeholder="Enter User Status - Only true or false"
                    value={this.state.user.status}
                    onChange={(event) =>
                      this.setState({
                        user: {
                          ...this.state.user,
                          status: event.target.value,
                        },
                      })
                    }
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary form-control"
                    onClick={() => {
                      this.state.users.push(this.state.user);
                      this.setState({ users: this.state.users });
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}
