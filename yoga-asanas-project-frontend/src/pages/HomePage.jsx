import React from "react";
import {Link} from "react-router-dom";

const HomePage=()=>{
    return(
        <div className="home-hero">
            <div className="hero-content">
                <h1>Welcome to your inner peace portal</h1>
                <p>Balance your body and mind with daily yoga asanas</p>
                <Link to="/asanas">
                <button className="explore-btn">Explore Asanas</button>
                </Link>
            </div>
        </div>
    );
};
export default HomePage;