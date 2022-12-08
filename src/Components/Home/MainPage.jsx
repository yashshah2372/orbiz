import React from "react";
import cssClasses from "./styles/MainPage.module.css"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import logoImg from '../../Assets/Images/logo.png';

import Footer from "./Footer";
import Contact from "./Contact";
import Team from "./Team";
import Feature from "./Feature";

function MainPage() {
    return (
        <>
            {/* header and navbar section */}
            <header className={`${cssClasses.main_menu_area}`}>
                {/* <nav className={`${cssClasses.navbar} ${cssClasses.navbar-expand-lg} ${cssClasses.navbar-light} ${cssClasses.bg-light}`}> */}
                <nav className={`${cssClasses.navbar}`}>
                    <a className="navbar-brand" href="/"><img src={logoImg} alt="" /></a>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button> */}

                    <div className={`${cssClasses.collapse} ${cssClasses.navbar_collapse}`} id="navbarSupportedContent">
                        <ul className={cssClasses.navbar_nav}>
                            <li className={`${cssClasses.nav_item} ${cssClasses.active}`}><a className={`${cssClasses.nav_link}`} href="index.html">Home</a></li>
                            <li className={`${cssClasses.nav_item}`}><a className={`${cssClasses.nav_link}`} href="project.html">Projects</a></li>
                            <li className={`${cssClasses.nav_item}`}><a className={`${cssClasses.nav_link}`} href="career.html">Career</a></li>
                            <li className={`${cssClasses.nav_item}`}><a className={`${cssClasses.nav_link}`} href="about-us.html">About Us</a></li>
                            <li className={`${cssClasses.nav_item}`}><a className={`${cssClasses.nav_link}`} href="contact-us.html">Contact Us</a></li>
                            <li className={`${cssClasses.nav_item}`}><a className={`${cssClasses.nav_link}`} href="kb.html">Knowlwdge Bank</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <div className={`${cssClasses.ftcoDegreeBg} ${cssClasses.heroWrap}`}>
                <div className={cssClasses.overlay}></div>
                <div className={cssClasses.mouse}>
                    <a href="/" className={`${cssClasses.mouseIcon}`}>
                        <div className={`${cssClasses.mouseWheel}`}>
                            <ArrowDownwardIcon style={{ fontSize: "2rem" }} />
                        </div>
                    </a>
                </div>
            </div>
            
            <div>
                <Feature />
            </div>
            <div>
                <Team />
            </div>
            <div>
                <Contact />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default MainPage;
