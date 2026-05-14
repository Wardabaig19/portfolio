import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQGTaNOphnva-w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728847056331?e=1780531200&v=beta&t=dFob98Ke-7CYYPa92-uPVCoHlvTs58nzv0IKi90BkV0" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            {/* [cite: 2] */}
            <a href="https://github.com/Wardabaig19" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/warda-baig-279429256" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          {/* [cite: 1] */}
          <h1>Warda Baig</h1>
          {/* [cite: 4] */}
          <p>Computer Science and Artificial Intelligence Graduate</p>

          <div className="mobile_social_icons">
            {/* [cite: 2] */}
            <a href="https://github.com/Wardabaig19" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/warda-baig-279429256" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;