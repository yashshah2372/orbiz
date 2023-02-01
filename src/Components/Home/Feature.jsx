import React from "react";
import cssClasses from "./styles/MainPage.module.css";

const Feature = () => {
    return (
        <>
            <section className={cssClasses.serviceArea}>
                <div className={cssClasses.cTitle}>
                    <h2>Why Choose Us!</h2>
                </div>
                <div className={cssClasses.containerOrbiz}>
                    <div className={cssClasses.row}>
                        <div className={cssClasses.feature_content}>
                            <div class={cssClasses.item}>
                                <div class={cssClasses.testiItem}>
                                    <h3>
                                        O<span>ptimum</span>
                                    </h3>
                                    <p>usage of Space, “Minimal wastage homes" is our motto, providing you with the ideal space required for your comfort, no more- no less.</p>
                                    <div class={cssClasses.media}>
                                        <div class={cssClasses.dFlex}>
                                            <img class={cssClasses.rounded_circle} src="img/testimonials/testi-1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={cssClasses.item}>
                                <div class={cssClasses.testiItem}>
                                    <h3>
                                        R<span>eal</span>
                                    </h3>
                                    <p>Estate, not just an Estate. An asset made using utmost quality Materials, with the best workmanship which is our USP.</p>
                                    <div class={cssClasses.media}>
                                        <div class={cssClasses.dFlex}>
                                            <img class={cssClasses.rounded_circle} src="img/testimonials/testi-1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={cssClasses.item}>
                                <div class={cssClasses.testiItem}>
                                    <h3>
                                        B<span>rilliance</span>
                                    </h3>
                                    <p>Orbiz understands that its clients have unique needs and desires when it comes to finding their dream home and the company works hard to make sure that they are provided with the best possible solutions.</p>
                                    <div class={cssClasses.media}>
                                        <div class={cssClasses.dFlex}>
                                            <img class={cssClasses.rounded_circle} src="img/testimonials/testi-1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={cssClasses.item}>
                                <div class={cssClasses.testiItem}>
                                    <h3>
                                        I<span>nnovative</span>
                                    </h3>
                                    <p>and is reflective of the group’s ability to come up with creative and out of the box solutions to the issues of the real estate sector.</p>
                                    <div class={cssClasses.media}>
                                        <div class={cssClasses.dFlex}>
                                            <img class={cssClasses.rounded_circle} src="img/testimonials/testi-1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={cssClasses.item}>
                                <div class={cssClasses.testiItem}>
                                    <h3>
                                        Z<span>eal</span>
                                    </h3>
                                    <p>We have a zealous and dedicated team of professionals who strive to exceed expectations and deliver the best possible results. The company's team is constantly striving to improve and innovate in order to provide the best possible service.</p>
                                    <div class={cssClasses.media}>
                                        <div class={cssClasses.dFlex}>
                                            <img class={cssClasses.rounded_circle} src="img/testimonials/testi-1.jpg" alt="" />
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

export default Feature;
