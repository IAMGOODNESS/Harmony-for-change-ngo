import React from 'react';
import './index.css';
import ImageSlider from './ImageSlider'; // Import the ImageSlider component

function Navbar() {
  return (
    <>
      <div className='nav-container'>
        <marquee behavior="scroll" scrolldelay="50" direction="right">
          Harmony For Change Would Launch On The 29tkh Of April, For more Info Contact: 
          <a style={{ color: "black", fontWeight: "bolder" }} href="tel:+2349037677897">09037677897</a>
        </marquee>
      </div>
      
      <div className='nav-container2'>
        <img src="\Logo.png" alt="" height={230} style={{ position: "relative", bottom: 50, filter: "brightness(120%)" }} />
        <div className="nav-text">
          <span>Home</span>
          <span>About</span>
          <span>Donations</span>
          <span>Contact</span>
          <span>Mission</span>
          <span><button style={{ backgroundColor: "greenyellow", position: "relative", left: 160 }}>Donate</button></span>
        </div>
      </div>

      <div className="bg">
        <h1 className='motto'>A Sustainable Nigeria Starts With Us</h1>
        <button className='btn1'>Donate</button>
        <button className='btn2'>Contact</button>
        <div className="carddisplay">
            <div className="card1">
         
                <h2>Mission </h2>
                <h4>Harmony for change is commited <br /> to fostering a peaceful and   sustainable africa by empowering  individuals and communities.we address  economic and mental health challenges through conflict resolution,skill acquisition,  clean water access,climate action, education and social support . </h4>
  </div>
            <div className="card2">
            <h2>Vision </h2>
            <h4>We Envision An africa  where  <br />  peace,sustainability,and well-beign are the foundation of every community,harmony for change strive to create a future where individuals thrive socially,economically and mentally <br /> and where collective action drives lasting positive change for all  </h4>
 
            </div>
            <div className="card3">
            <h2>Our Main Goals</h2>
            <h4>Harmony for change is commited <br /> to fostering a peaceful and   sustainable africa by empowering  individuals and communities.we address  economic and mental health challenges through conflict resolution,skill acquisition,  clean water access,climate action, education and social support . </h4>
 
            </div>
        </div>
        
      </div>

      <div  className="about">
        <h2 style={{color:"greenyellow",position:"relative",top:120,left:150}} >About Us</h2>
        <hr style={{}} />
        <h4 style={{color:"#444444",fontSize:15, fontWeight:500 ,position:"relative",top:140,left:150}}>Harmony For Change Is a  community-driven organization dedicated to peace,<br /> sustainability,and empowerment in Nigeria and Africa.we focus in <br /> conflict resolution,skill acquisition,clean water access,climate action,education, <br />and gender equality to create a thriving and inclusive society. <br /> through collective action,we strive to uplift lives and drive <br /> lasting change. </h4>
      </div>
     
    </>
  );
}

export default Navbar;
