import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer(){
    return (
        <footer>
            <ul className="footer-icon">
                <li className="footer-list"><a href="https://www.linkedin.com/in/frozan-ziaie-1609702a8" target="_blank"><FaLinkedin /></a></li>
                <li className="footer-list"><a href="https://www.facebook.com/aisha.hareer.5?mibextid=ZbWKwL" target="_blank"><FaFacebookSquare /></a></li>
                <li className="footer-list"><a href="https://www.instagram.com/aisha_hareer?igsh=MTRtZno2bXMwNjJtcg%3D%3D&utm_source=qr" target="_blank"><FaInstagramSquare /></a></li>
                <li className="footer-list"><a href="https://github.com/Frozanziaee" target="_blank"><FaGithubSquare /></a></li>
            </ul>
        </footer>
    )
}