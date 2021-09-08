import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {

  const [checked, setChecked] = React.useState(false);

  function uncheck(){
    setChecked(old => !old);
 }
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" checked={checked} />
      <div className="nav-header">
        <div className="nav-title"></div>
      </div>
      <div className="nav-btn"  onClick={uncheck}>
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
      <Link to="header" smooth={true} onClick={uncheck} >Home</Link>
        <Link to="about" smooth={true} onClick={uncheck} >About</Link>
        <Link to="myjourney" smooth={true} onClick={uncheck} >My Experience</Link>
        <Link to="contact" smooth={true} onClick={uncheck} >Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
