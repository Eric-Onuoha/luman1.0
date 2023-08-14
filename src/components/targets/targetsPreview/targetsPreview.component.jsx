import "./targetsPreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import { GetMonthlyBagPerDay, GetMonthlyDTCSales, GetMonthlySRSales } from "../../../utils/getMonthlyTargets";

import SingleDisplay from "../../singleDisplay/singleDisplay.component";
import SkewDisplay from "../../skewDisplay/skewDisplay.component";
import OperationsMenu from "../../operationsMenu/operationsMenu.component";

const TargetsPreview = () => {
    const monthDTC = GetMonthlyDTCSales();
    const monthDTCTarget = {"family": 360, "mini":90, "small": 0};
    const monthSR = GetMonthlySRSales();
    const monthSRTarget = {"family": 1320, "mini":600, "small": 0};
    const bagsPerDay = GetMonthlyBagPerDay();
    const targetBagsPerDay = 1;

    return(
        <Container id="targetsPreviewComponent" fluid="true">
            {/* <OperationsMenu></OperationsMenu> */}
            <h4>Bags/day Monthly Target</h4>
            <Row id="weeklyTargets">
                <SingleDisplay indicator={bagsPerDay.bagsperday - targetBagsPerDay} heading = {"Current Bag(s) per day"} data={bagsPerDay.bagsperday.toFixed(2) + " of " + targetBagsPerDay}></SingleDisplay>
                <SingleDisplay indicator={"noIndicator"} heading = {"Family Bag(s) per day"} data={bagsPerDay.familybpd.toFixed(2)}></SingleDisplay>
                <SingleDisplay indicator={"noIndicator"} heading = {"Mini Bag(s) per day"} data={bagsPerDay.minibpd.toFixed(2)}></SingleDisplay>
            </Row>

            <h4>Sales Rep Monthly Targets</h4>
            <Row id="weeklyTargets">
                {    Object.keys(monthSR).map((salesRep) => (
                        <SkewDisplay key={salesRep} heading={salesRep.replace("_", " ")} skewData={monthSR[salesRep]}></SkewDisplay>
                    ))
                }
                <SkewDisplay indicator={"noIndicator"} heading={"Sales Reps Target this Month"} skewData={monthSRTarget}></SkewDisplay>
            </Row>

            
            <h4>DTC Monthly Targets</h4>
            <Row id="weeklyTargets">
                <SkewDisplay heading={"DTC Sales this month"} skewData = {monthDTC.salesdtc}></SkewDisplay>
                <SkewDisplay heading={"DTC Target this month"} skewData = {monthDTCTarget}></SkewDisplay>
            </Row>
        </Container>
    )
};

export default TargetsPreview;