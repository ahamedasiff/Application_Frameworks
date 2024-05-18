import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file
import space from '../images/space.jpg'

function HomePage() {

  const navigate = useNavigate(); // Create the navigate function

  const handleRedirect = () => {
    navigate('/home'); // Specify the path you want to redirect to
  };
  return (
    <div className="home-page">
        <div className="background-video">
            <img src={space} alt='A Black Hole In Space' />
        </div> 
      <div className="overlay"></div>
      <div className="content">
        <button onClick={handleRedirect} className="redirect-button">Explore the Space With Nasa</button> 
      </div>
    </div>
  );
}

export default HomePage;