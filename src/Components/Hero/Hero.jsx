import React from "react";
import "./Hero.css"; // Assuming you have a CSS file for styling
import profilepic from "../../assets/Hero_profile.png";

const Hero = () => {
  return (
    // The .hero div is our main flex container
    <div className="hero">
      <div className="section-one">
        <div className="availability">
          <span>Available for work</span>
        </div>
        <div className="first-section">
          <div className="hero-text">
            <h1>Hey, I'm Babu V.</h1>
            <h1>
              <span>Full Stack Developer</span>
            </h1>
            <h1>specializing in building </h1>
            <h1>complex products.</h1>
            <div className="hero-connect">Resume</div>
          </div>
          {/* Flex Item 2: The image is now a direct child */}
          <img src={profilepic} alt="Profile" className="hero-image" />
        </div>
      </div>
      <div className="section-two">
        <div className="knowmore">
          <p>With experience across industries, I help teams</p>
          <p>simplify workflows, scale products, and deliver</p>
          <p>real-world solutions.</p>
          <div className="hero-connect">
            <a href="">Know more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
