import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        {/* [cite: 2] */}
        <a href="https://github.com/Wardabaig19" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/warda-baig-279429256" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      {/* [cite: 1] */}
      <p>A portfolio designed & built by Warda Baig with 💜</p>
    </footer>
  );
}

export default Footer;