import React from "react";
import { useNavigate } from "react-router-dom";
import "./navigationPreview.styles.scss";

const NavigationPreview = ({navItems}) => {
    const navigate = useNavigate();

    const handleNavigation = (e) => {
        navigate("/" + e.target.textContent);
    }

    return(
        <div id="navigationPreviewComponent">
            {navItems.map((navItem) => (
                <p className="navItem" onClick = {handleNavigation}>{navItem}</p>
            ))}
        </div>
    )
};
export default NavigationPreview;