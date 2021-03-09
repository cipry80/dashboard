import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faComments,
    faHome,
    faAddressCard,
    faHandsHelping,
    faBell,
    faUserCircle,
    faSearch,
    faCircle,
    faTint
} from '@fortawesome/free-solid-svg-icons';
import { isMobile } from 'react-device-detect';

export const BottomNavigation = () => {
    return (
        <nav className="nav-bottom" role="navigation" aria-label="footer navigation">
            <div className="nav-item-home">
                <NavLink className="navbar-link" to="/">
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
            </div>
            <ul className="navbar navbar-links">
                <li className="nav-item">
                    <NavLink className="navbar-link" to="/feedback">
                        <FontAwesomeIcon icon={faComments} />
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="navbar-link" to="/contacts">
                        <FontAwesomeIcon icon={faAddressCard} />
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="navbar-link" to="/help">
                        <FontAwesomeIcon icon={faHandsHelping} />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export const TopNavigation: React.FunctionComponent = () => {
    return (
        <nav className="nav-top" role="navigation" aria-label="header navigation">
            <Link className="brand" to="/">
                <FontAwesomeIcon icon={faTint} />
            </Link>
            {!isMobile && (
                <>
                    <form className="search-form">
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="search" name="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <ul className="navbar navbar-links">
                        <li className="nav-item">
                            <NavLink className="navbar-item" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="navbar-item" to="/feedback">
                                Feedback
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="navbar-item" to="/contacts">
                                Contacts
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="navbar-item" to="/help">
                                Help
                            </NavLink>
                        </li>
                    </ul>
                </>
            )}

            <div className="navbar navbar-right">
                <div className="svg-wrapper">
                    <div className="notification">
                        <FontAwesomeIcon icon={faCircle} />
                        <FontAwesomeIcon icon={faBell} />
                    </div>

                    <FontAwesomeIcon icon={faUserCircle} />
                </div>
            </div>
        </nav>
    );
};
