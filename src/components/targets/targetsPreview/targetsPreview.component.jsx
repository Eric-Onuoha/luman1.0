import "./targetsPreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";

import SingleDisplay from "../../singleDisplay/singleDisplay.component";
import SkewDisplay from "../../skewDisplay/skewDisplay.component";

const TargetsPreview = () => {
    return(
        <Container id="targetsPreviewComponent" fluid="true">
            <h4>Weekly Targets</h4>
            <Row id="weeklyTargets">
                <SingleDisplay></SingleDisplay>
                <SingleDisplay></SingleDisplay>
                <SkewDisplay></SkewDisplay>
            </Row>

            <h4>Sales Rep Targets</h4>
            <Row id="weeklyTargets">
                <SkewDisplay></SkewDisplay>
                <SkewDisplay></SkewDisplay>
                <SkewDisplay></SkewDisplay>
                <SkewDisplay></SkewDisplay>
            </Row>

            
            <h4>Monthly Targets</h4>
            <Row id="weeklyTargets">
                <SkewDisplay></SkewDisplay>
                <SkewDisplay></SkewDisplay>
            </Row>
        </Container>
    )
};

export default TargetsPreview;