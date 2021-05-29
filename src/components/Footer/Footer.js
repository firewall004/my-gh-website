import './Footer.css'
import { 
    FaTwitter, 
    FaLinkedin, 
    FaFacebookSquare, 
    FaGithub,
    FaGooglePlus } from "react-icons/fa";
import Clock from '../HelperComponents/Clock';

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="footer-left ml-5">
                    <Clock />
                </div>
                <ul className="footer-right">
                    <li><a href="#"><FaGithub size={25} /></a></li>
                    <li><a href="#"><FaTwitter size={25} /></a></li>
                    <li><a href="#"><FaLinkedin size={25} /></a></li>
                    <li><a href="#"><FaFacebookSquare size={25} /></a></li>
                    <li><a href="#"><FaGooglePlus size={25} /></a></li>
                </ul>	
            </div>
        </footer>
    )
}

export default Footer
