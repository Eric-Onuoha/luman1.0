import "./stockPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import StockEntry from "../../../components/stockEntry/stockEntry.component";

const StockPagePreview = () => {
    return(
        <Container id="stockPagePreviewComponent" fluid="true">
            <OperationsMenu menu = "stock"></OperationsMenu>
            <form>
                <h4>Debt for: <select name="stockDate"> {/* make green when current day */}
                    <option value="dat1">3rd July 2023</option>
                    <option value="dat1">Date 1</option>
                    <option value="dat1">Date 1</option>
                </select></h4>
                <Row id="stockRecords">
                    <StockEntry></StockEntry>
                </Row>
            </form>
        </Container>
    )
}; export default StockPagePreview;