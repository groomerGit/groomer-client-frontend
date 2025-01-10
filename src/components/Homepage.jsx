import React from "react";
import home_us_img from "./images/backgroundimg.jpg";
import Footer from "./Footer.jsx";
import "./css/HomePage.css";



function HomePage() {
  return (
    <div>
      <div className="landing-container">
      <div className="background-overlay"></div>
      
      <div className="content-container">
        <h1 className="main-heading">
          Welcome Groomer Client Salon Module
        </h1>

        <p className="subheading">
        The Groomer Client Salon Module streamlines appointment scheduling, client management,
        and personalized service tracking for salon businesses.Enhance your salon's 
        efficiency and deliver exceptional customer experiences with ease!.
        </p>

        
      </div>

    </div>
    
     
      <Footer />
    </div>
  );
}
export default HomePage;
