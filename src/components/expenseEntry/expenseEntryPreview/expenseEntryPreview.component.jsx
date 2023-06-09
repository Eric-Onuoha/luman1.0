import "./expenseEntryPreview.styles.scss";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";

import AddRow from "../../../assets/images/add.png";
import DeleteRow from "../../../assets/images/remove.png";

const ExpenseEntryPreview = () => {
    return(
        <Col className="expenseEntry col-12">
            <Row id="expenses">
            <img title="Delete Expense" src={DeleteRow}/>
                <h4>Item - <input name="familySalesRep" type="text" /></h4>
                <h4>Quantity - <input type="text" /></h4>
                <h4>Category - <select name="category">
                        <option value="Ingridient">Ingridient</option>
                        <option value="Taxes">Taxes</option>
                        <option value="Operations">Operations</option>
                        <option value="Others">Others</option>
                    </select></h4>
                <h4>Amount - <input type="text" id="amount" /></h4>
                <h4>Payment Method - <select name="paymentBy">
                        <option value="Cash">Cash</option>
                        <option value="Bank">Bank</option>
                        <option value="External">External</option>
                    </select></h4>
                <img title="Add another expense" src={AddRow}/>
             </Row>
        </Col>
    )
}; export default ExpenseEntryPreview;