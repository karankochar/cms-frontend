import axios from "axios";
import React, { Component } from "react";
import Page from "../../Models/Page";
import { PageService } from "../../Services/PageService";
import { CategoryService } from "../../Services/CategoryService";
import styles from "./styles/AddPage.module.css";
import QuoteCard from "./AddPageComponents/QuoteCard";
import NavCard from "./AddPageComponents/NavCard";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default class AddPage extends Component {
  service = new PageService();
  categoryService = new CategoryService();
  constructor(props) {
    super(props);
    this.state = {
      page: new Page(),
      categories: [],
      error: {
        idError: "",
        titleError: "",
        contentError: "",
        userIdError: "",
      },
    };
  }

  componentDidMount() {
    let userId = sessionStorage.getItem("userId");
    let userName = sessionStorage.getItem("username");
    if (sessionStorage.getItem("username") === null) {
      alert("Unauthorized Access");
      this.props.history.push("/");
    }
    this.categoryService
      .viewAll()
      .then((res) => {
        this.setState({ categories: res.data });
        this.setState({
          page: {
            ...this.state.page,
            author: { ...this.state.page.author, userId: userId },
          },
        });
        this.setState({
          page: {
            ...this.state.page,
            author: { ...this.state.page.author, userName: userName },
          },
        });
      })
      .catch((err) => {
        alert(err);
      });
  }

  validate = () => {
    let flag = true;
    let error = {};
    if (!this.state.page.category.categoryId) {
      error.idError = "Category Id Is Required";
      flag = false;
    }
    if (!this.state.page.pageTitle) {
      flag = false;
      error.titleError = "Page Title Is Required";
    }
    if (!this.state.page.content) {
      flag = false;
      error.contentError = "Page Content Required";
    } else if (this.state.page.content.length < 20) {
      flag = false;
      error.contentError = "Content should be greater than 20 characters";
    }
    if (!this.state.page.author.userId) {
      flag = false;
      error.deptError = "User Id Required";
    }
    this.setState({ error: error });
    return flag;
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = this.validate();
    if (!isValid) {
      return false;
    }
    console.log(this.state.page);
    this.service
      .addPage(
        this.state.page.author.userId,
        this.state.page.category.categoryId,
        this.state.page
      )
      .then((res) => {
        alert("Successfully Added Page");
        this.props.history.push("/cms-app/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let userId = sessionStorage.getItem("userId");
    let role = sessionStorage.getItem("role");
    return (
      <div>
        <div className="row">
          <div className="col-md">
            <div className={styles.container}>
              <Card>
                <CardContent>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <div className="alert-danger">
                        {this.state.error.userIdError}
                      </div>
                      <label for="pagecontent">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter User Name"
                        value={this.state.page.author.userName}
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <div className="alert-danger">
                        {this.state.error.titleError}
                      </div>
                      <label for="pagecontent">Page Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="pagetitle"
                        placeholder="Enter Page Title"
                        value={this.state.page.pageTitle}
                        onChange={(event) =>
                          this.setState({
                            page: {
                              ...this.state.page,
                              pageTitle: event.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <div className="alert-danger">
                        {this.state.error.contentError}
                      </div>
                      <label for="pagecontent">Share your thoughts</label>
                      <textarea
                        class="form-control"
                        id="pagecontent"
                        rows="4"
                        placeholder="Enter content"
                        value={this.state.page.content}
                        onChange={(event) =>
                          this.setState({
                            page: {
                              ...this.state.page,
                              content: event.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <div className="alert-danger">
                        {this.state.error.idError}
                      </div>
                      <label for="pagecontent">Select category</label>
                      <select
                        className="form-control"
                        value={this.state.page.category.categoryId}
                        onChange={(event) =>
                          this.setState({
                            page: {
                              ...this.state.page,
                              category: {
                                ...this.state.page.category,
                                categoryId: event.target.value,
                              },
                            },
                          })
                        }
                      >
                        {this.state.categories.map((item) => (
                          <option key={item.categoryId} value={item.categoryId}>
                            {item.categoryTitle}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button type="submit" className="btn btn-dark">
                      Add Page
                    </button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          <Card />
          <CardContent />
          <div className="col-md d-flex flex-column justify-content-start">
            <QuoteCard />
            <br />
            <NavCard />
          </div>
        </div>
      </div>
    );
  }
}
