import "./salesPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";

import SingleEntry from "../../../components/singleEntry/singleEntry.component";
import SkewEntry from "../../../components/skewEntry/skewEntry.component";
import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";

const SalesPagePreview = () => {

    const handleChange = (e) => {
        console.log(e.target)
    }

    return(
        <Container id="salesPagePreviewComponent" fluid="true">
            <OperationsMenu menu = "Sales"></OperationsMenu>
            <form onChange={handleChange}>
                <h4>Direct to Consumer (DTC) sales for: <select name="salesDate"> {/* make green when current day */}
                    <option value="dat1">2nd July 2023</option>
                    <option value="dat1">Date 1</option>
                    <option value="dat1">Date 1</option>
                </select></h4>
                <Row id="salesRecords">
                    <SingleEntry type = "Family"></SingleEntry>
                    <SingleEntry type = "Mini"></SingleEntry>
                    <SingleEntry type = "Small"></SingleEntry>
                </Row>
                <h4>Sales Rep - Company Distributors</h4>
                <Row id="salesRecords">
                    <SkewEntry></SkewEntry>
                    <SkewEntry></SkewEntry>
                    <SkewEntry></SkewEntry>
                </Row>
            </form>
        </Container>
    )
}; export default SalesPagePreview;