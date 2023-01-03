import React from "react";

import Contact from "./Contact";
import Team from "./Team";
import Feature from "./Feature";
import Header from "./Header";
import Captcha from "../../Subcomponents/Slider/Captcha/Captcha";

function MainPage() {
    return (
        <>
            <Header />
            <Feature />
            <Team />
            <Contact />
        </>
    );
}

export default MainPage;
