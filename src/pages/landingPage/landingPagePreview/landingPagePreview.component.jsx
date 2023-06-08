import React from "react";
import "./landingPagePreview.styles.scss";

import { Container, Row } from "bootstrap-4-react/lib/components/layout";

import Navigation from "../../../components/navigation/navigation.component";
import Banner from "../../../components/banner/banner.component";


const LandingPagePreview = () => {
    return(
        <Container id="landingPagePreviewComponent">
            <Row>
                <Banner></Banner>
            </Row>
        </Container>
    )
};
export default LandingPagePreview;