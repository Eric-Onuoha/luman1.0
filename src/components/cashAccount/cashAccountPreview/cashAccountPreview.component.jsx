import "./cashAccountPreview.styles.scss";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";
import { useState } from "react";
import { useDispatch } from "react-redux";


import { getCurrentAmount} from "../../../utils/getAmount";
import { GetCurrentPaidDebt, GetCurrentDaysDebt } from "../../../utils/getDebt";
import { GetCurrentDaysExpense } from "../../../utils/getExpense";
import { getTodaysDate } from "../../../utils/getMonthAndDay";
import { GetPreviousCashAtHand } from "../../../utils/getCashAtHand";

import { addAccount } from "../../../reduxStore/reducers/account.reducer";

const CashAccountPreview = () => {
    const dispatch = useDispatch();

    const salesAmount = getCurrentAmount();
    const paidDebt = GetCurrentPaidDebt();
    const newDebt = GetCurrentDaysDebt();
    const totalExpense = GetCurrentDaysExpense();
    const previousCash = GetPreviousCashAtHand();

    const [accountForm, setAccountForm] = useState([]);
    const {bankDeposit, cah, comment} = accountForm;
    const currentDate = getTodaysDate();

    console.log(salesAmount);

    const expectedCash = ((parseInt(salesAmount) + parseInt(paidDebt) + parseInt(previousCash.replace(',', ''))) - (parseInt(newDebt) + parseInt(totalExpense) + parseInt(bankDeposit))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(parseInt(previousCash));
    const accountFormChange = (event) => {
        const {name, value} = event.target;
        setAccountForm({...accountForm, [name]: value});
    }

    const accountFormSubmit = (event) => {
        event.preventDefault();
        if(accountForm.length !== 0){
            const updatedAccount = {
                ...accountForm, 
                salesAmount, paidDebt, newDebt, totalExpense, expectedCash
            }
            try{
                dispatch(addAccount({currentDate, updatedAccount}));
            } catch (err) {
                alert("Something went wrong, please refresh and try again" & err);
            }
        }
    }

    return(
        <Col className="cashEntry col-12">
            <form onChange={accountFormChange} onSubmit={accountFormSubmit}>
            <Row id="cashRecords">
                <Col>
                    <h4>Sales Amount <input type="text" disabled = {true} name="salesAmount" value={salesAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/></h4>               
                    <h4>Paid Debt <input type="text" disabled = {true} name="paidDebt" value={paidDebt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/></h4>
                    <h4>New Debt <input type="text" disabled = {true} name={newDebt} value={newDebt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/></h4>  
                    <h4>Expense Cost <input type="text" disabled = {true} name="expenseCost" value={totalExpense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/></h4>  
                    <h4>Expected Cash <input type="text" disabled = {true} name="expectedCash" value={expectedCash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/></h4>  
                </Col>

                <Col>
                    <h4>Bank Deposit <input type="text" name="bankDeposit" /></h4>          
                    <h4>Cash in hand <input type="text" name="cah"/></h4>      
                    <h4>Comments <textarea rows={6} cols={40} name="comment" type="text" id="amount" /></h4>                
                </Col>
             </Row>
             <button type="submit">Update Account Records</button>
             </form>
        </Col>
    )
}; export default CashAccountPreview;