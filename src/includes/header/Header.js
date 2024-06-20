import React from 'react';
import { NavLink } from "react-router-dom";
import { Container } from 'react-bootstrap';
import logo from '../../assets/svg/logo.svg';
import hire from '../../assets/svg/hire.svg';
import menu from '../../assets/icons/menu.png';
import close from '../../assets/icons/close.png';
import './Header.scss';

const Header = () => {
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (
        <>
        <div className='top_header'>
            <div className='container'>
                <p><span>Award Winning Company</span> | <span>2000+ Projects Completed</span> | <span>69% Returning Customers</span></p>
            </div>        
        </div>
            <header className={click ? "main-container" : ""} onClick={() => Close()}>
                <Container>
                    <nav className="navbar" onClick={e => e.stopPropagation()}>
                        <div className="nav-container">
                            <NavLink to="/" className="nav-logo">
                                <img src={logo} alt='logo' />
                            </NavLink>
                            <ul className={click ? "nav-menu active" : "nav-menu"}>
                                <li className="nav-item">
                                    <NavLink
                                        to="/"
                                        className="nav-links"
                                        onClick={click ? handleClick : null}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/about"
                                        className="nav-links"
                                        onClick={click ? handleClick : null}
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/services"
                                        className="nav-links"
                                        onClick={click ? handleClick : null}
                                    >
                                        Services
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/portfolio"
                                        className="nav-links"
                                        onClick={click ? handleClick : null}
                                    >
                                        Our Portfolio
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/reviews"
                                        className="nav-links"
                                        onClick={click ? handleClick : null}
                                    >
                                        Review
                                    </NavLink>
                                </li>
                                <li className='nav-item hireme'>
                                    <a href="https://www.freelancer.com/u/ambalaonline1" className='nav-links hireme-btn' target='_blank' rel='noreferrer'> <img src={hire} alt='hire' /> Hire Me</a>
                                </li>
                            </ul>
                            <div className="nav-icon" onClick={handleClick}>
                                <img src={click ? close : menu} alt="icons" />
                            </div>
                        </div>
                    </nav>
                </Container>
            </header>
        </>
    );
};

export default Header;