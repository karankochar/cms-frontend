import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "./Components/Pages/LoginComponent";
import Dashboard from "./Components/Pages/Dashboard";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import AddPage from "./Components/Pagecomponents/AddPage";
import LogoutComponent from "./Components/Pages/LogoutComponent";
import ViewPageById from "./Components/Pagecomponents/ViewPageById";
import Categories from "./Components/Pages/Categories";
import AddCategory from "./Components/Categorycomponents/AddCategory";
import UpdateCategory from "./Components/Categorycomponents/UpdateCategory";
import AddUser from "./Components/Usercomponents/AddUser";
import ViewAllUsers from "./Components/Usercomponents/ViewAllUsers";
import DeleteUser from "./Components/Usercomponents/DeleteUser";
import ViewUserById from "./Components/Usercomponents/ViewUserById";
import ModifyUser from "./Components/Usercomponents/ModifyUser";
import SearchPageByContent from "./Components/Pagecomponents/SearchPageByContent";
import ViewPageByContent from "./Components/Pagecomponents/ViewPageByContent";
import UpdatePage from "./Components/Pagecomponents/UpdatePage";
import styles from './App.module.css';
import { Provider } from "react-redux";
import store from "./Redux/store"
import ViewAllPages from "./Components/Pagecomponents/ViewAllPages";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        {sessionStorage.getItem("username") != null ? (
          <div>
            <Header />
          </div>
        ) : null}
        <div className={styles.flexwrapper}>
        <div className="container">
          <Switch>
            <Route exact path="/" component={LoginComponent} />
            <Route exact path="/cms-app/logout" component={LogoutComponent} />
            <Route exact path="/cms-app/dashboard" component={Dashboard} />
            <Route exact path="/cms-app/pages/addPage" component={AddPage} />
            <Route
              exact
              path="/cms-app/pages/byId/:id"
              component={ViewPageById}
            />
            <Route exact path="/cms-app/categories" component={Categories} />
            <Route exact path="/cms-app/categories/addCategory" component={AddCategory} />
            <Route
              exact
              path="/cms-app/categories/modifyCategory/:id"
              component={UpdateCategory}
            />
            <Route exact path="/cms-app/users/addUser" component={AddUser} />
            
            <Route exact path="/cms-app/users" component={ViewAllUsers} />
            <Route
              exact
              path="/cms-app/users/delete/byId/:id"
              component={DeleteUser}
            />

            <Route
              exact
              path="/cms-app/users/search/byId/:id"
              component={ViewUserById}
            />
            <Route
              exact
              path="/cms-app/users/modify/byId/:id"
              component={ModifyUser}
            />
            
            
            <Route exact path="/cms-app/pages" component={ViewAllPages} />

            <Route
              exact
              path="/pages/searchPageByContent"
              component={SearchPageByContent}
            />
            <Route
              exact
              path="/pages/viewPageByContent/:content"
              component={ViewPageByContent}
            />
            <Route
              exact //${userId}/${categoryId}
              path="/cms-app/pages/modify/:id"
              component={UpdatePage}
            />
          </Switch>
        </div>
        {sessionStorage.getItem("username") != null ? (
          <div>
            <Footer />
          </div>
          
        ) : null}
        </div>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
