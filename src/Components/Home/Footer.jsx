import React from 'react';
import cssClasses from "./styles/MainPage.module.css"
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
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel='noreferrer'>Colorlib</a>
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