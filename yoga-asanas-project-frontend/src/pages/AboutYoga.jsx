import React from "react";
import yogaImage from "../assets/iyengar.png";

const AboutYoga = () => {
  return (
    <div className="about-container">
      <h1>About Yoga</h1>
      <div className="about-content">
        <img src={yogaImage} alt="yogabenefits" className="about-image" />
        <div className="about-text">
          <p>
            Yoga is an ancient philosophy which aims complete steadyness of mind
            (Samadhi). To reach Samadhi the Yogui must go through 8 steps or
            limbs of Yoga: Yama, Nyama, Asana, Pranayama, Pratyahara, Dharana,
            Dhiana and Samadhi. In conclusion Asana alone is not Yoga, asanas or
            postures are used to prepare the body to stay quiet and to keep the
            spine straight during meditation. A proper yoga practice needs the
            spine to make 5 movements: foward-bend, back-bend, twist right and
            left, bend right and left, and last inverted.
          </p>
          <h2>8 steps of Yoga</h2>
          <ul>
            <p>
              <b>Yamas:</b> non-violence, honesty, integrity, efficiency,
              humbleness{" "}
            </p>
            <p>
              <b>Nyamas:</b> cleanliness, contentment, discipline, self-study,
              surrender
            </p>
            <p>
              <b>Asanas:</b> body consciousness
            </p>
            <p>
              <b>Pranayama:</b> Breathing Consiousness
            </p>
            <p>
              <b>Pratyahara:</b> abstration of the senses
            </p>
            <p>
              <b>Dharana:</b> concentration
            </p>
            <p>
              <b>Dhyana:</b> meditación{" "}
            </p>
            <p>
              <b>Samadhi:</b> Steadness of Mind
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AboutYoga;
