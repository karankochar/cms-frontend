import Page from "../../Models/Page";
import {PageService} from "../../Services/PageService";
import Table from "material-table";
import React, { Component } from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Card, CardContent } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import EditIcon from '@material-ui/icons/Edit';

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
    console.log("componentDidMount");
    this.service.viewAll().then((result) => {
      this.setState({ AllPages: result.data });
    });
  }

  render() {
    return (
      <div className="container">
        <hr/>
        <Link
                className="btn btn-warning"
                to={`/pages/searchPageByContent`}
              >
                Search By Content
              </Link>
              <hr/>
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
            {
              icon: EditIcon,
              tooltip: "Modify Page",
              onClick: (event, rowData) =>
                this.props.history.push(
                  `/modify/${rowData.userId}/${rowData.categoryId}`
                ),
            },
            {
              icon: "delete",
              tooltip: "Delete Page",
              onClick: (event, rowData) =>
                this.service
                  .deletePageById(rowData.pageId)
                  .then(() => {
                    alert("Page Deleted");
                  })
                  .catch((err) => {
                    alert(JSON.stringify(err));
                  }),
            },
          ]}
        ></Table>
      </div>
    );
  }
}
