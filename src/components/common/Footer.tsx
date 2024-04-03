import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <article id='footer'>
            <p className="footer__copyright">©2024 Feast Finder Website</p>
            <p className="footer__signature">
                {'Created by '}
                <a href="https://github.com/kszys90"
                    className="footer__signature--link"
                >
                    Krzysztof Stępień
                </a>
            </p>
            <div className="footer__media-container">
                <Link to="https://github.com/kszys90">
                    <FaGithub fill="white" className="footer__media-item" />
                </Link>
                <Link to="#">
                    <FaLinkedin fill="white" className="footer__media-item" />
                </Link>
            </div>
        </article>
    )
}
