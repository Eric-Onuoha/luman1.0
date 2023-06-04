import React from "react";
import { useNavigate } from "react-router-dom";
import "./navigationPreview.styles.scss";

import Logo from "../../../assets/images/LushOvensLogo.png";

const NavigationPreview = ({navItems}) => {
    const navigate = useNavigate();

    const handleNavigation = (e) => {
        navigate("/" + e.target.textContent);
    }

    return(
        <div id="navigationPreviewComponent">
            {/* {navItems.map((navItem) => ( */}
                <p className="navItem " onClick = {handleNavigation}>{navItems[0]} <span id="careers"></span></p>
                <a href="/"><img id="logo" src={Logo} alt="" /></a> 
                <p className="navItem" onClick = {handleNavigation}>{navItems[1]}</p>
            {/* ))} */}
        </div>
    )
};
export default NavigationPreview;