import React, { Component } from 'react'
import {CategoryService} from "../../Services/CategoryService"
import Category from "../../Models/Category"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import img from "./cmsi.jpg"


export default class UpdateCategory extends Component {
    service = new CategoryService();
    state = {
        category: new Category(),
        AllCategory: [],
        error: {
            categoryError: ""
        }
    };
    componentDidMount() {

        this.service.findCategoryById(this.props.match.params.id).then((result) => {
            // alert(JSON.stringify(result.data))
            this.setState({ category: result.data })
        }).catch((err) => {
            alert(JSON.stringify(err));
        })

        this.service.findAllCategory().then((result) => {
            // alert(JSON.stringify(result.data))
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
            if (this.state.category.categoryTitle.toLowerCase() == e.categoryTitle.toLowerCase()) {
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

        // alert(JSON.stringify(this.state.student));
        this.service.modifyCategory(this.state.category)
            .then((data1) => {
                // redirect you to addcategory after updating category
                //  alert(JSON.stringify(data1.data))
                alert("Category is Updated")
                this.props.history.push("cms-app/categories");
            })
            .catch((error) => {
                alert(JSON.stringify(error))
            });
    };

    render() {
        console.log("render called")
        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        return (

            <div className='conatiner'>
                <div className='row'>
                    <div className='col-md'><br />
                        <Card>
                            <CardContent>
                                <form onSubmit={this.handleSubmit}>
                                    <h4>Update Category</h4><br />
                                    <div className="form-group mr2">

                                        <label>Enter category title</label>
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
                                        <button type="submit" className="btn btn-outline-primary"> Save  </button>
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
                {/*                 
                <div className='col-md-12'>
                <img src={img} class="img-fluid" ></img>
                </div> */}

            </div>
        )
    }
}
