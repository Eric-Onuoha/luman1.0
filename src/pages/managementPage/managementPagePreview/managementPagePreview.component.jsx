import "./managementPagePreview.styles.scss";
import { Container, Row } from "bootstrap-4-react/lib/components/layout";

import SingleDisplay from "../../../components/singleDisplay/singleDisplay.component";
import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import { getCostPerUnit, getQuantitySold, getRevenueByMonth, quantitySold } from "../../../utils/getFinancialSummary";
import { GetMonthlyBagPerDay } from "../../../utils/getMonthlyTargets";
import { getTotalExpenseByMonth, getIngredientExpenseByMonth } from "../../../utils/getExpense";
import { useState } from "react";

const ManagementPagePreview = () => {
    const [month, setMonth] = useState();

    const changeMonth = (e) => {
        setMonth(e.target.value);
    }

    const grossRevenue = getRevenueByMonth(month);

    //currentMonth is left empty to default to september until I fix the expense records to reflect the cost of 1 item for other months
    const costPerUnit = getCostPerUnit(month);
    const bagsPerDay = GetMonthlyBagPerDay(month);
    // const quantitySold = (bagsPerDay.bagsperday * 102 * bagsPerDay.activeDays);
    const quantitySold = getQuantitySold(month);
    const grossExpense = (costPerUnit * quantitySold).toFixed(0);
    const averageSalesPrice = (grossRevenue / quantitySold);
    const averagProfitPerUnit = (averageSalesPrice - costPerUnit);
    const grossProfit = (grossRevenue - grossExpense)
    const netExpense = getTotalExpenseByMonth(month);
    const netProfitOrLoss = ((grossRevenue) - (parseInt(grossExpense) + parseInt(netExpense)));
    const ingredientCost = getIngredientExpenseByMonth(month);

    return(
        <Container id="expensePagePreviewComponent" fluid="true">
            <OperationsMenu menu = {["Financial Summary", "Performnce Indicators"]}></OperationsMenu>
                {/* <Row> */}
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
                {/* </Row> */}
                <br />
                {month !== undefined ? (
                    <>
                    <Row>
                        <SingleDisplay heading={"Total Sales (Gross Revenue)"} data={"NGN " + grossRevenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                        <SingleDisplay heading={"Est. Cost of Production (Gross Expense)"} data={"NGN " + grossExpense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                        <SingleDisplay heading={"Actual Cost of Production (Gross Expense)"} data={"NGN " + ingredientCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                    </Row>
                    <br />
                    <Row>
                        <SingleDisplay heading={"Profit Before Net Expense (Gross Profit)"} data={"NGN " + grossProfit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                        <SingleDisplay heading={"Operational Expense (Net Expense)"} data={"NGN " + netExpense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                        <SingleDisplay heading={"Actual Profit (Net Income)"} data={"NGN " + netProfitOrLoss.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                        <SingleDisplay heading={"Quantity Sold"} data={quantitySold.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                    </Row>
                    <br />
                    <Row>
                    <SingleDisplay heading={"Average Sales Price"} data={"NGN " + averageSalesPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                    <SingleDisplay heading={"Cost Per Unit"} data={"NGN " + costPerUnit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                    <SingleDisplay heading={"Profit Per Unit"} data={"NGN " + averagProfitPerUnit.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                    </Row>
                    <br />
                    <Row>
                        
                    </Row>
                    </>
                ) : (
                    <div>
                        <h1>Select a month to analyze</h1>
                    </div>
                )}

        </Container>
    )
}; export default ManagementPagePreview;