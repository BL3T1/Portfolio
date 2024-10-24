import './index.scss';
import {Link, NavLink} from "react-router-dom";
import LogoS from '../../assets/images/logo-s.png';
import LogoSub from '../../assets/images/logo_sub.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faInstagram, faTelegram} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="Logo"/>
            <img className='sub-logo' src={LogoSub} alt="Mohsen"/>
        </Link>
        <nav>
            <NavLink exact="true" activeClassName='active' to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact activeClassName='active' className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact activeClassName='active' className="contact-link" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a href='https://github.com/BL3T1' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/mohsen.hammoud1111/' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a href='https://t.me/BL3TT' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTelegram} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar