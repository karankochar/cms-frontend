import Page from "../../Models/Page";
import { PageService } from "../../Services/PageService";
import Table from "material-table";
import React, { Component } from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";

export default class ViewAllPages extends Component {
  service = new PageService();
  state = {
    page: new Page(),
    AllPages: [],
    error: {
      pageError: "",
    },
  };

  componentDidMount() {
    this.service.viewAll().then((result) => {
      this.setState({ AllPages: result.data });
    });
  }

  render() {
    let role = sessionStorage.getItem("role").toLowerCase();
    let id = sessionStorage.getItem("userId");
    return (
      <div className="container">
        <hr />
        <div className="row d-flex justify-content-around">
          <div className>
            <Link className="btn btn-warning" to={`/pages/searchPageByContent`}>
              Search By Content
            </Link>
          </div>
          {sessionStorage.getItem("role").toLowerCase() === "user" ? (
          
          <div>
            
            <Link className="btn btn-primary" to={`/cms-app/pages/addPage`}>
              Add Page
            </Link>
          </div>
        ) : null}
        </div>
       
        
       
        <hr />
        <Table
          title="All Pages"
          columns={[
            { title: "Page Title", field: "pageTitle" },
            { title: "Category", field: "categoryTitle" },
            { title: "Author", field: "fullName" },
          ]}
          data={this.state.AllPages}
          options={{
            paging: true,
            actionsColumnIndex: -1,
          }}
          actions={[
            {
              icon: DescriptionIcon,
              tooltip: "View Content",
              onClick: (event, rowData) =>
                this.props.history.push(
                  `/cms-app/pages/byId/${rowData.pageId}`
                ),
            },
            role==="user"?
            {
              icon: EditIcon,
              tooltip: "Modify Page",
              onClick: (event, rowData) =>
                rowData.userId==id?
                this.props.history.push(
                  `/modify/${rowData.userId}/${rowData.categoryId}`
                ): alert('Unauthorized')
            } :null,
            
            
            
            {
              icon: "delete",
              tooltip: "Delete Page",
              onClick: (event, rowData) =>{
              if(rowData.userId == id){
                this.service
                  .deletePageById(rowData.pageId)
                  .then(() => {
                    alert("Page Deleted");
                  })
                  .catch((err) => {
                    alert(JSON.stringify(err));
                  })}
              else{
                alert('Unauthorized')
              }
                }
            },
          ]}
        ></Table>
      </div>
    );
  }
}
