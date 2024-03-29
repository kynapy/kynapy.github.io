import '../css/Navbar.css';
import Logo from '../images/logo.png';

const Navbar = (props) => {
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <nav>
            <ul>
                <li>
                    <img
                        src={Logo}
                        className='kiyanLogo'
                        alt='Logo for the website'
                        onClick={() => scrollToTop()}
                    ></img>
                </li>
                <li onClick={() => scrollToSection(props.projectRef)}>
                    PROJECTS
                </li>
                <li onClick={() => scrollToSection(props.contactRef)}>
                    CONTACT ME
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
