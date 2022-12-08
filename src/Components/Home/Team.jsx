import React from 'react';
import cssClasses from "./styles/MainPage.module.css"
import teamP1 from '../../Assets/team/people/people-1.jpg';
import teamP2 from '../../Assets/team/people/people-2.jpg';
import teamP3 from '../../Assets/team/people/people-3.jpg';
import teamP4 from '../../Assets/team/people/people-4.jpg';

const Team = () => {
    return (
        <>
            <section className={cssClasses.teamPeopleArea}>
                <div className={cssClasses.containerFluid}>
                    <div className={cssClasses.row}>
                        <div className={cssClasses.col_lg_6}>
                            <div className={cssClasses.team_people_text}>
                                <div className={cssClasses.lTitle}>
                                    <img src="img/icon/title-icon.png" alt="" />
                                    <h6>Discover the features</h6>
                                    <h2>Endeavouring in the direction of creating utmost Value for our Customers</h2>
                                </div>
                                <p>Because we at Orbiz have a culture of empathising with all our stakeholders, our customers, our team, with an open mind and a feed- back –feed- forward approach that helps us for being in sync with the latest market trends and customer requirements!</p>
                            </div>
                        </div>
                        <div className={cssClasses.col_lg_6}>
                            <div className={cssClasses.team_img_inner}>
                                <div className={cssClasses.row}>
                                    <div className={`${cssClasses.col_lg_6} ${cssClasses.col_6}`}>
                                        <div className={cssClasses.team_img_item}>
                                            <img src={teamP1} alt="" />
                                        </div>
                                    </div>
                                    <div className={`${cssClasses.col_lg_6} ${cssClasses.col - 6}`}>
                                        <div className="team_img_item">
                                            <img src={teamP2} alt="" />
                                        </div>
                                    </div>
                                    <div className={`${cssClasses.col_lg_6} ${cssClasses.col - 6}`}>
                                        <div className="team_img_item">
                                            <img src={teamP3} alt="" />
                                        </div>
                                    </div>
                                    <div className={`${cssClasses.col_lg_6} ${cssClasses.col - 6}`}>
                                        <div className="team_img_item">
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
    )
}

export default Team;
