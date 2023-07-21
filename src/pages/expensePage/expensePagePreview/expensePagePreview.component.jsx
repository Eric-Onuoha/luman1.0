import "./expensePagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import ExpenseEntry from "../../../components/expenseEntry/expenseEntry.component";
import { getPlainDate } from "../../../utils/getMonthAndDay";

const ExpensePagePreview = () => {
    const todaysDate = new Date();
    return(
        <Container id="expensePagePreviewComponent" fluid="true">
            <OperationsMenu menu = "Expense"></OperationsMenu>
                <h4>Expenses for {getPlainDate(todaysDate)}</h4>
                <form>
                <Row id="expenseRecords">
                    <ExpenseEntry></ExpenseEntry>
                </Row>
                <button type="submit">Update Expense for today</button>
            </form>
        </Container>
    )
}; export default ExpensePagePreview;