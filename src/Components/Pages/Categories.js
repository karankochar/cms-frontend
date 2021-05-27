import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {CategoryService} from "../../Services/CategoryService"
import Category from "../../Models/Category"
import Table from "material-table";
import Edit from '@material-ui/icons/Edit'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { SimpleCard } from '../Categorycomponents/SimpleCard';




export default class AddCategory extends Component {
  service = new CategoryService();
  state = {
    category: new Category(),
    Allcategory: [],
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
    this.service.findAllCategory().then((result) => {
      //  alert(JSON.stringify(result.data))
      this.setState({ Allcategory: result.data })
    })
  }
//   validate = () => {
//     let flag = true;
//     let error = {};
//     if (!this.state.category.categoryTitle) {
//       error.categoryError = "Category Title Is Required";
//       flag = false
//     }
//     this.setState({ error: error })
//     return flag;
//   };

  handleSubmit = async (event) => {
    event.preventDefault();

    // let isValid = this.validate();
    // if (!isValid) {
    //   return false;
    // }
    // this.service.addCategory(this.state.category)
    //   .then((data1) => {
    //     // redirect you to Home component after adding category
    //     //  alert(JSON.stringify(data1.data))
    //     alert("Category Added")
    //     this.props.history.push("/addCategory");
    //   })
    //   .catch((error) => {
    //     alert(JSON.stringify(error))
    //     //  alert(error.response.data.message);
    //     // redirect you to Home component after adding user
    //     this.props.history.push("/addCategory");
    //   });
  };

  render() {

    // function capitalize(string) {
    //   return string.charAt(0).toUpperCase() + string.slice(1);
    // }
    return (
   <div className='container' >
      <div className="row">
        <div className="col-md">
          <br/>
       <SimpleCard/>
        </div>
        </div>
        <br /><br />
        {
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
                    alert("category is deleted")
                    this.componentDidMount()
                  }).catch((err) => {
                    alert(JSON.stringify(err))
                  })
                }

              ]}
            >
            </Table>

          ) : <div> please add category</div>
        }
     
      </div>
    );
  }
}
