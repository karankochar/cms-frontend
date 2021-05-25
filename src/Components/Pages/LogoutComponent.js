import React, { Component } from 'react'

export default class LogoutComponent extends Component {
    componentDidMount() {
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("userId");
        sessionStorage.removeItem("role");
        sessionStorage.removeItem("name");
        this.props.history.push("/");
        window.location.reload(false);
    }
    render() {
        return (
            <div>
                Logging out...
            </div>
        )
    }
}
