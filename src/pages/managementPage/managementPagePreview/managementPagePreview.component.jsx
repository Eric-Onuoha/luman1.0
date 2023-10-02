import "./managementPagePreview.styles.scss";
import { Container, Row } from "bootstrap-4-react/lib/components/layout";

import SingleDisplay from "../../../components/singleDisplay/singleDisplay.component";
import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import { getCostPerUnit, getRevenueByMonth } from "../../../utils/getFinancialSummary";
import { GetMonthlyBagPerDay } from "../../../utils/getMonthlyTargets";
import { getTotalExpenseByMonth } from "../../../utils/getExpense";

const ManagementPagePreview = () => {
    const grossRevenue = getRevenueByMonth("september");
    const costPerUnit = getCostPerUnit("september");
    const bagsPerDay = GetMonthlyBagPerDay("september");
    const grossExpense = (costPerUnit * bagsPerDay.bagsperday * 102 * 26).toFixed(0);
    const netExpense = getTotalExpenseByMonth("september");
    const netProfitOrLoss = (parseInt(grossRevenue) - (parseInt(grossExpense) + parseInt(netExpense)))

    return(
        <Container id="expensePagePreviewComponent" fluid="true">
            <OperationsMenu menu = {["Financial Summary", "Performnce Indicators"]}></OperationsMenu>
                <Row>
                    <SingleDisplay heading={"Gross Revenue"} data={"NGN " + grossRevenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                    <SingleDisplay heading={"Gross Expense"} data={"NGN " + grossExpense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                    <SingleDisplay heading={"Cost Per Unit"} data={"NGN " + costPerUnit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                </Row>
                <br />
                <br />
                <Row>
                    <SingleDisplay heading={"Net Expense"} data={"NGN " + netExpense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                    <SingleDisplay heading={"Net Profit/Loss"} data={"NGN " + netProfitOrLoss.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}></SingleDisplay>
                </Row>
        </Container>
    )
}; export default ManagementPagePreview;