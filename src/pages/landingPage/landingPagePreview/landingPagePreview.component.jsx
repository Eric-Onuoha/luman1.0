import React from "react";
import "./landingPagePreview.styles.scss";

import Navigation from "../../../components/navigation/navigation.component";
import ContactDetails from "../../../components/contactDetails/contactDetails.component";

const LandingPagePreview = () => {
    return(
        <div id="landingPagePreviewComponent">

            <div id="landingIntro">
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