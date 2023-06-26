import "./debtEntryPreview.styles.scss";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";

import AddRow from "../../../assets/images/add.png";
import DeleteRow from "../../../assets/images/remove.png";

const DebtEntryPreview = () => {
    return(
        <Col className="debtEntry col-12">
            <Row id="debt">
            <img title="Delete debt" src={DeleteRow}/>
                <h4>Debtor - <select name="category">
                        <option value="Ingridient">Bolanle Ajayi</option>
                        <option value="Taxes">Ifeanyi Timothy</option>
                        <option value="Operations">Haruna Sanni</option>
                    </select>
                </h4>
                <h4>Description - <input type="text" /></h4>
                <h4>New Debt (NGN) - <input name="familySalesRep" type="text" /></h4>
                <h4>Paid Debt (NGN) - <input type="text" id="amount" /></h4>
                <img title="Add another debt" src={AddRow}/>
             </Row>
        </Col>
    )
}; export default DebtEntryPreview;