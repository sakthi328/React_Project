import React from "react";
function Navbar(){
    return(
<nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <a className="navbar-brand text-white" to="/">TAMILNADU TOURISM</a>
          <div className="navbar-nav ml-auto">
            <a className="nav-link text-white" href="#home">Home</a>
            <a className="nav-link text-white" href="#place">Places To Vist</a>
            <a className="nav-link text-white" href="#time">Best Time To Visit</a>
            <a className="nav-link text-white" href="#package">Packages</a>
            <a className="nav-link text-white" href="#destination">Destination</a>
            <a className="nav-link text-white" href="#food">Food</a>
          </div>
        </div>
      </nav>
      )
      };
      export default Navbar;