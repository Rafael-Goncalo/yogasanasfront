import React from "react";
import {Link} from "react-router-dom";



const NavBar=()=>{
    return(
        <nav className="nav-bar">
            <div className="navbar-container">
            <h2 className="logo">Yoga Practice Builder</h2>
            <div className="nav-links">
            <Link to="/asanas">YogaAsanas</Link>
                <Link to="/about">About Yoga</Link>
                             
                <Link to="/sequence-asanas" className="view-sequence-btn">View Sequence</Link>
            </div>
            </div>
        </nav>
    );
};
export default NavBar;