import React, { Component } from 'react'
import { UserService } from '../../Services/UserService';

export default class DeleteUser extends Component {
 
    state = {};
    componentDidMount() {
      if (sessionStorage.getItem("username") === null) {
        alert('Unauthorized Access');
        this.props.history.push("/");
      }
      let service = new UserService();
      service.deleteUserById(this.props.match.params.id)
        .then(
          (result) => {
            alert("User is deleted.");
            this.props.history.push("/cms-app/users");
          },
          (error) => {
            alert("User is not deleted.");
          }
        );
    }
    render() {
      return <p>Processing...</p>;
    }
  }
 
 
    

