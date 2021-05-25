import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Pages extends Component {
    render() {
        return (
            <div>
                {sessionStorage.getItem("role")==="User" ? 
                    <div>
                        <Link className='btn btn-primary' to={`/cms-app/pages/addPage`}>Add Page</Link>
                    </div>
                : null}
                
            </div>
        )
    }
}
