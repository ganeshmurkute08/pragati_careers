import React from 'react';
import Typography from '@mui/material/Typography';
import image from './img.jpg'
import about_image from './about-img.jpg'
import './LandingScreen.css';
import RoundWithIcon from '../components/RoundWithIcon';

// const imageUrl = './img.jpg';

export const LandingScreen: React.FC = () => {
  return (
    <div className="landing-root">
      <div className="landing-container">
        {/** Page 1 */}
        <Typography
          variant="h5"
          align="center"
          className="landing-title"
        >
          PRAGATI
        </Typography>
        <div className="landing-image-wrapper">
          <img
            src={image}
            alt="Wide Image"
            className="landing-image"
          />
          <div className="image-overlay">
            <Typography variant="h2" className="overlay-title" align="center">
              BE PLACEMENT READY
            </Typography>
            <Typography variant="subtitle1" className="overlay-subtitle" align="center">
              Career Transformation Uploading Soon..
            </Typography>
            <button className="overlay-btn">
                GET STARTED TODAY
            </button>
          </div>
        </div>

        {/** Page 2 */}
        <Typography
          variant="h3"
          align="center"
          className="general-title"
        >
          ABOUT PRAGATI EDUCATION
        </Typography>

        <div className="about-section">
          <img src={about_image} alt="About Pragati" className="about-image" />
          <div className="about-content">
            <Typography variant="h5" className="about-title" align="left">
              Our Mission
            </Typography>
            <Typography variant="body1" className="about-description" align="left">
              At Pragati, we strive to make India employable by bridging the gap between campus education and corporate expectations. Our mission is to equip students with the skills and confidence needed to excel in their careers.
            </Typography>
          </div>
        </div>

        {/** Page 3 */}
         <Typography
          variant="h3"
          align="center"
          className="general-title"
        >
          CONTACT US
        </Typography>
        <div className="contact-section">
           <Typography variant="h5" className="about-title">
              Connect with us today and transform your future!
            </Typography>
             <Typography variant="h5" className="about-title">
              Pragati
            </Typography>
            <Typography variant="body1" className="about-title">
              Bangalore, Karnataka, India
            </Typography>
            <Typography variant="body1" className="about-title" color='green'>
              pragatiplacementprep@gmail.com
            </Typography>
        </div>

        {/** Social links section */}
        <div className="social-links">
          <Typography
            variant="h3"
            align="center"
            className="general-title"
          >
            SOCIAL
          </Typography>
          <div className='social-icons'>
            <RoundWithIcon type='facebook' size={48}/>
            <RoundWithIcon type='instagram' size={48}/>
            <RoundWithIcon type='linkedin' size={48}/>
            <RoundWithIcon type='youtube' size={48}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
