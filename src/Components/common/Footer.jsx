import React from 'react';
import cssClasses from '../Home/styles/MainPage.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            {/* footer section */}
            <footer className={cssClasses.footer_area}>
                <div className={cssClasses.footer_widget_area}>
                    <div className={cssClasses.container}>
                    </div>
                </div>
                <div className={cssClasses.footer_copyright}>
                    <div className={cssClasses.container} style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div className={cssClasses.float_sm_left}>
                            <h5>
                                Copyright &copy; 2022 | All rights reserved | <span style={{fontWeight: 900, color: '#AACCF9'}}>Orbiz</span>
                            </h5>
                        </div>
                        <div className={cssClasses.float_sm_right}>
                            <ul>
                                <li className={cssClasses.social_icon}>
                                    <a href="/">
                                        <FacebookIcon />
                                    </a>
                                </li>
                                <li className={cssClasses.social_icon}>
                                    <a href="/">
                                        <TwitterIcon />
                                    </a>
                                </li>
                                <li className={cssClasses.social_icon}>
                                    <a href="/">
                                        <InstagramIcon />
                                    </a>
                                </li>
                                <li className={cssClasses.social_icon}>
                                    <a href="/">
                                        <LinkedInIcon />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;