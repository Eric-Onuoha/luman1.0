import "./targetsPreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import { GetMonthlyDTCSales } from "../../../utils/getMonthlyTargets";

import SingleDisplay from "../../singleDisplay/singleDisplay.component";
import SkewDisplay from "../../skewDisplay/skewDisplay.component";
import OperationsMenu from "../../operationsMenu/operationsMenu.component";

const TargetsPreview = () => {
    const monthDTC =  GetMonthlyDTCSales();
    const monthTarget = {family: 350, mini:90, small: 0};

    return(
        <Container id="targetsPreviewComponent" fluid="true">
            <OperationsMenu></OperationsMenu>
            <h4>Weekly Targets</h4>
            {/* <Row id="weeklyTargets">
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
            </Row> */}

            
            <h4>Monthly Targets</h4>
            <Row id="weeklyTargets">
                <SkewDisplay heading={"DTC Sales this month"} skewData = {monthDTC}></SkewDisplay>
                <SkewDisplay heading={"DTC Target this month"} skewData = {monthTarget}></SkewDisplay>
            </Row>
        </Container>
    )
};

export default TargetsPreview;