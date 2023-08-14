import "./cashPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import CashAccount from "../../../components/cashAccount/cashAccount.component";
import { getTodaysPlainDate } from "../../../utils/getMonthAndDay";

const CashPagePreview = () => {
    return(
        <Container id="cashPagePreviewComponent" fluid="true">
            <OperationsMenu menu = {["Update Accounts", "View Accounts"]}></OperationsMenu>
                
                <h4>Cash Account for: {getTodaysPlainDate()}</h4>
                <Row id="cashRecords">
                    <CashAccount></CashAccount>
                </Row>
        </Container>
    )
}; export default CashPagePreview;