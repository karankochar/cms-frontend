import React,{useState} from 'react'
import './Header.css'
import ReorderIcon from "@material-ui/icons/Reorder";
import Logo from './Studiopress-Logo.png'
import { Link } from 'react-router-dom';

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  let role = sessionStorage.getItem('role');
  let userId = sessionStorage.getItem('userId');
  return (
    <div className="Navbar">
      <div className="leftside">
        <div><img src={Logo} width='60px' height='50px'/></div>
        <div className="links" id={showLinks ? "hidden" : ""}>
       
          <a href="/cms-app/dashboard">Dashboard</a>
          <a href="/cms-app/pages">Pages</a>
          <a href="/cms-app/user">User</a>
          {role === ("Admin") ? <a href="/cms-app/categories">Categories</a> : <Link to={`users/search/byId/${userId}`}>Profile</Link> }
        </div>
        <button onClick={() => setShowLinks( !showLinks)}> {" "} <ReorderIcon/></button>
      </div>
      <div className="rightside">
      <Link to="/cms-app/logout" className="btn btn-outline-light">
                 Logout
          </Link>
      </div>




    </div>
  );
}
export default Header;