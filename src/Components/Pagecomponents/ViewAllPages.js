import React, { useEffect } from "react";
import { PageService } from "../../Services/PageService";
import Table from "material-table";
import DescriptionIcon from "@material-ui/icons/Description";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { fetchPages } from "../../Redux/PageAction";
import { Card, CardContent } from "@material-ui/core";

const ViewAllPages2 = ({
  service = new PageService(),
  history,
  pageData,
  fetchPages,
}) => {
  useEffect(() => {
    if (sessionStorage.getItem("username") === null) {
      alert("Unauthorized Access");
      history.push("/");
    }
    fetchPages();
  }, []);

  let role = sessionStorage.getItem("role").toLowerCase();

  let id = sessionStorage.getItem("userId");

  return pageData.loading ? (
    <h2>Loading...</h2>
  ) : pageData.error ? (
    <h2>{pageData.error}</h2>
  ) : (
    <div className="container">
      <Card
        variant="outlined"
        style={{ textAlign: "center", backgroundColor: "#778da9" }}
      >
        <CardContent>
          <div>
            <h1 style={{ color: "white " }}> Pages</h1>
            <Link
              style={{ margin: "15px" }}
              className="btn btn-outline-light"
              to={`/pages/searchPageByContent`}
            >
              Search By Content
            </Link>
            {role==="user" ?
            <Link
              className="btn btn-outline-light"
              to={`/cms-app/pages/addPage`}
            >
              Add Page
            </Link>
            :null }
          </div>
        </CardContent>
      </Card>
      <br />
      <Table
        title="All Pages"
        columns={[
          { title: "Page Title", field: "pageTitle" },
          { title: "Category", field: "categoryTitle" },
          { title: "Author", field: "fullName" },
        ]}
        data={pageData.pages}
        options={{
          paging: true,
          actionsColumnIndex: -1,
        }}
        actions={[
          {
            icon: DescriptionIcon,
            tooltip: "View Content",
            onClick: (event, rowData) =>
              history.push(`/cms-app/pages/byId/${rowData.pageId}`),
          },
          role === "user"
            ? {
                icon: EditIcon,
                tooltip: "Modify Page",
                onClick: (event, rowData) =>
                  rowData.userId == id
                    ? history.push(`/cms-app/pages/modify/${rowData.pageId}`)
                    : alert("Unauthorized"),
              }
            : null,

          {
            icon: "delete",
            tooltip: "Delete Page",
            onClick: (event, rowData) => {
              if(role === "admin"){
                service
                  .deletePageById(rowData.pageId)
                  .then(() => {
                    alert("Page Deleted");
                    fetchPages();
                    
                  })
                  .catch((err) => {
                    alert(JSON.stringify(err));
                  });
              }
              else if (role="user" && rowData.userId == id) {
                service
                  .deletePageById(rowData.pageId)
                  .then(() => {
                    alert("Page Deleted");
                    fetchPages();
                  })
                  .catch((err) => {
                    alert(JSON.stringify(err));
                  });
              } else {
                alert("Unauthorized");
              }
            },
          },
        ]}
      ></Table>
    </div>
  );
};

const mapStateToProps = (state) => {
  //  alert("map state: " + JSON.stringify(state.students));
  return {
    pageData: state.pages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPages: () => dispatch(fetchPages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllPages2);
