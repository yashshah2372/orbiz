import React from 'react';
import cssClasses from "./styles/MainPage.module.css"
import worldMap from '../../Assets/Images/world-map.png';

const Contact = () => {
    return (
        <>
            <section className={cssClasses.get_in_touch_area}>
                <section className={cssClasses.container}>
                    <div className={`${cssClasses.row} ${cssClasses.get_touch_inner}`}>
                        <div className={cssClasses.col_lg_6}>
                            <form className={`${cssClasses.contact_us_form} ${cssClasses.row}`} action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                <div className={`${cssClasses.form_group} ${cssClasses.col_lg_6}`}>
                                    <input type="text" className={cssClasses.form_control} id="name" name="name" placeholder="Name" />
                                </div>
                                <div className={`${cssClasses.form_group} ${cssClasses.col_lg_6}`}>
                                    <input type="email" className={cssClasses.form_control} id="email" name="email" placeholder="Email" />
                                </div>
                                <div className={`${cssClasses.form_group} ${cssClasses.col_lg_12}`}>
                                    <input type="text" className={cssClasses.form_control} id="subject" name="subject" placeholder="Subject*" />
                                </div>
                                <div className={`${cssClasses.form_group} ${cssClasses.col_lg_12}`}>
                                    <textarea className={cssClasses.form_control} name="message" id="message" rows="1" placeholder="Message"></textarea>
                                </div>
                                <div className={`${cssClasses.form_group} ${cssClasses.col_lg_12}`}>
                                    <button type="submit" value="submit" className={`${cssClasses.btn} ${cssClasses.submit_btn} form-control`}>Send</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </section>
                <section className={`${cssClasses.world_map_area} ${cssClasses.p_100}`}>
                    <div className={cssClasses.container}>
                        <div className={cssClasses.world_map_inner}>
                            <img className={cssClasses.img_fluid} src={worldMap} alt="" />
                            <div className={cssClasses.bd_callout}>
                                <h3>Gibraltar Office</h3>
                                <p>Casemates Square, no253 <br /> United kingdom</p>
                                <h4><a href="/">+453678 9283 559</a> <a href="/">contact@template.com</a></h4>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Contact;
