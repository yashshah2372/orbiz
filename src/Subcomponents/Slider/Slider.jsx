import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../Assets/Images/kanchan/kanchan1.webp";
import img2 from "../../Assets/Images/kanchan/kanchan2.webp";
import img3 from "../../Assets/Images/kanchan/kanchan3.webp";
import img4 from "../../Assets/Images/kanchan/kanchan4.webp";
import img5 from "../../Assets/Images/kanchan/kanchan5.webp";
import img6 from "../../Assets/Images/kanchan/kanchan6.webp";
import "slick-carousel/slick/slick.css";
import cssClasses from "./Slider.module.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="w-auto">
                <Slider {...settings}>
                    <div className="w-full ">
                        <img src={img1} alt="Kanchan 1" className={cssClasses.sliderImage} />
                    </div>
                    <div className="w-full">
                        <img src={img2} alt="Kanchan 2" className={cssClasses.sliderImage} />
                    </div>
                    <div className="w-full">
                        <img src={img3} alt="Kanchan 3" className={cssClasses.sliderImage} />
                    </div>
                    <div className="w-full">
                        <img src={img4} alt="Kanchan 4" className={cssClasses.sliderImage} />
                    </div>
                    <div className="w-full">
                        <img src={img5} alt="Kanchan5 " className={cssClasses.sliderImage} />
                    </div>
                    <div className="w-full">
                        <img src={img6} alt="Kanchan 6" className={cssClasses.sliderImage} />
                    </div>
                </Slider>
            </div>
        );
    }
}
