import "./targetsPreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import { GetMonthlyBagPerDay, GetMonthlyDTCSales, GetMonthlySRSales } from "../../../utils/getMonthlyTargets";

import SingleDisplay from "../../singleDisplay/singleDisplay.component";
import SkewDisplay from "../../skewDisplay/skewDisplay.component";
import OperationsMenu from "../../operationsMenu/operationsMenu.component";
import { CalculateTotalDebt } from "../../../utils/getDebt";
import { GetExpenseByCategory } from "../../../utils/getExpense";

const TargetsPreview = () => {
    const monthDTC = GetMonthlyDTCSales();
    const monthDTCTarget = 22;

    const monthSR = GetMonthlySRSales();
    const monthSRTarget = {"family": 7200, "mini":0, "small": 0};
    const averageSRSalesTarget = ((monthSRTarget.family/2)/28)

    const bagsPerDay = GetMonthlyBagPerDay();
    const targetBagsPerDay = 2.60;

    const totalDebt = CalculateTotalDebt();
    const hightestDebtTarget = 60000;

    const categoryExpenses = GetExpenseByCategory();
    // console.log(categoryExpenses);

    return(
        <Container id="targetsPreviewComponent" fluid="true">
            {/* <OperationsMenu></OperationsMenu> */}
            <Row id="weeklyTargets">
                <SingleDisplay indicator={bagsPerDay.bagsperday - targetBagsPerDay} heading = {"Current Bag(s) Per Day"} data={bagsPerDay.bagsperday.toFixed(2) + " of " + targetBagsPerDay.toFixed(2)}></SingleDisplay>
                <SingleDisplay indicator={(monthDTC.salesdtc.family/bagsPerDay.activeDays) - monthDTCTarget} heading = {"Average DTC Sales Per Day"} data={(monthDTC.salesdtc.family/bagsPerDay.activeDays).toFixed(0) + ` of ${monthDTCTarget.toFixed(0)} / day`}></SingleDisplay>
                <SingleDisplay indicator={hightestDebtTarget + totalDebt} heading = {"Total Company Debt" + ` (Target - ${hightestDebtTarget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})`} data={totalDebt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
            </Row>

            <h4>Sales Rep Average Sales Per Day</h4>
            <Row id="weeklyTargets">
                {    Object.keys(monthSR).map((salesRep) => (
                        <SingleDisplay key={salesRep} indicator={(monthSR[salesRep]["family"]/bagsPerDay.activeDays) - averageSRSalesTarget} heading = {salesRep.replace("_", " ")} data={(monthSR[salesRep]["family"]/bagsPerDay.activeDays).toFixed(0) +  ` of ${averageSRSalesTarget.toFixed(0)} / day`}></SingleDisplay>
                    ))
                }
            </Row>

            
            <h4>Expense List By Category</h4>
            <Row id="debtTarget">
                <SkewDisplay indicator={"noIndicator"} skewData={categoryExpenses}></SkewDisplay>
            </Row>
        </Container>
    )
};

export default TargetsPreview;