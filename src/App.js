import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from './Components/Pages/LoginComponent';
import Dashboard from './Components/Pages/Dashboard';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer'
import Pages from './Components/Pages/Pages'
import AddPage from './Components/Pagecomponents/AddPage'
import LogoutComponent from './Components/Pages/LogoutComponent';
import ViewPageById from './Components/Pagecomponents/ViewPageById';

function App() {
  return (
    <div>
      {sessionStorage.getItem("username")!=null ? 
        <div>
          <Header />
        </div>
      : null }
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginComponent}/>
          <Route exact path='/cms-app/logout' component={LogoutComponent}/>
          <Route exact path='/cms-app/dashboard' component={Dashboard}/>
          <Route exact path='/cms-app/pages' component={Pages}/>
          <Route exact path='/cms-app/pages/addPage' component={AddPage}/>
          <Route exact path='/cms-app/pages/viewPage/:id' component={ViewPageById}/>
        </Switch>
      </Router>
    </div>
    {sessionStorage.getItem("username")!=null ? 
        <div>
          <Footer/>
        </div>
      : null }
      
    </div>
  );
}

export default App;
