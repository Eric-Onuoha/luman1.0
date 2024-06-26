import "./managementPagePreview.styles.scss";
import { Container, Row } from "bootstrap-4-react/lib/components/layout";

import { useSelector } from "react-redux";
import SingleDisplay from "../../../components/singleDisplay/singleDisplay.component";
import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import { getCostPerUnit, getQuantitySold, getRevenueByMonth, getCurrentAvailableCash, getCashFlowDifference } from "../../../utils/getFinancialSummary";
import { GetMonthlyBagPerDay } from "../../../utils/getMonthlyTargets";
import { getTotalExpenseByMonth, getIngredientExpenseByMonth } from "../../../utils/getExpense";
import { useState } from "react";
import { getCurrentYear } from "../../../utils/getMonthAndDay";

const currentYear = getCurrentYear();

const ManagementPagePreview = () => {
    const [month, setMonth] = useState();
    const [year, setYear] = useState();

    const changeMonth = (e) => {
        setMonth(e.target.value);
    }

    const changeYear = (e) => {
        setYear(e.target.value);
    }

    const businessReport = useSelector((state) => state.operationsMenu.operationsMenu) || "";

    const grossRevenue = getRevenueByMonth(year, month);
    const costPerUnit = getCostPerUnit(year, month);
    const bagsPerDay = GetMonthlyBagPerDay(month);
    // const quantitySold = (bagsPerDay.bagsperday * 102 * bagsPerDay.activeDays);
    const quantitySold = getQuantitySold(year, month);
    const grossExpense = (costPerUnit * quantitySold).toFixed(0);
    const averageSalesPrice = (grossRevenue / quantitySold);
    const averagProfitPerUnit = (averageSalesPrice - costPerUnit);
    const grossProfit = (grossRevenue - grossExpense)
    const netExpense = getTotalExpenseByMonth(year, month);
    const netProfitOrLoss = ((grossRevenue) - (parseInt(grossExpense) + parseInt(netExpense)));
    const ingredientCost = getIngredientExpenseByMonth(year, month);

    const currentAvailableCash = getCurrentAvailableCash();
    const cashFlowDiff = getCashFlowDifference(year, month)/bagsPerDay.activeDays;

    const currentProfitPercentage = ((100 * averagProfitPerUnit) / averageSalesPrice);
    const bestProfitPerUnit = ((averageSalesPrice * 40) / 100)
    const bestPrice = (bestProfitPerUnit - (averagProfitPerUnit)) + averageSalesPrice;

    return(
        <Container id="expensePagePreviewComponent" fluid="true">
            <OperationsMenu menu = {["Income_Statement", "Cash_Flow", "Estimates", "Variables"]}></OperationsMenu>
                <Row>
                    <form>
                        <span>Get Income Statement for: </span>
                        <select name="currentMonth" id="month" defaultValue={"default"} onChange={changeMonth}> 
                            <option value="default" disabled = {true}>Select Month</option>
                            <option value="january">January</option> 
                            <option value="february">February</option> 
                            <option value="march">March</option> 
                            <option value="april">April</option> 
                            <option value="may">May</option> 
                            <option value="june">June</option> 
                            <option value="july">July</option> 
                            <option value="august">August</option> 
                            <option value="september">September</option> 
                            <option value="october">October</option> 
                            <option value="november">November</option> 
                            <option value="december">December</option> 
                        </select>
                    </form>

                    <form>                   
                        {/* <span>Get Income Statement for: </span> */}
                        <select name="currentYear" id="year" defaultValue={"default"} onChange={changeYear}> 
                            <option value="default" disabled = {true}>Select Year</option>
                            <option value="2023">2023</option> 
                            <option value="2024">2024</option> 
                        </select>
                    </form>
                </Row>
                <br />
                {businessReport == "Income_Statement" ? (
                    <>
                    <Row>
                        <SingleDisplay heading={"Total Sales (Gross Revenue)"} data={"NGN " + grossRevenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                        <SingleDisplay heading={"Est. Cost of Production (Gross Expense)"} data={"NGN " + grossExpense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                        <SingleDisplay heading={"Actual Cost of Production (Gross Expense)"} data={"NGN " + ingredientCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                        {/* <SingleDisplay heading={"Est. Cash Flow"} data={1}></SingleDisplay> */}
                    </Row>
                    <br />
                    <Row>
                        <SingleDisplay heading={"Profit Before Net Expense (Gross Profit)"} data={"NGN " + grossProfit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                        <SingleDisplay heading={"Operational Expense (Net Expense)"} data={"NGN " + netExpense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                        <SingleDisplay indicator={netProfitOrLoss} heading={"Actual Profit (Net Income)"} data={"NGN " + netProfitOrLoss.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                        <SingleDisplay heading={"Quantity Sold"} data={quantitySold.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                    </Row>
                    <hr />
                    <p>Price Analysis</p>
                    <hr />
                    <Row>
                        <SingleDisplay heading={"Average Sales Price"} data={"NGN " + averageSalesPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                        <SingleDisplay heading={"Cost Per Unit"} data={"NGN " + costPerUnit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                        <SingleDisplay heading={"Profit Per Unit"} data={"NGN " + averagProfitPerUnit.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                        {/* <SingleDisplay heading={"Bags Per Day"} data={bagsPerDay.bagsperday}></SingleDisplay> */}
                    </Row>
                    <br />
                    <Row>
                        <SingleDisplay heading={"Current Profit Percentage"} data={currentProfitPercentage.toFixed(2) + "%"}></SingleDisplay>
                        <SingleDisplay heading={"Best Price"} data={"NGN " + bestPrice.toFixed(2)}></SingleDisplay>
                        <SingleDisplay heading={"Best Profit Per Unit"} data={"NGN " + bestProfitPerUnit.toFixed(2)}></SingleDisplay>
                    </Row>
                    </>
                ) : (
                    <>
                    <Row>
                        <SingleDisplay heading={"Cash Flow"} data={"NGN " + cashFlowDiff.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                        <SingleDisplay heading={"Total Avaliable Cash"} data={"NGN " + currentAvailableCash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                    </Row>
                    <br />
                    <Row>
                        
                    </Row>
                    </>
                )}

        </Container>
    )
}; export default ManagementPagePreview;