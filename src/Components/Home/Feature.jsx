import React from 'react';
import cssClasses from "./styles/MainPage.module.css"
import serviceOne from '../../Assets/service-icon/service-1.png';

const Feature = () => {
    return (
        <>
            <section className={cssClasses.serviceArea}>
                <div className={cssClasses.cTitle}>
                    <h2>Why Choose Us!</h2>
                </div>
                <div className={cssClasses.containerOrbiz}>
                    <div className={cssClasses.row}>
                        <div className={`${cssClasses.col_md_2} col-sm-3`}>
                            <div className={cssClasses.serviceItem}>
                                <img src={serviceOne} alt="" />
                                <h3>Optimum</h3>
                                <p>usage of Space, “Minimal wastage homes" is our motto, providing you with the ideal space required for your comfort, no more- no less</p>
                                <a className={`${cssClasses.more_btn}`} href="/">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className={`${cssClasses.col_md_2} col-sm-3`}>
                            <div className={cssClasses.serviceItem}>
                                <img src={serviceOne} alt="" />
                                <h3>REAL</h3>
                                <p>Estate, not just an Estate. It is an asset that is made using utmost quality Materials, with the best workmanship which is our USP</p>
                                <a className={`${cssClasses.more_btn}`} href="/">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className={`${cssClasses.col_md_2} col-sm-3`}>
                            <div className={cssClasses.serviceItem}>
                                <img src={serviceOne} alt="" />
                                <h3>Balanced</h3>
                                <p>well between all your concerns – Location, Price, Area</p>
                                <a className={`${cssClasses.more_btn}`} href="/">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className={`${cssClasses.col_md_2} col-sm-3`}>
                            <div className={cssClasses.serviceItem}>
                                <img src={serviceOne} alt="" />
                                <h3>Illustrative</h3>
                                <p>homes setting a benchmark in Built Quality,</p>
                                <a className={`${cssClasses.more_btn}`} href="/">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className={`${cssClasses.col_md_2} col-sm-3`}>
                            <div className={cssClasses.serviceItem}>
                                <img src={serviceOne} alt="" />
                                <h3>Drinks</h3>
                                <p>Just like the letter Z, we ensure to be supportive till the End. (Support Creative)</p>
                                <a className={`${cssClasses.more_btn}`} href="/">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature;
