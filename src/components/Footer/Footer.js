import './Footer.css'
import { 
    FaTwitter, 
    FaLinkedin, 
    FaFacebookSquare, 
    FaGithub,
    FaGooglePlus } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <ul className="footer">
                <li><a href="#"><FaGithub size={25} /></a></li>
                <li><a href="#"><FaTwitter size={25} /></a></li>
                <li><a href="#"><FaLinkedin size={25} /></a></li>
                <li><a href="#"><FaFacebookSquare size={25} /></a></li>
                <li><a href="#"><FaGooglePlus size={25} /></a></li>
            </ul>	
        </footer>
    )
}

export default Footer
