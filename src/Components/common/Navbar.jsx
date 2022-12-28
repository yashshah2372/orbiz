import React from "react";
import cssClasses from "../Home/styles/MainPage.module.css";
import logoImg from '../../Assets/Logo/Orbiz-Logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className={`${cssClasses.main_menu_area} shadow-lg`}>
            <nav className={`${cssClasses.navbar} ${cssClasses.navbar_expand_lg} ${cssClasses.navbar_light} ${cssClasses.bg_light}`}>
                <a className={cssClasses.navbar_brand} href="/">
                    <img className="w-16" src={logoImg} alt="" />
                </a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button> */}

                <div className={`${cssClasses.collapse} ${cssClasses.navbar_collapse}`} id={cssClasses.navbarSupportedContent}>
                    <ul className={cssClasses.navbar_nav}>
                        <li className={`${cssClasses.nav_item}`}>
                            <Link to="/" className={`${cssClasses.nav_link}`}>
                                Home
                            </Link>
                        </li>
                        <li className={`${cssClasses.nav_item}`}>
                            <Link to="/projects" className={`${cssClasses.nav_link}`}>
                                Projects
                            </Link>
                        </li>
                        <li className={`${cssClasses.nav_item}`}>
                            <Link to="/career" className={`${cssClasses.nav_link}`}>
                                Career
                            </Link>
                        </li>
                        <li className={`${cssClasses.nav_item}`}>
                            <Link to="/about-us" className={`${cssClasses.nav_link}`}>
                                About Us
                            </Link>
                        </li>
                        <li className={`${cssClasses.nav_item}`}>
                            <Link to="/contactUs" className={`${cssClasses.nav_link}`}>
                                Contact Us
                            </Link>
                        </li>
                        <li className={`${cssClasses.nav_item}`}>
                            <Link to="/KnowledgeBank" className={`${cssClasses.nav_link}`}>
                                Knowledge Bank
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
