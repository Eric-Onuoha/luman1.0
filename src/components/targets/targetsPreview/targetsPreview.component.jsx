import "./targetsPreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import { GetMonthlyBagPerDay, GetMonthlyDTCSales, GetMonthlySRSales } from "../../../utils/getMonthlyTargets";
import { Fragment } from "react";

import SingleDisplay from "../../singleDisplay/singleDisplay.component";
import SkewDisplay from "../../skewDisplay/skewDisplay.component";
import OperationsMenu from "../../operationsMenu/operationsMenu.component";
import { CalculateTotalDebt } from "../../../utils/getDebt";
import { GetExpenseByCategory } from "../../../utils/getExpense";

const TargetsPreview = () => {
    const monthDTC = GetMonthlyDTCSales();
    const monthDTCTarget = 15;

    const monthSR = GetMonthlySRSales();
    const monthSRTarget = {"family": 6000, "mini":0, "small": 0};
    const averageSRSalesTarget = (monthSRTarget.family/2);

    const bagsPerDay = GetMonthlyBagPerDay();
    const targetBagsPerDay = 2.00;

    const totalDebt = CalculateTotalDebt();
    const hightestDebtTarget = 85000;

    const categoryExpenses = GetExpenseByCategory();

    return(
        <Container id="targetsPreviewComponent" fluid="true">
            {/* <OperationsMenu></OperationsMenu> */}
            <Row id="weeklyTargets">
                {bagsPerDay.bagsperday.length != 0 ? (
                    <SingleDisplay indicator={bagsPerDay.bagsperday - targetBagsPerDay} heading = {"Current Bag(s) Per Day"} data={bagsPerDay.bagsperday.toFixed(2) + " of " + targetBagsPerDay.toFixed(2)}></SingleDisplay>
                ) : (
                    <SingleDisplay indicator={-10} heading={"Current Bag(s) Per Day"} data={"loading ..."}></SingleDisplay>
                )}
                
                {monthDTC.salesdtc.family ? (
                    <>
                    {isFinite((monthDTC.salesdtc.family/bagsPerDay.activeDays)) ? (
                            <SingleDisplay indicator={(monthDTC.salesdtc.family/bagsPerDay.activeDays) + 1 - monthDTCTarget} heading = {"Average DTC Sales Per Day"} data={(monthDTC.salesdtc.family/bagsPerDay.activeDays).toFixed(0) + ` of ${monthDTCTarget.toFixed(0)} / day`}></SingleDisplay>
                        ) : (
                            <SingleDisplay indicator={ - monthDTCTarget} heading = {"Average DTC Sales Per Day"} data={0 + ` of ${monthDTCTarget.toFixed(0)} / day`}></SingleDisplay>
                        )}
                    </>
                ) : (
                    <SingleDisplay indicator={-10} heading={"Average DTC Sales Per Day"} data={"loading ..."}></SingleDisplay>
                )}

                {totalDebt ? (
                    <SingleDisplay indicator={hightestDebtTarget + totalDebt} heading = {"Total Company Debt" + ` (Target - ${hightestDebtTarget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})`} data={totalDebt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                ) : (
                    <SingleDisplay indicator={-10} heading={"Total Company Debt" + ` (Target - ${hightestDebtTarget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})`} data={"loading..."}></SingleDisplay>
                )}
            </Row>

            <h4>Sales Rep Average Sales Per Day</h4>
            <Row id="weeklyTargets">
                {Object.keys(monthSR).length !== 0 ? (
                    <>
                        {   Object.keys(monthSR).map((salesRep) => (
                            <>
                                {isFinite(monthSR[salesRep]["family"]/bagsPerDay.activeDays) ? (
                                    <>
                                    <SingleDisplay key={salesRep} indicator={monthSR[salesRep]["family"] - averageSRSalesTarget} heading = {salesRep.replace("_", " ")} data={(monthSR[salesRep]["family"]).toFixed(0) +  ` or ${((monthSR[salesRep]["family"]).toFixed(0) / bagsPerDay.activeDays).toFixed(0)} per day`}></SingleDisplay>
                                    </>
                                ) : (
                                    <>
                                    <SingleDisplay key={salesRep} indicator={ - averageSRSalesTarget} heading = {salesRep.replace("_", " ")} data={0 +  ` of ${averageSRSalesTarget.toFixed(0)} / day`}></SingleDisplay>
                                    </>
                                )}
                            </>
                            ))
                        }
                    </>
                ) : (
                    <>
                        <SingleDisplay indicator={-10} data={"loading ..."}></SingleDisplay>
                    </>
                )}

            </Row>

            
            <h4>Expense List By Category</h4>
            <Row id="debtTarget">
                {Object.keys(categoryExpenses).length !== 0 ? (
                    <SkewDisplay indicator={"noIndicator"} skewData={categoryExpenses}></SkewDisplay>
                ) : (
                    <SingleDisplay indicator={-10} data={"loading ..."}></SingleDisplay>
                )}
            </Row>
        </Container>
    )
};

export default TargetsPreview;