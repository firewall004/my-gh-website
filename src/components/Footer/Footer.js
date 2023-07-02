import "./Footer.css"
import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebookSquare,
  FaGithub,
  FaGooglePlus
} from "react-icons/fa";
import Clock from "../HelperComponents/Clock";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="footer-left ml-5">
          <Clock />
        </div>
        <ul className="footer-right">
          <li><a target='_blank' href="https://github.com/firewall004/" rel="noreferrer"><FaGithub size={25} /></a></li>
          <li><a target='_blank' href="https://twitter.com/vivekwah" rel="noreferrer"><FaTwitter size={25} /></a></li>
          <li><a target='_blank' href="https://www.linkedin.com/in/vkumar004/" rel="noreferrer"><FaLinkedin size={25} /></a></li>
          <li><a target='_blank' href="https://www.facebook.com/vivekwaah/" rel="noreferrer"><FaFacebookSquare size={25} /></a></li>
          <li><a target='_blank' href="mailto:kumar97vivek@gmail.com" rel="noreferrer"><FaGooglePlus size={25} /></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
