import React from 'react';
import './Styles/About.css';
import {
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialPinterest,
} from 'react-icons/ti';

const About = () => {
  return (
    <div classname="about" id="about">
      <div className="about__container">
        <ul>
          <li>
            <p>
              <TiSocialFacebook />
            </p>
          </li>
          <li>
            <p>
              <TiSocialYoutube />
            </p>
          </li>
          <li>
            <p>
              <TiSocialPinterest />
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
