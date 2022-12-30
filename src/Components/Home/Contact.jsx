import React from 'react';
import cssClasses from "./styles/MainPage.module.css"
import worldMap from '../../Assets/Images/world-map.png';

const Contact = () => {
    return (
        <>
            <section className={`${cssClasses.get_in_touch_area}`}>
                <section className={`${cssClasses.world_map_area} ${cssClasses.p_100}`}>
                    <div className={cssClasses.container}>
                        <div className={cssClasses.world_map_inner}>
                            <img className={cssClasses.img_fluid} src={worldMap} alt="" />
                            <div className={`${cssClasses.bd_callout} px-4`}>
                                <h3>Gibraltar Office</h3>
                                <p>Casemates Square, no253 United kingdom</p>
                                <h4 className='block'><a href="/">+453678 9283 559</a> </h4>
                                <h4 className='block'><a href="/">contact@template.com</a></h4>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Contact;
