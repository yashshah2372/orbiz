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
                                    <h3>O<span>ptimum</span></h3>
                                    <p>Optimum usage of Space, “Minimal wastage homes" is our motto, providing you with the ideal space required for your comfort, no more- no less.</p>
                                    <div class={cssClasses.media}>
                                        <div class={cssClasses.dFlex}>
                                            <img class={cssClasses.rounded_circle} src="img/testimonials/testi-1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={cssClasses.item}>
                                <div class={cssClasses.testiItem}>
                                    <h3>R<span>eal</span></h3>
                                    <p>“REAL” Estate, not just an Estate. It is an asset that is made using utmost quality Materials, with the best workmanship which is our USP.</p>
                                    <div class={cssClasses.media}>
                                        <div class={cssClasses.dFlex}>
                                            <img class={cssClasses.rounded_circle} src="img/testimonials/testi-1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={cssClasses.item}>
                                <div class={cssClasses.testiItem}>
                                    <h3>B<span>alanced</span></h3>
                                    <p>Balanced well between all your concerns – Location, Price, Area.</p>
                                    <div class={cssClasses.media}>
                                        <div class={cssClasses.dFlex}>
                                            <img class={cssClasses.rounded_circle} src="img/testimonials/testi-1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={cssClasses.item}>
                                <div class={cssClasses.testiItem}>
                                    <h3>I<span>llustrative</span></h3>
                                    <p>Illustrative homes setting a benchmark in Built Quality.</p>
                                    <div class={cssClasses.media}>
                                        <div class={cssClasses.dFlex}>
                                            <img class={cssClasses.rounded_circle} src="img/testimonials/testi-1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={cssClasses.item}>
                                <div class={cssClasses.testiItem}>
                                    <h3>Z<span></span></h3>
                                    <p>Just like the letter Z, we ensure to be supportive till the End.</p>
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
