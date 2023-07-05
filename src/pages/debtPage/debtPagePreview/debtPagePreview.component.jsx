import "./debtPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import DebtEntry from "../../../components/debtEntry/debtEntry.component";

const DebtPagePreview = () => {
    return(
        <Container id="debtPagePreviewComponent" fluid="true">
            <OperationsMenu menu = "Expense"></OperationsMenu>
            {/* <form> */}
                <h4>Debt for: <select name="ExpenseDate"> {/* make green when current day */}
                    <option value="dat1">3rd July 2023</option>
                    <option value="dat1">Date 1</option>
                    <option value="dat1">Date 1</option>
                </select></h4>
                <Row id="debtRecords">
                    <DebtEntry></DebtEntry>

                </Row>
            {/* </form> */}
        </Container>
    )
}; export default DebtPagePreview;