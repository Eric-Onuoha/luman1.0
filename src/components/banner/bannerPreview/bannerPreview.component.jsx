import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import "./bannerPreview.styles.scss";

import BreadBanner from "../../../assets/images/breadBanner.png";

const BannerPreview = () => {
    return(
        <Container id="BannerPreviewComponent">
            <Row>
                <Col><img id="banner" src={BreadBanner} alt="An Image of Sliced Bread" /></Col>
            </Row>
            <Row>
                <Col><h1 id="brandSlogan">Breakfast made easy!</h1></Col>
            </Row>
        </Container>
    )
}

export default BannerPreview;