/** @format */

import "./Navbar.css";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {



  return (
    <div className="code-nav">
            <nav>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i className="fa fa-bars"></i>
      </label>
      <label className="logo">
      <NavLink to="/">Develop Diagnostic Test</NavLink>
      </label>
      <ul>
        
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/account">Login</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li> <NavLink to="/about">About Us</NavLink></li>
       
    
      </ul>
    </nav>
            </div>
            
  );
};

export default Navbar;
