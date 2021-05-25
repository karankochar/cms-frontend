import React, { Component } from 'react'
import Login from '../../Models/Login'
import styles from './Login.module.css';
import { LoginService } from '../../Services/LoginService';

export default class LoginComponent extends Component {
    service = new LoginService();
    constructor(props){
       
        super(props);
        this.state={
            login : new Login(),
            error: {
                usernameError: "",
                passwordError: "",
                invalidCredentials: ""
            }
        }
        
    }
    validate = () => {
        let flag = true;
        let error = {};
        if (!this.state.login.email) {
            error.usernameError = "Username Is Required";
            flag = false
        }
        if (!this.state.login.password) {
            flag = false;
            error.passwordError = "Password Is Required";
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
        this.service.login(this.state.login)
        .then((result)=> {
            if(result.data.userName != null){
                this.setState({login:result.data})
                sessionStorage.setItem("userId", this.state.login.userId)
                sessionStorage.setItem("username", this.state.login.email)
                sessionStorage.setItem("role", this.state.login.role)
                sessionStorage.setItem("name", this.state.login.fullName)
                this.props.history.push('/cms-app/dashboard')
                window.location.reload(false);
            } else{
                this.setState({ error: { invalidCredentials: "Invalid Credentials" } })
            }

        }).catch(this.setState({error: {invalidCredentials:"Invalid credentials"}}))
    }

    render() {
        return (
            <div className={styles.card}>
                
                    <div className='row no-gutters'>
                        <div className='col-7 no-gutters'>
                            <div className={styles.leftsidelogin}>
                                
                            </div>
                        </div>

                        <div className='col no-gutters'>
                            <div className={styles.rightsidelogin}>
                            
                <form onSubmit={this.handleSubmit}>
                    
                    <h3>
                        Sign-In
                    </h3>
                    <div className="form-group mr2">
                        <div className="alert-danger">{this.state.error.usernameError}</div>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter Username"
                            value={this.state.login.email}
                            onChange={(event) =>
                                this.setState({ login: { ...this.state.login, email: event.target.value } })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <div className="alert-danger">{this.state.error.passwordError}</div>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter Password"
                            value={this.state.login.password}
                            onChange={(event) =>
                                this.setState({ login: { ...this.state.login, password: event.target.value } })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <div className="alert-danger">{this.state.error.invalidCredentials}</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            

                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
