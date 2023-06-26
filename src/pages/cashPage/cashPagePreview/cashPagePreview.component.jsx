import "./cashPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import CashAccount from "../../../components/cashAccount/cashAccount.component";

const CashPagePreview = () => {
    return(
        <Container id="cashPagePreviewComponent" fluid="true">
            <OperationsMenu menu = "stock"></OperationsMenu>
            <form>
                <h4>Debt for: <select name="cashDate"> {/* make green when current day */}
                    <option value="dat1">3rd July 2023</option>
                    <option value="dat1">Date 1</option>
                    <option value="dat1">Date 1</option>
                </select></h4>
                <Row id="cashRecords">
                    <CashAccount></CashAccount>
                </Row>
            </form>
        </Container>
    )
}; export default CashPagePreview;