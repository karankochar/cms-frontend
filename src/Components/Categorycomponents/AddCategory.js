import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {CategoryService} from "../../Services/CategoryService"
import Category from "../../Models/Category"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



export default class AddCategory extends Component {
  service = new CategoryService();
  state = {
    category: new Category(),
    AllCategory: [],
    error: {
      categoryError: ""
    }
  };

  componentDidMount() {

    // console.log("  componentDidMount called")
    // if (sessionStorage.getItem("username") === null) {
    //   alert('Unauthorized Access');
    //   this.props.history.push("/");
    // }
    // this.service.findAllCategory().then((result) => {
    //   //  alert(JSON.stringify(result.data))
    //   this.setState({ Allcategory: result.data })
    // })

    this.service.findAllCategory().then((result) => {
      //alert(JSON.stringify(result.data))
      this.setState({ AllCategory: result.data })
    }).catch((err) => {
      alert(JSON.stringify(err));
    })

  }
  validate = () => {
    let flag = true;
    let error = {};
    if (!this.state.category.categoryTitle) {
      error.categoryError = "Category Title Is Required";
      flag = false
    }
    this.state.AllCategory.map((e) => {
      if (this.state.category.categoryTitle.toLowerCase() === e.categoryTitle.toLowerCase()) {
        error.categoryError = "Category Title is already available";
        flag = false
      }
    })

    this.setState({ error: error })
    return flag;
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = this.validate();
    if (!isValid) {
      return false;
    }
    this.service.addCategory(this.state.category)
      .then((data1) => {
        // redirect you to Home component after adding category
        //  alert(JSON.stringify(data1.data))
        alert("Category Added")
        this.props.history.push("cms-app/categories");
      })
      .catch((error) => {
        alert(JSON.stringify(error))
        //  alert(error.response.data.message);
        // redirect you to Home component after adding user
        // this.props.history.push("/");
      });
  };

  render() {

    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
      <div className='container' >
        <div className="row">
          <div className="col-md">
            <br />
            <Card>
              <CardContent>
                <form onSubmit={this.handleSubmit}>
                  <h4 className='card-title'>Add Category</h4><br />
                  <div className="form-group mr2">
                    <div className="alert-danger">{this.state.error.categoryError}</div>

                    <input
                      type="text"
                      className="form-control"
                      id="categoryTitle"
                      placeholder="Enter Category title"
                      value={this.state.category.categoryTitle}
                      onChange={(event) =>
                        this.setState({ category: { ...this.state.category, categoryTitle: capitalize(event.target.value) } })
                      }
                    />
                  </div>
                  <Typography variant="body2" component="p" >
                    <button type="submit" className="btn btn-outline-primary">
                      Add Category
        </button>
                  </Typography>

                </form>
              </CardContent>
            </Card>
          </div>
          <div className="col-md">
            <br />
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Welcome back
                                 </Typography>
                <Typography variant="h5" component="h2">
                  Keep Updating yourself.
                               </Typography>
                <Typography variant="body2" component="p">
                  <br />
                  <Link to="/" className="btn btn-outline-dark">
                    Explore Category
                                      </Link>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <br /><br />
        {/* {
          this.state.Allcategory.length > 0 ? (
            <Table title="Category Tabel"
              // icons={Icons}
              columns={[
                { title: 'categoryTitle', field: 'categoryTitle' },
              ]}

              data={
                this.state.Allcategory
              }

              options={{
                paging: true,
                actionsColumnIndex: -1
              }}
              actions={[
                {
                  icon: Edit,
                  tooltip: 'Update category',
                  onClick: (event, rowData) =>
                    //  <Link to={`/modifycategory/${rowData.categoryId}`}>Edit</Link>
                    this.props.history.push(`/modifycategory/${rowData.categoryId}`)
                },
                {
                  icon: 'delete',
                  tooltip: 'Delete Category',
                  onClick: (event, rowData) => this.service.deleteCategoryById(rowData.categoryId).then(() => {
                    alert("category id deleted")
                    this.props.history.push("/categories")
                  }).catch((err) => {
                    alert(JSON.stringify(err))
                    this.props.history.push("/")
                  })
                }

              ]}
            >
            </Table>

          ) : <div> please add category</div>
        } */}

      </div>
    );
  }
}
