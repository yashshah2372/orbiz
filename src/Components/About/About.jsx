import React from "react";
import cssClasses from "./About.module.css";
import img1 from "../../Assets/Logo/Orbiz-Logo-Icon.png";
import img2 from "../../Assets/Logo/Orbiz-Logo-Text.png";
import img3 from "../../Assets/Logo/Orbiz-Logo.png";
import img4 from "../../Assets/Logo/OrbizLogoH.png";

const About = () => {
    return (
        <div className={cssClasses.wrapper}>
            <div className={cssClasses.logoSection}>
                <img src={img1} className={cssClasses.logoImages} alt="" />
                <img src={img2} className={cssClasses.logoImages} alt="" />
                <img src={img3} className={cssClasses.logoImages} alt="" />
                <img src={img4} className={cssClasses.logoImages} alt="" />
            </div>
            <div className={cssClasses.businessSection}>
                <div className={cssClasses.houseWrapper}>
                    <span>
                        House<span className={cssClasses.subTitle}>230 property</span>
                    </span>
                </div>
                <div className={cssClasses.restaurantWrapper}>
                    <span>
                        Restaurant<span className={cssClasses.subTitle}>230 Restaurant</span>
                    </span>
                </div>
                <div className={cssClasses.officeWrapper}>
                    <span>
                        Office<span className={cssClasses.subTitle}>230 Office</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default About;
