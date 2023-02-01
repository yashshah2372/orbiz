import React from "react";
import cssClasses from "./About.module.css";
import img2 from "../../Assets/Other_Companies/OrbizLogo.svg";
import img3 from "../../Assets/Other_Companies/Sorina_Logo.svg";

const About = () => {
    return (
        <div className={cssClasses.wrapper}>
            <div className={cssClasses.businessSection}>
                <div className={cssClasses.houseWrapper}>
                    <span>
                        ORBIZ<span className={cssClasses.subTitle}>Group</span>
                    </span>
                </div>
                <div className={cssClasses.restaurantWrapper}>
                    <span>
                        SORINA<span className={cssClasses.subTitle}>Resorts</span>
                    </span>
                </div>
            </div>
            <div className={cssClasses.logoSection}>
                <img src={img2} className={cssClasses.logoImages} alt="" />
                <img src={img3} className={cssClasses.logoImages} alt="" />
            </div>
            <div className={cssClasses.whoAreWe}>
                <span className={cssClasses.heading}>WHO ARE WE?</span>
                <p className={cssClasses.content}>Orbiz Group, the powerhouse of GKD Developers, KK Construction, Avior Estates, Jatan Constructions and Kankariya Properties, was established in 1993 to bring the city Prominent Structures and Real Estate. Over the years, the group has kept their progressive vision alive by undertaking residential constructions with design, innovativeness and the customer at the heart of their business. With a commitment to excellence, Orbiz Group continues to provide the highest quality of structures and real estate to the city.The Orbiz Group is proud to showcase a portfolio of 8+ projects that have been bringing joy and happiness to many families. Located in the heart of Sinhagad Road, Pune, our projects have been widely admired and have helped us create a distinct niche in the market as a reliable, value-driven, and futuristic brand. Our commitment to excellence has earned us the trust and loyalty of our clients, and we are proud to be at the forefront of providing quality homes and projects.Since its inception, Orbiz Group has been dedicated to creating value-driven spaces that combine the finest quality, workmanship and artistry. Our commitment to building exquisite homes, opulent residences and strong relationships with our clients reflects our philosophy of delivering luxurious living experiences at an affordable price. Every Orbiz Group home is a testament to our mission of creating spaces of unparalleled luxury without the hefty price tag. We are committed to providing our clients with the highest degree of service, quality and satisfaction.</p>
            </div>
        </div>
    );
};

export default About;
