import React from "react";
import cssClasses from "./styles/MainPage.module.css";
import teamP1 from "../../Assets/team/people/people-1.jpg";
import teamP2 from "../../Assets/team/people/people-2.jpg";
import teamP3 from "../../Assets/team/people/people-3.jpg";
import teamP4 from "../../Assets/team/people/people-4.jpg";

const Team = () => {
    return (
        <>
            <section className={cssClasses.teamPeopleArea}>
                <div className={cssClasses.containerFluid}>
                    <div className={`flex flex-col lg:flex-row`}>
                        <div className={`w-full flex flex-row lg:flex-col items-center justify-center`}>
                            <div className={`${cssClasses.team_people_text} px-6 lg:px-0 lg:pl-8`}>
                                <div className={cssClasses.lTitle}>
                                    <img src="img/icon/title-icon.png" alt="" />
                                    <h6>Discover the features</h6>
                                    <h2>Endeavouring in the direction of creating utmost Value for our Customers</h2>
                                </div>
                                <p>At Orbiz, we have a culture of empathy and open dialogue between our customers, our team, and our stakeholders. Our feedback-forward approach helps us stay in sync with the latest market trends and customer requirements. We are committed to creating an environment of understanding and collaboration, where everyone can have their voice heard and their ideas valued.</p>
                            </div>
                        </div>
                        <div className="sm:mr-8 lg:mr-0 flex items-center">
                            <div className={cssClasses.team_img_inner}>
                                <div className={`grid grid-cols-2`}>
                                    <div className={``}>
                                        <div className={cssClasses.team_img_item}>
                                            <img src={teamP1} alt="" />
                                        </div>
                                    </div>
                                    <div className={``}>
                                        <div className={cssClasses.team_img_item}>
                                            <img src={teamP2} alt="" />
                                        </div>
                                    </div>
                                    <div className={``}>
                                        <div className={cssClasses.team_img_item}>
                                            <img src={teamP3} alt="" />
                                        </div>
                                    </div>
                                    <div className={``}>
                                        <div className={cssClasses.team_img_item}>
                                            <img src={teamP4} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;
