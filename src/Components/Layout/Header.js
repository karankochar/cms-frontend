import React,{useState} from 'react'
import './Header.css'
import ReorderIcon from "@material-ui/icons/Reorder";
import Logo from './Studiopress-Logo.png'

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  

  return (
    <div className="Navbar">
      <div className="leftside">
        <div><img src={Logo} width='60px' height='50px'/></div>
        <div className="links" id={showLinks ? "hidden" : ""}>
       
          <a href="/cms-app/dashboard">Dashboard</a>
          <a href="/cms-app/pages">Pages</a>
          <a href="/cms-app/categories">Categories</a>
          <a href="/cms-app/user">User</a>
      
        </div>
        <button onClick={() => setShowLinks( !showLinks)}> {" "} <ReorderIcon/></button>
      </div>
      <div className="rightside">
      </div>




    </div>
  );
}
export default Header;