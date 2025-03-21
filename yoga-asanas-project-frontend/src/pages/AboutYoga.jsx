import React from "react";
import yogaImage from "../assets/image.webp"

const AboutYoga=()=>{
    return(
        <div className="about-container">
            <h1>About Yoga</h1>
            <div className="about-content">
        <img src={yogaImage} alt="yogabenefits" className="about-image"/>
                <div className="about-text">
                    <p>
                        Yoga is an ancient practice that brings harmony between body and mind.
                        It involved Physical pstures(asanas),breathing exrcises(pranayama).
                        and Meditation to promote overall well-being.
                    </p>
                    <h2>Benefits of Yoga</h2>
                    <ul>
                        <li>Improves Flexibility and Strength</li>
                        <li>Reduces stress and anxiety</li>
                        <li>Boosts Immune System and overall health</li>
                        <li>Enhances mental clarity and focus</li>
                        <li>Promotes better sleep and relaxation.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default AboutYoga;