import React, { Component } from 'react'
import User from '../../Models/User';
import { UserService } from '../../Services/UserService';
import { Card, makeStyles } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default class ModifyUser extends Component {
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

    }
  };
  componentDidMount() {
    // if (sessionStorage.getItem("username") === null) {
    //   alert('Unauthorized Access');
    //   this.props.history.push("/");
    // }////////////////////////////////////////////////////////

    this.service.findUserById(this.props.match.params.id)
      .then((result) => {
        this.setState({
          user: result.data,
        });
      })
      .catch((error) => {
        alert(JSON.stringify("error: " + error));
      });
  }
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
    if (!this.state.user.email) {
      flag = false;
      error.emailError = "Email Is Required";
    }
    if (!this.state.user.password) {
      flag = false;
      error.passwordError = "Password Is Required";
    }
    if (!this.state.user.role) {
      flag = false;
      error.roleError = "Role Is Required";
    }
    if (!this.state.user.status) {
      flag = false;
      error.statusError = "Status Is Required";
    }


    this.setState({ error: error })
    return flag;
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = this.validate();
    if (!isValid) {
      return false;
    }

    this.service.modifyUser(this.props.match.params.id, this.state.user)
      .then((data) => {
        alert("User Modified Successful");
        // redirect you to viewAll component after adding user
        this.props.history.push("/viewAll");
      })
      .catch((error) => {
        alert(JSON.stringify(error))
        // alert(error.response.data.message);
        // redirect you to Home component after alert box
        this.props.history.push("/viewAll");
      });
  };

  render() {
    let role = sessionStorage.getItem("role").toLowerCase();
    return (
      <div className='container'>
        <Card  >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Enter detail to Modify  User
        </Typography>
            <Typography variant="h3" component="h2">
              Modify User
        </Typography>
            <Typography variant="body2" component="p">
              <br />
              <form onSubmit={this.handleSubmit}>


                <div className="form-group mr2">
                  <div className="alert-danger">{this.state.error.userNameError}</div>
                  <label className="col-sm-2 col-form-label "><b>Enter User Name </b></label>
                  <input
                    type="text"
                    className="col-sm-6"
                    id="userName"
                    placeholder="Enter User Name"
                    value={this.state.user.userName}
                    onChange={(event) =>
                      this.setState({ user: { ...this.state.user, userName: event.target.value } })
                    }
                  />
                </div>
                <div className="form-group mr2">
                  <div className="alert-danger">{this.state.error.fullNameError}</div>
                  <label className="col-sm-2 col-form-label "><b>Enter User FullName </b></label>
                  <input
                    type="text"
                    className="col-sm-6"
                    id="fullName"
                    placeholder="Enter User FullName"
                    value={this.state.user.fullName}
                    onChange={(event) =>
                      this.setState({ user: { ...this.state.user, fullName: event.target.value } })
                    }
                  />
                </div>
                <div className="form-group mr2">
                  <div className="alert-danger">{this.state.error.emailError}</div>
                  <label className="col-sm-2 col-form-label "><b>Enter User Email </b></label>
                  <input
                    type="text"
                    className="col-sm-6"
                    id="email"
                    placeholder="Enter User Email"
                    value={this.state.user.email}
                    onChange={(event) =>
                      this.setState({ user: { ...this.state.user, email: event.target.value } })
                    }
                  />
                </div>
                <div className="form-group mr2">
                  <div className="alert-danger">{this.state.error.passwordError}</div>
                  <label className="col-sm-2 col-form-label "><b>Enter User Password</b></label>
                  <input
                    type="text"
                    className="col-sm-6 "
                    id="password"
                    placeholder="Enter User password"
                    value={this.state.user.password}
                    onChange={(event) =>
                      this.setState({ user: { ...this.state.user, password: event.target.value } })
                    }
                  />
                </div>
                <div className="form-group mr2">
                  <div className="alert-danger">{this.state.error.roleError}</div>
                  <label className="col-sm-2 col-form-label "><b>Enter User Role </b></label>
                  {role === 'admin' ? 
                  <input
                  type="text"
                  className="col-sm-6"
                  id="role"
                  placeholder="Enter User Role"
                 
                  value={this.state.user.role}
                  onChange={(event) =>
                    this.setState({ user: { ...this.state.user, role: event.target.value } })
                  }
                />
                  :<input
                  type="text"
                  className="col-sm-6"
                  id="role"
                  placeholder="Enter User Role"
                  value={this.state.user.role}
                  readonly
                />}
                 
                </div>
                <div className="form-group mr2">
                  <div className="alert-danger">{this.state.error.statusError}</div>
                  <label className="col-sm-2 col-form-label "><b>Enter User Status </b></label>
                  <input
                    type="text"
                    className="col-sm-6 "
                    id="status"
                    placeholder="Enter User Status"
                    value={this.state.user.status}
                    onChange={(event) =>
                      this.setState({ user: { ...this.state.user, status: event.target.value } })
                    }
                  />
                </div>


                <button className="btn btn-primary col-sm-8 "

                >Modified User</button>

              </form>
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}
