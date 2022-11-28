import React from "react";
import cssClasses from "./MainPage.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function MainPage() {
    return (
        <>
            <div className={`${cssClasses.ftcoDegreeBg} ${cssClasses.heroWrap}`}>
                <div className={cssClasses.overlay}></div>
                <div className={cssClasses.mouse}>
                    <a className={`${cssClasses.mouseIcon}`}>
                        <div className={`${cssClasses.mouseWheel}`}>
                            <ArrowDownwardIcon style={{ fontSize: "2rem" }} />
                        </div>
                    </a>
                </div>
            </div>

            <section className={cssClasses.serviceArea}>
                <div className={cssClasses.cTitle}>
                    <h2>Why Choose Us!</h2>
                </div>
                <div className={cssClasses.containerOrbiz}>
                    <div className={cssClasses.row}>
                        {/* <div className="col-md-2 col-sm-3">
                            <div className="service_item">
                                <img src="img/service-icon/service-1.png" alt="" />
                                <h3>Optimum</h3>
                                <p>usage of Space, “Minimal wastage homes" is our motto, providing you with the ideal space required for your comfort, no more- no less</p>
                                <a className="more_btn" href="#">
                                    Read More
                                </a>
                            </div>
                        </div> */}
                        {/* <div className="col-md-2 col-sm-3">
                            <div className="service_item">
                                <img src="img/service-icon/service-2.png" alt="" />
                                <h3>REAL</h3>
                                <p>Estate, not just an Estate. It is an asset that is made using utmost quality Materials, with the best workmanship which is our USP</p>
                                <a className="more_btn" href="#">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-3">
                            <div className="service_item">
                                <img src="img/service-icon/service-3.png" alt="" />
                                <h3>Balanced</h3>
                                <p>well between all your concerns – Location, Price, Area</p>
                                <a className="more_btn" href="#">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-3">
                            <div className="service_item">
                                <img src="img/service-icon/service-4.png" alt="" />
                                <h3>Illustrative</h3>
                                <p>homes setting a benchmark in Built Quality,</p>
                                <a className="more_btn" href="#">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-3">
                            <div className="service_item">
                                <img src="img/service-icon/service-4.png" alt="" />
                                <h3>Drinks</h3>
                                <p>Just like the letter Z, we ensure to be supportive till the End. (Support Creative)</p>
                                <a className="more_btn" href="#">
                                    Read More
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className={cssClasses.teamPeopleArea}>
                <div className={cssClasses.containerFluid}>
                    <div className={cssClasses.row}>
                        {/* <div className="col-lg-6">
                            <div className="team_people_text">
                                <div className="l_title">
                                    <img src="img/icon/title-icon.png" alt="" />
                                    <h6>Discover the features</h6>
                                    <h2>Endeavouring in the direction of creating utmost Value for our Customers</h2>
                                </div>
                                <p>Because we at Orbiz have a culture of empathising with all our stakeholders, our customers, our team, with an open mind and a feed- back –feed- forward approach that helps us for being in sync with the latest market trends and customer requirements!</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="team_img_inner">
                                <div className="row">
                                    <div className="col-lg-6 col-6">
                                        <div className="team_img_item">
                                            <img src="img/team/people/people-1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-6">
                                        <div className="team_img_item">
                                            <img src="img/team/people/people-2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-6">
                                        <div className="team_img_item">
                                            <img src="img/team/people/people-3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-6">
                                        <div className="team_img_item">
                                            <img src="img/team/people/people-4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className={cssClasses.getInTouchArea}>
                <section className={cssClasses.container}>
                    <div className={`${cssClasses.row} ${cssClasses.getTouchInner}`}>
                        {/* <div className="col-lg-6">
                            <form className="contact_us_form row" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                <div className="form-group col-lg-6">
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                                </div>
                                <div className="form-group col-lg-6">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                                </div>
                                <div className="form-group col-lg-12">
                                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject*" />
                                </div>
                                <div className="form-group col-lg-12">
                                    <textarea className="form-control" name="message" id="message" rows="1" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group col-lg-12">
                                    <button type="submit" value="submit" className="btn submit_btn form-control">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div> */}
                    </div>
                </section>
                {/* <section className="world_map_area p_100">
                    <div className="container">
                        <div className="world_map_inner">
                            <img className="img-fluid" src="img/world-map.png" alt="" />
                            <div className="bd-callout">
                                <h3>Gibraltar Office</h3>
                                <p>
                                    Casemates Square, no253 <br /> United kingdom
                                </p>
                                <h4>
                                    <a href="#">+453678 9283 559</a> <a href="#">contact@template.com</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </section> */}
            </section>
        </>
    );
}

export default MainPage;
