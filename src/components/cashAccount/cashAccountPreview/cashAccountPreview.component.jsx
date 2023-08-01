import "./cashAccountPreview.styles.scss";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";

// import { getCurrentFamilyAmount } from "../../../utils/getAmount";
import { getCurrentAmount} from "../../../utils/getAmount";
import { GetCurrentPaidDebt, GetCurrentDaysDebt } from "../../../utils/getDebt";
import { GetCurrentDaysExpense } from "../../../utils/getExpense";

const CashAccountPreview = () => {
    const daysSalesAmount = getCurrentAmount().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const paidDebt = GetCurrentPaidDebt();
    const newDebt = GetCurrentDaysDebt();
    const totalDebt = GetCurrentDaysExpense();

    return(
        <Col className="cashEntry col-12">
            <Row id="cashRecords">
                <Col>
                    <h4>Sales Amount <input type="text" disabled = {true} value={daysSalesAmount}/></h4>               
                    <h4>Paid Debt <input type="text" disabled = {true} value={paidDebt}/></h4>
                    <h4>New Debt <input type="text" disabled = {true} value={newDebt}/></h4>  
                    <h4>Expense Cost <input type="text" disabled = {true} value={totalDebt}/></h4>  
                    <h4>Expected Cash <input type="text" disabled = {true}/></h4>  
                </Col>

                <Col>
                    <h4>Bank Deposit <input type="text" /></h4>          
                    <h4>Cash in hand <input type="text"/></h4>      
                    <h4>Comments <textarea rows={6} cols={40} type="text" id="amount" /></h4>                
                </Col>

             </Row>
        </Col>
    )
}; export default CashAccountPreview;