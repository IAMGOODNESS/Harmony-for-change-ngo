import React, { useState } from "react";
import "./index.css";
import ImageSlider from "./ImageSlider"; // Import the ImageSlider component

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
         <div className='nav-container'>
        <marquee behavior="scroll" scrolldelay="50" direction="right">
          Harmony For Change Would Launch On The 29th Of April, For more Info Contact: 
          <a style={{ color: "black", fontWeight: "bolder" }} href="tel:+2349037677897">09037677897</a>
        </marquee>
      </div>

      <div className='nav-container2'>
        <img id='logo-nav' src="\Logo.png" alt="Logo" height={230} style={{ position: "relative", bottom: 50, filter: "brightness(120%)" }} />

        {/* Hamburger Button */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={menuOpen ? "line line1 active" : "line line1"}></div>
          <div className={menuOpen ? "line line2 active" : "line line2"}></div>
          <div className={menuOpen ? "line line3 active" : "line line3"}></div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <span onClick={() => setMenuOpen(false)}>Home</span>
          <span onClick={() => setMenuOpen(false)}>About</span>
          <span onClick={() => setMenuOpen(false)}>Donations</span>
          <span onClick={() => setMenuOpen(false)}>Contact</span>
          <span onClick={() => setMenuOpen(false)}>Mission</span>
          <span>
            <button style={{ backgroundColor: "greenyellow" }}>Donate</button>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-text">
          <span>Home</span>
          <span>About</span>
          <span>Donations</span>
          <span>Contact</span>
          <span>Mission</span>
          <span>
            <button style={{ backgroundColor: "greenyellow" }}>Donate</button>
          </span>
        </div>
      </div>

      <div className="bg">
        <h1 className="motto">A Sustainable Nigeria Starts With Us</h1>
        <button className="btn1">Donate</button>
        <button className="btn2">Contact</button>
        <div className="carddisplay">
          <div className="card1">
            <h2>Mission </h2>
            <h4>
              Harmony for change is committed <br /> to fostering a peaceful and sustainable Africa by empowering
              individuals and communities. We address economic and mental health challenges through conflict resolution, skill acquisition, clean water access, climate action, education, and social support.
            </h4>
          </div>
          <div className="card2">
            <h2>Vision </h2>
            <h4>
              We Envision An Africa where <br /> peace, sustainability, and well-being are the foundation of every
              community. Harmony for Change strives to create a future where individuals thrive socially, economically, and mentally, and where collective action drives lasting positive change for all.
            </h4>
          </div>
          <div className="card3">
            <h2>Our Main Goals</h2>
            <h4>
              Harmony for change is committed <br /> to fostering a peaceful and sustainable Africa by empowering
              individuals and communities. We address economic and mental health challenges through conflict resolution, skill acquisition, clean water access, climate action, education, and social support.
            </h4>
          </div>
        </div>
      </div>

      <div className="about">
        <h2 style={{ color: "greenyellow", position: "relative", top: 120, left: 150 }}>
          About Us
        </h2>
        <hr />
        <h4
          style={{
            color: "#444444",
            fontSize: 15,
            fontWeight: 500,
            position: "relative",
            top: 140,
            left: 150,
          }}
        >
          Harmony For Change is a community-driven organization dedicated to peace,
          sustainability, and empowerment in Nigeria and Africa. We focus on
          conflict resolution, skill acquisition, clean water access, climate action, education,
          and gender equality to create a thriving and inclusive society. Through collective action,
          we strive to uplift lives and drive lasting change.
        </h4>
      </div>
    </>
  );
}

export default Navbar;
