import React from "react";
import cssClasses from "./styles/MainPage.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Header = () => {
    return (
        <>
            <div className={`${cssClasses.ftcoDegreeBg} ${cssClasses.heroWrap}`}>
                <span>
                    Move Into What Moves <span className={cssClasses.textAnimation}>You!</span>
                </span>
                <div className={cssClasses.overlay}></div>
                <div className={cssClasses.mouse}>
                    <a href="/" className={`${cssClasses.mouseIcon}`}>
                        <div className={`${cssClasses.mouseWheel}`}>
                            <ArrowDownwardIcon style={{ fontSize: "2rem" }} />
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;
