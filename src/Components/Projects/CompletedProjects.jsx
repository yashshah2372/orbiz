import React from "react";
import { useState } from "react";
import cssClasses from "./Project.module.css";
import Slider from "react-slick";
import nirmalImg1 from "../../Assets/Images/NirmalTownship/NirmalTownShip_1.webp";
import nirmalImg2 from "../../Assets/Images/NirmalTownship/NirmalTownShip_2.webp";
import nirmalImg3 from "../../Assets/Images/NirmalTownship/NirmalTownShip_3.webp";
import nirmalImg4 from "../../Assets/Images/NirmalTownship/NirmalTownShip_4.webp";
import nirmalImg5 from "../../Assets/Images/NirmalTownship/NirmalTownShip_5.webp";
import avalonImg1 from "../../Assets/Images/Avalon/AVALON_1.webp";
import avalonImg2 from "../../Assets/Images/Avalon/AVALON_2.webp";
import avalonImg3 from "../../Assets/Images/Avalon/AVALON_3.webp";
import avalonImg4 from "../../Assets/Images/Avalon/AVALON_4.webp";
import avalonImg5 from "../../Assets/Images/Avalon/AVALON_5.webp";
import artemisImg1 from "../../Assets/Images/Artemis/ARTEMIS_1.webp";
import artemisImg2 from "../../Assets/Images/Artemis/ARTEMIS_2.webp";
import artemisImg3 from "../../Assets/Images/Artemis/ARTEMIS_3.webp";
import artemisImg4 from "../../Assets/Images/Artemis/ARTEMIS_4.webp";
import artemisImg5 from "../../Assets/Images/Artemis/ARTEMIS_5.webp";
import kiaraImg1 from "../../Assets/Images/Kiara/KIARA_1.webp";
import kiaraImg2 from "../../Assets/Images/Kiara/KIARA_2.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompletedProjects = () => {
    const [data, setData] = useState("specifications");
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
        <>
            <div className="w-full flex justify-center">
                <div className="flex sm:mt-32 py-4 sm:p-8 justify-center w-4/5 flex-col-reverse sm:flex-row mt-2">
                    {/* <div className="bg-[#293241] sm:h-[32.5rem] md:px-6 md:py-12 lg:px-16 lg:py-12 w-full sm:w-1/3 font-[Montserrat]">
                        <div className="px-4 pt-6 sm:px-0 sm:pt-0">
                            <span className="text-white text-2xl block border-l-4 pl-4 border-[#FF8845]">FEATURE PROPERTY</span>
                        </div>
                        <div>
                            <ul className="text-white text-xl px-4 py-4 sm:px-0 sm:py-8">
                                <li className="py-4 border-b-2 border-[#39444D] cursor-pointer" onClick={() => setData("specifications")}>
                                    Specifications
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <div className={cssClasses.imageWrapper} id="1">
                        <div className={cssClasses.image}>
                            <div className="w-auto">
                                <Slider {...settings}>
                                    <div className="w-full">
                                        <img src={nirmalImg1} alt="Kanchan 1" className={cssClasses.sliderImage} />
                                    </div>
                                    <div className="w-full">
                                        <img src={nirmalImg2} alt="Kanchan 2" className={cssClasses.sliderImage} />
                                    </div>
                                    <div className="w-full">
                                        <img src={nirmalImg3} alt="Kanchan 3" className={cssClasses.sliderImage} />
                                    </div>
                                    {/* <div className="w-full">
                                        <img src={nirmalImg4} alt="Kanchan 4" className={cssClasses.sliderImage} />
                                    </div> */}
                                    <div className="w-full">
                                        <img src={nirmalImg5} alt="Kanchan5 " className={cssClasses.sliderImage} />
                                    </div>
                                </Slider>
                            </div>
                            <div className=" absolute bottom-[18rem] left-0 sm:bottom-0 sm:left-0 p-2 sm:p-6 w-11/1; bg-gradient-to-t from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0.6)] to-[transparent] sm:w-[96.5%] w-full">
                                <p className="text-white font-[Montserrat] font-bold text-lg sm:text-xl leading-8">Nirmal Township:</p>
                                <div className="flex items-center">
                                    <div className="w-[210%] sm:w-3/4 border-r-2 border-white border-opacity-20">
                                        <div>
                                            <p className="w-full text-white font-[Montserrat] text-opacity-70 font-normal text-md sm:text-xl sm:leading-8 mb-2">Sr.no.12/3, Anand Nagar, Suncity Road, Pune – 411041</p>
                                        </div>
                                        {/* <div>
                                            <span className="text-white font-[Montserrat] font-semibold text-md sm:text-xl sm:leading-8 bg-[#FF8845] px-2 py-1">For Rent</span>
                                            <span className="block text-white font-[Montserrat] font-normal text-md sm:text-xl sm:leading-8">$289.0/month</span>
                                        </div> */}
                                    </div>
                                    <div className="w-full sm:w-1/3 px-2 sm:px-10 flex gap-x-2 sm:gap-x-14 font-[Montserrat] font-normal text-md sm:text-xl leading-4">
                                        <ol className="text-white">
                                            <li className="mb-6">240 flats</li>
                                            {/* <li>03</li> */}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="flex sm:mt-32 py-4 sm:p-8 justify-center w-4/5 flex-col-reverse sm:flex-row mt-2">
                    {/* <div className="bg-[#293241] sm:h-[32.5rem] md:px-6 md:py-12 lg:px-16 lg:py-12 w-full sm:w-1/3 font-[Montserrat]">
                        <div className="px-4 pt-6 sm:px-0 sm:pt-0">
                            <span className="text-white text-2xl block border-l-4 pl-4 border-[#FF8845]">FEATURE PROPERTY</span>
                        </div>
                        <div>
                            <ul className="text-white text-xl px-4 py-4 sm:px-0 sm:py-8">
                                <li className="py-4 border-b-2 border-[#39444D] cursor-pointer" onClick={() => setData("specifications")}>
                                    Specifications
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <div className={cssClasses.imageWrapper}>
                        <div className={cssClasses.image}>
                            <div className="w-auto">
                                <Slider {...settings}>
                                    {/* <div className="w-full">
                                        <img src={avalonImg1} alt="Kanchan 1" className={cssClasses.sliderImage} />
                                    </div> */}
                                    <div className="w-full">
                                        <img src={avalonImg2} alt="Kanchan 2" className={cssClasses.sliderImage} />
                                    </div>
                                    <div className="w-full">
                                        <img src={avalonImg3} alt="Kanchan 3" className={cssClasses.sliderImage} />
                                    </div>
                                    <div className="w-full">
                                        <img src={avalonImg4} alt="Kanchan 4" className={cssClasses.sliderImage} />
                                    </div>
                                    <div className="w-full">
                                        <img src={avalonImg5} alt="Kanchan5 " className={cssClasses.sliderImage} />
                                    </div>
                                </Slider>
                            </div>
                            <div className=" absolute bottom-[18rem] left-0 sm:bottom-0 sm:left-0 p-2 sm:p-6 w-11/1; bg-gradient-to-t from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0.6)] to-[transparent] sm:w-[96.5%] w-full">
                                <p className="text-white font-[Montserrat] font-bold text-lg sm:text-xl leading-8">Avalon</p>
                                <div className="flex items-center">
                                    <div className="w-[210%] sm:w-3/4 border-r-2 border-white border-opacity-20">
                                        <div>
                                            <p className="w-full text-white font-[Montserrat] text-opacity-70 font-normal text-md sm:text-xl sm:leading-8 mb-2">Sr.no.18/1,19,20/3, Anand Nagar, Suncity Road, Pune – 411041</p>
                                        </div>
                                        {/* <div>
                                            <span className="text-white font-[Montserrat] font-semibold text-md sm:text-xl sm:leading-8 bg-[#FF8845] px-2 py-1">For Rent</span>
                                            <span className="block text-white font-[Montserrat] font-normal text-md sm:text-xl sm:leading-8">$289.0/month</span>
                                        </div> */}
                                    </div>
                                    <div className="w-full sm:w-1/3 px-2 sm:px-10 flex gap-x-2 sm:gap-x-14 font-[Montserrat] font-normal text-md sm:text-xl leading-4">
                                        <ol className="text-white">
                                            <li className="mb-6">20 flats</li>
                                            <li>17 commercial</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="flex sm:mt-32 py-4 sm:p-8 justify-center w-4/5 flex-col-reverse sm:flex-row mt-2">
                    {/* <div className="bg-[#293241] sm:h-[32.5rem] md:px-6 md:py-12 lg:px-16 lg:py-12 w-full sm:w-1/3 font-[Montserrat]">
                        <div className="px-4 pt-6 sm:px-0 sm:pt-0">
                            <span className="text-white text-2xl block border-l-4 pl-4 border-[#FF8845]">FEATURE PROPERTY</span>
                        </div>
                        <div>
                            <ul className="text-white text-xl px-4 py-4 sm:px-0 sm:py-8">
                                <li className="py-4 border-b-2 border-[#39444D] cursor-pointer" onClick={() => setData("specifications")}>
                                    Specifications
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <div className={cssClasses.imageWrapper}>
                        <div className={cssClasses.image}>
                            <div className="w-auto">
                                <Slider {...settings}>
                                    <div className="w-full">
                                        <img src={artemisImg1} alt="Kanchan 1" className={cssClasses.sliderImage} />
                                    </div>
                                    <div className="w-full">
                                        <img src={artemisImg2} alt="Kanchan 2" className={cssClasses.sliderImage} />
                                    </div>
                                    {/* <div className="w-full">
                                        <img src={artemisImg3} alt="Kanchan 3" className={cssClasses.sliderImage} />
                                    </div> */}
                                    <div className="w-full">
                                        <img src={artemisImg4} alt="Kanchan 4" className={cssClasses.sliderImage} />
                                    </div>
                                    <div className="w-full">
                                        <img src={artemisImg5} alt="Kanchan5 " className={cssClasses.sliderImage} />
                                    </div>
                                </Slider>
                            </div>
                            <div className=" absolute bottom-[18rem] left-0 sm:bottom-0 sm:left-0 p-2 sm:p-6 w-11/1; bg-gradient-to-t from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0.6)] to-[transparent] sm:w-[96.5%] w-full">
                                <p className="text-white font-[Montserrat] font-bold text-lg sm:text-xl leading-8">ARTEMIS</p>
                                <div className="flex items-center">
                                    <div className="w-[210%] sm:w-3/4 border-r-2 border-white border-opacity-20">
                                        <div>
                                            <p className="w-full text-white font-[Montserrat] text-opacity-70 font-normal text-md sm:text-xl sm:leading-8 mb-2">Sr.no.18/1,19,20/3, Anand Nagar, Suncity Road, Pune – 411041</p>
                                        </div>
                                        {/* <div>
                                            <span className="text-white font-[Montserrat] font-semibold text-md sm:text-xl sm:leading-8 bg-[#FF8845] px-2 py-1">For Rent</span>
                                            <span className="block text-white font-[Montserrat] font-normal text-md sm:text-xl sm:leading-8">$289.0/month</span>
                                        </div> */}
                                    </div>
                                    <div className="w-full sm:w-1/3 px-2 sm:px-10 flex gap-x-2 sm:gap-x-14 font-[Montserrat] font-normal text-md sm:text-xl leading-4">
                                        <ol className="text-white">
                                            <li className="mb-6">146 flats</li>
                                            {/* <li>03</li> */}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="flex sm:mt-32 py-4 sm:p-8 justify-center w-4/5 flex-col-reverse sm:flex-row mt-2">
                    {/* <div className="bg-[#293241] sm:h-[32.5rem] md:px-6 md:py-12 lg:px-16 lg:py-12 w-full sm:w-1/3 font-[Montserrat]">
                        <div className="px-4 pt-6 sm:px-0 sm:pt-0">
                            <span className="text-white text-2xl block border-l-4 pl-4 border-[#FF8845]">FEATURE PROPERTY</span>
                        </div>
                        <div>
                            <ul className="text-white text-xl px-4 py-4 sm:px-0 sm:py-8">
                                <li className="py-4 border-b-2 border-[#39444D] cursor-pointer" onClick={() => setData("specifications")}>
                                    Specifications
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <div className={cssClasses.imageWrapper}>
                        <div className={cssClasses.image}>
                            <div className="w-auto">
                                <Slider {...settings}>
                                    <div className="w-full">
                                        <img src={kiaraImg1} alt="Kanchan 1" className={cssClasses.sliderImage} />
                                    </div>
                                    <div className="w-full">
                                        <img src={kiaraImg2} alt="Kanchan 2" className={cssClasses.sliderImage} />
                                    </div>
                                </Slider>
                            </div>
                            <div className=" absolute bottom-[18rem] left-0 sm:bottom-0 sm:left-0 p-2 sm:p-6 w-11/1; bg-gradient-to-t from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0.6)] to-[transparent] sm:w-[96.5%] w-full">
                                <p className="text-white font-[Montserrat] font-bold text-lg sm:text-xl leading-8">KIARA</p>
                                <div className="flex items-center">
                                    <div className="w-[210%] sm:w-3/4 border-r-2 border-white border-opacity-20">
                                        <div>
                                            <p className="w-full text-white font-[Montserrat] text-opacity-70 font-normal text-md sm:text-xl sm:leading-8 mb-2">Sr.no.18/1,19,20/3, Anand Nagar, Suncity Road, Pune – 411041</p>
                                        </div>
                                        {/* <div>
                                            <span className="text-white font-[Montserrat] font-semibold text-md sm:text-xl sm:leading-8 bg-[#FF8845] px-2 py-1">For Rent</span>
                                            <span className="block text-white font-[Montserrat] font-normal text-md sm:text-xl sm:leading-8">$289.0/month</span>
                                        </div> */}
                                    </div>
                                    <div className="w-full sm:w-1/3 px-2 sm:px-10 flex gap-x-2 sm:gap-x-14 font-[Montserrat] font-normal text-md sm:text-xl leading-4">
                                        <ol className="text-white">
                                            <li className="mb-6">82 flats</li>
                                            <li>15 commercial</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompletedProjects;
