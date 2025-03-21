import React from "react";
import {Link} from "react-router-dom";



const NavBar=()=>{
    return(
        <nav className="nav-bar">
            <div className="navbar-container">
            <h2 className="logo">Yoga App</h2>
            <div className="nav-links">
            <Link to="/">YogaAsanas</Link>
                <Link to="/about">About Yoga</Link>
               
            </div>
            </div>
        </nav>
    );
};
export default NavBar;