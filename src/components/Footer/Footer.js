import React from "react";
import "../../css/footer.css";
import importedImages from "../index";

export default function Footer() {
  return (
    <div className="footer">
    <footer className="auto-margin">
      <div>
        <img src={importedImages.logo} alt="" className="footerlogo"/>
      </div>
      <div className="features">
        <ul className="list-items">
          <li>Features</li>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className="resources">
        <ul className="list-items">
          <li>Resources</li>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="company">
        <ul className="list-items">
          <li>Company</li>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="social-media">
        <img src={importedImages.facebook} alt="facebook" className="face" />
        <img src={importedImages.twitter} alt="twitter" className="face" />
        <img src={importedImages.instagram} alt="facebook" className="face" />
        <img src={importedImages.pinterest} alt="facebook" className="face" />
      </div>
    </footer>
    </div>
  );
}
