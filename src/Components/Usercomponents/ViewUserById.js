import React, { Component } from "react";
import User from "../../Models/User";
import { UserService } from "../../Services/UserService";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default class ViewUserById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: new User(),
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem("username") === null) {
      alert('Unauthorized Access');
      this.props.history.push("/");
    }

    
    let service = new UserService();
    service
      .findUserById(this.props.match.params.id)
      .then((result) => {
        console.log(result)
        this.setState({
          user: result.data,
        });
      })
      .catch((error) => {
        console.log(error)
        alert(JSON.stringify("error: " + error));
      });
  }

  render() {
    const role= sessionStorage.getItem("role")
    return (
      <div>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Detail of User
            </Typography>
            <Typography variant="h3" component="h2">
              View User
            </Typography>
            <Typography variant="body2" component="p">
              <br />
              <table className="table table-bordered">
                <tr>
                  <th>User Id</th>
                  <td>{this.state.user.userId}</td>
                </tr>
                <tr>
                  <th>User Name</th>
                  <td>{this.state.user.userName}</td>
                </tr>
                <tr>
                  <th>User FullName</th>
                  <td>{this.state.user.fullName}</td>
                </tr>
                <tr>
                  <th>User Email</th>
                  <td>{this.state.user.email}</td>
                </tr>
                <tr>
                  <th>User Role</th>
                  <td>{this.state.user.role}</td>
                </tr>
                <tr>
                  <th>User Status</th>
                  <td>{this.state.user.status.toString()}</td>
                </tr>
              </table>
              <div className="form-group">
                <button
                  className="btn btn-primary"
                  onClick={() => {role==="Admin"?this.props.history.push("/cms-app/users"):this.props.history.push("/cms-app/dashboard")}}
                >
                  Back
                </button>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}
