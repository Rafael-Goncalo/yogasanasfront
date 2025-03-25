import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-hero">
      <div className="hero-content">
        <h3>Build Your Personal Practice</h3>
        <p>
          A balanced yoga practice have five spinal movements. On the next page,
          select one asana from each category to create your personalized
          routine. At the Routine page you can Update or Remove Asanas
        </p>

        <Link to="/asanas">
          <button className="explore-btn">Choose Asanas</button>
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
