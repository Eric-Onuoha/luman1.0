import React from "react";
import "./landingPagePreview.styles.scss";

import Navigation from "../../../components/navigation/navigation.component";
import ContactDetails from "../../../components/contactDetails/contactDetails.component";

import BreadBanner from "../../../assets/images/breadBanner.png";
import Logo from "../../../assets/images/LushOvensLogo.png";

const LandingPagePreview = () => {
    return(
        <div id="landingPagePreviewComponent">
            <img src={Logo} alt="" />

            <div id="landingIntro">
                <img id="banner" src={BreadBanner} alt="An Image of Sliced Bread" />
                <div id="navigationComponent">
                    <Navigation></Navigation>
                </div>
            </div>

            <div id="contactDetailsComponent">
                <ContactDetails></ContactDetails>
            </div>

        </div>
    )
};
export default LandingPagePreview;