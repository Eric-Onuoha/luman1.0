import "./expensePagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import ExpenseEntry from "../../../components/expenseEntry/expenseEntry.component";

const ExpensePagePreview = () => {
    return(
        <Container id="expensePagePreviewComponent" fluid="true">
            <OperationsMenu menu = "Expense"></OperationsMenu>
            <form>
                <h4>Expenses for: <select name="ExpenseDate"> {/* make green when current day */}
                    <option value="dat1">2nd July 2023</option>
                    <option value="dat1">Date 1</option>
                    <option value="dat1">Date 1</option>
                </select></h4>
                <Row id="expenseRecords">
                    <ExpenseEntry></ExpenseEntry>
                </Row>
            </form>
        </Container>
    )
}; export default ExpensePagePreview;