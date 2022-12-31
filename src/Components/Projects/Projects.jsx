import React from "react";
import { useState } from "react";
import cssClasses from "./Project.module.css";
import Slider from "react-slick";
import SimpleSlider from "../../Subcomponents/Slider/Slider";

const Projects = () => {
    const [data, setData] = useState("specifications");
    return (
        <div className="w-full flex justify-center">
            <div className="flex sm:mt-32 p-8 justify-center w-4/5 flex-col sm:flex-row mt-2">
                <div className="bg-[#293241] h-[32.5rem] px-16 py-12 w-1/3 font-[Montserrat]">
                    <span className="text-white text-2xl block border-l-4 pl-4 border-[#FF8845]">FEATURE PROPERTY</span>
                    <ul className="text-white text-xl py-8">
                        <li className="py-4 border-b-2 border-[#39444D] cursor-pointer" onClick={() => setData("specifications")}>
                            Specifications
                        </li>
                        <li className="py-4 border-b-2 border-[#39444D] cursor-pointer" onClick={() => setData("amenities")}>
                            Amenities
                        </li>
                        <li className="py-4 border-b-2 border-[#39444D] cursor-pointer" onClick={() => setData("vicinity")}>
                            Vicinity
                        </li>
                    </ul>
                </div>
                {data === "specifications" ? (
                    <div className={cssClasses.imageWrapper}>
                        <div className={cssClasses.image}>
                            <SimpleSlider />
                            <div className="absolute bottom-0 left-0 px-12 py-12 w-11/12">
                                <p className="text-white font-[Montserrat] font-normal text-xl leading-8">Kanchan</p>
                                <div className="flex">
                                    <div className="w-3/4 border-r-2 border-white border-opacity-20">
                                        <p className="text-white font-[Montserrat] text-opacity-70 font-normal text-xl leading-8 mb-2">3 Middle Winchendon Rd, Rindge, NH 03461</p>
                                        <span className="text-white font-[Montserrat] font-semibold text-xl leading-8 bg-[#FF8845] px-2 py-1">For Rent</span>
                                        <span className="text-white font-[Montserrat] font-normal text-xl leading-8 mx-4">$ 289.0/month</span>
                                    </div>
                                    <div className="w-1/4 px-10 flex gap-x-14 font-[Montserrat] font-normal text-lg leading-4">
                                        <ol className="text-white">
                                            <li className="mb-6">2,345</li>
                                            <li>03</li>
                                        </ol>
                                        <ol className="text-white">
                                            <li className="mb-6">03</li>
                                            <li>01</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : data === "amenities" ? (
                    <div className={cssClasses.imageWrapper}>
                        <div className={cssClasses.image}>
                            <SimpleSlider />
                            <div className="absolute bottom-0 left-0 px-12 py-12 w-11/12">
                                <p className="text-white font-[Montserrat] font-normal text-xl leading-8">Kanchan</p>
                                <div className="flex font-[Montserrat] w-full my-6 text-lg">
                                    <ul className="text-white h-10 w-full list-disc">
                                        <li>Amenity 1</li>
                                        <li>Amenity 2</li>
                                        <li>Amenity 3</li>
                                    </ul>
                                    <ul className="text-white h-10 w-full list-disc">
                                        <li>Amenity 4</li>
                                        <li>Amenity 5</li>
                                        <li>Amenity 6</li>
                                    </ul>
                                    <ul className="text-white h-10 w-full list-disc">
                                        <li>Amenity 7</li>
                                        <li>Amenity 8</li>
                                        <li>Amenity 9</li>
                                    </ul>
                                    <ul className="text-white h-10 w-full list-disc">
                                        <li>Amenity 10</li>
                                        <li>Amenity 11</li>
                                        <li>Amenity 12</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={cssClasses.imageWrapper}>
                        <div className={cssClasses.image}>
                            <SimpleSlider />
                            <div className="absolute bottom-0 left-0 px-12 py-12 w-11/12">
                                <p className="text-white font-[Montserrat] font-normal text-xl leading-8">Kanchan</p>
                                <div className="flex font-[Montserrat] w-full my-6 text-lg">
                                    <ul className="text-white h-10 w-full list-disc">
                                        <li>Vicinity 1 : dist 1</li>
                                        <li>Vicinity 2 : dist 2</li>
                                    </ul>
                                    <ul className="text-white h-10 w-full list-disc">
                                        <li>Vicinity 3 : dist 3</li>
                                        <li>Vicinity 4 : dist 4</li>
                                    </ul>
                                    <ul className="text-white h-10 w-full list-disc">
                                        <li>Vicinity 5 : dist 5</li>
                                        <li>Vicinity 6 : dist 6</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
