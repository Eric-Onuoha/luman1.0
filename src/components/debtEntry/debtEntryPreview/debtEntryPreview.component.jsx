import "./debtEntryPreview.styles.scss";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";

const DebtEntryPreview = ({Partners}) => {
    return(
        <Col className="debtEntry col-12">
            <Row id="debt">
                <h4>Debtor - 
                    <select name="category" defaultValue={"default"}>
                        <option value="default" disabled = {true}>Select Debtor</option>
                        {Partners.map((partner) => (
                            <option key={partner} value={partner}>{partner}</option>
                        ))}
                    </select>
                </h4>
                <h4>Description - <input type="text" /></h4>
                <h4>New Debt (NGN) - <input name="familySalesRep" type="text" /></h4>
                <h4>Paid Debt (NGN) - <input type="text" id="amount" /></h4>
             </Row>
        </Col>
    )
}; export default DebtEntryPreview;