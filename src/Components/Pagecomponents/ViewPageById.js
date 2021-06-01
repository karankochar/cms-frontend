import React, { Component } from 'react'
import Page from '../../Models/Page';
import { PageService } from '../../Services/PageService'
import ViewPageCard from './ViewPageComponents/ViewPageCard';

export default class ViewPageById extends Component {
    service = new PageService()
    constructor(props){
        super(props);
        this.state={
            page : new Page()
        }
    }
    componentDidMount(){
        let pageId = this.props.match.params.id
        if(sessionStorage.getItem("username")===null){
            alert("Unauthorized")
            this.props.history.push("/")
        }
        this.service.viewPage(pageId)
        .then((res)=>{
            console.log(res.data)
            this.setState({page:res.data})
        }).catch((err)=>{
            alert(err)
        })
    }

    render() {
        return (
            <div>
                <ViewPageCard data={this.state.page}/>
            </div>
        )
    }
}
