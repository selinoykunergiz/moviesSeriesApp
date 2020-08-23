import React from "react";
import "./footer.css";
import facebook from "../../assets/social/facebook-white.svg";
import twitter from "../../assets/social/twitter-white.svg";
import instagram from "../../assets/social/instagram-white.svg";
import app from "../../assets/store/app-store.svg";
import play from "../../assets/store/play-store.svg";
import windows from "../../assets/store/windows-store.svg";

const Footer = () => (
  <div className="footer clearfix">
    <div className="footerContent clearfix">
      <ul className="footerContentList clearfix">
        <li className="listElement home"><a href="#">Home</a></li>
        <li className="listElement terms"><a href="#">Terms and Conditions</a></li>
        <li className="listElement privacy"><a href="#">Privacy Policy</a></li>
        <li className="listElement collection"><a href="#">Collection Statement</a></li>
        <li className="listElement help"><a href="#">Help</a></li>
        <li className="listElement manage"><a href="#">Manage Account</a></li>
      </ul>
      <p className="footerParag">
        Copyright © 2016 DEMO Streaming All Rights Reserved.
      </p>
    </div>
    <div className="footerContentSecond clearfix">
      <ul className="footerContentSocial clearfix">
        <li className="listElementSocial">
          <img src={facebook} alt="facebook" />
        </li>
        <li className="listElementSocial">
          <img src={twitter} alt="twitter" />
        </li>
        <li className="listElementSocial">
          <img src={instagram} alt="instagram" />
        </li>
      </ul>

      <ul className="footerContentStore clearfix">
        <li className="listElementStore">
          <img src={app} alt="app" />
        </li>
        <li className="listElementStore">
          <img src={play} alt="play" />
        </li>
        <li className="listElementStore">
          <img src={windows} alt="windows" />
        </li>
      </ul>

    </div>
  </div>
);

export default Footer;
