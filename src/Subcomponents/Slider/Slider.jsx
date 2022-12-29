import React, { Component } from "react";
import Slider from "react-slick";
import img from "../../Assets/Images/div.svg";
import img2 from "../../Assets/Images/logo.png";
import "slick-carousel/slick/slick.css";
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
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}
