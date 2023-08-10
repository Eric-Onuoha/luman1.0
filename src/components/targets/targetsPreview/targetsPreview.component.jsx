import "./targetsPreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import { GetMonthlyDTCSales, GetMonthlySRSales } from "../../../utils/getMonthlyTargets";

import SingleDisplay from "../../singleDisplay/singleDisplay.component";
import SkewDisplay from "../../skewDisplay/skewDisplay.component";
import OperationsMenu from "../../operationsMenu/operationsMenu.component";

const TargetsPreview = () => {
    const monthDTC = GetMonthlyDTCSales();
    const monthDTCTarget = {"family": 360, "mini":90, "small": 0};
    const monthSR = GetMonthlySRSales();
    const monthSRTarget = {"family": 1320, "mini":600, "small": 0};

    return(
        <Container id="targetsPreviewComponent" fluid="true">
            <OperationsMenu></OperationsMenu>
            <h4>Weekly Targets</h4>
            {/* <Row id="weeklyTargets">
                <SingleDisplay></SingleDisplay>
                <SingleDisplay></SingleDisplay>
                <SkewDisplay></SkewDisplay>
            </Row> */}

            <h4>Sales Rep Monthly Targets</h4>
            <Row id="weeklyTargets">
                {    Object.keys(monthSR).map((salesRep) => (
                        <SkewDisplay key={salesRep} heading={salesRep.replace("_", " ")} skewData={monthSR[salesRep]}></SkewDisplay>
                    ))
                }
                <SkewDisplay heading={"Sales Reps Target for the Month"} skewData={monthSRTarget}></SkewDisplay>
            </Row>

            
            <h4>DTC Monthly Targets</h4>
            <Row id="weeklyTargets">
                <SkewDisplay heading={"DTC Sales this month"} skewData = {monthDTC}></SkewDisplay>
                <SkewDisplay heading={"DTC Target this month"} skewData = {monthDTCTarget}></SkewDisplay>
            </Row>
        </Container>
    )
};

export default TargetsPreview;