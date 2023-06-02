import React from "react";
import "./landingPagePreview.styles.scss";

import Navigation from "../../../components/navigation/navigation.component";
import ContactDetails from "../../../components/contactDetails/contactDetails.component";

import BreadBanner from "../../../assets/images/breadBanner.png";


const LandingPagePreview = () => {
    return(
        <div id="landingPagePreviewComponent">
                <div id="navigationComponent">
                    <Navigation></Navigation>
                </div>            

            <div id="landingIntro">
                <img id="banner" src={BreadBanner} alt="An Image of Sliced Bread" />
                <h1 id="brandSlogan">Breakfast made easy!</h1>
            </div>

            <div id="contactDetailsComponent">
                <ContactDetails></ContactDetails>
            </div>

        </div>
    )
};
export default LandingPagePreview;