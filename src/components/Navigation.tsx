import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faComments,
    faHome,
    faAddressCard,
    faHandsHelping,
    faBell,
    faUserCircle
} from '@fortawesome/free-solid-svg-icons';

const Navigation: React.FunctionComponent = () => {
    return (
        <nav role="navigation" aria-label="header navigation">
            <ul className="navbar">
                <li className="nav-item">search</li>
                <li className="nav-item">
                    <NavLink className="navbar-item" to="/">
                        <FontAwesomeIcon icon={faHome} />
                        <div>Home</div>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="navbar-item" to="/feedback">
                        <FontAwesomeIcon icon={faComments} />
                        <div>Feedback</div>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="navbar-item" to="/contacts">
                        <FontAwesomeIcon icon={faAddressCard} />
                        <div>Contacts</div>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="navbar-item" to="/help">
                        <FontAwesomeIcon icon={faHandsHelping} />
                        <div>Help</div>
                    </NavLink>
                </li>
                <div>
                    <FontAwesomeIcon icon={faBell} />
                    <FontAwesomeIcon icon={faUserCircle} />
                </div>
            </ul>
        </nav>
    );
};

export default Navigation;
