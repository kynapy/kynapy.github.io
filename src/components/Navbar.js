import "../css/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="https://www.github.com/kynapy"><FontAwesomeIcon icon={faGithub} size="3x" style={{marginRight: "25px"}}/></a></li>
                <li><a href="https://www.linkedin.com/in/kiyan-ang"><FontAwesomeIcon icon={faLinkedin} size="3x" style={{marginRight: "25px"}}/></a></li>
                <li class="navElements">RESUME</li>
                <li class="navElements">EXPERIENCE</li>
                <li class="navElements">PROJECTS</li>
                <li class="navElements">CONTACT ME</li>
            </ul>
        </nav>
    )
}

export default Navbar;