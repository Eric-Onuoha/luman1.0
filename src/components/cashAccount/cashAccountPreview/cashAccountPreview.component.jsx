import "./cashAccountPreview.styles.scss";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";
import { useState } from "react";
import { useDispatch } from "react-redux";


import { getCurrentAmount} from "../../../utils/getAmount";
import { GetCurrentPaidDebt, GetCurrentDaysDebt } from "../../../utils/getDebt";
import { GetCurrentDaysExpense, GetCurrentDaysTotalExpense } from "../../../utils/getExpense";
import { getCurrentDateToUpdate, getDate } from "../../../utils/getMonthAndDay";
import { GetPreviousCashAtHand, GetPreviousCashFlow } from "../../../utils/getCashAtHand";

import { addAccount } from "../../../reduxStore/reducers/account.reducer";

const CashAccountPreview = () => {
    const dispatch = useDispatch();

    const salesAmount = getCurrentAmount();
    const paidDebt = GetCurrentPaidDebt();
    const newDebt = GetCurrentDaysDebt();
    const totalExpense = GetCurrentDaysExpense();
    const totalExpenseIncludingBankExpenses = GetCurrentDaysTotalExpense();
    const previousCash = GetPreviousCashAtHand();
    const previousCashFlow = GetPreviousCashFlow();

    const [accountForm, setAccountForm] = useState([]);
    const {bankDeposit, cah, comment} = accountForm;
    const todaysDate = getCurrentDateToUpdate();
    const currentDate = getDate(todaysDate);

    const calculateExpectedCash = (salesAmount, paidDebt, previousCash, newDebt, totalExpense, bankDeposit) => {
        const parsedPreviousCash = (previousCash && parseInt(previousCash.replace(',', ''))) || 0;
        const parsedBankDeposit = parseInt(bankDeposit) || 0;
    
        const expectedCash = (
            (parseInt(salesAmount) + parseInt(paidDebt) + parsedPreviousCash) -
            (parseInt(newDebt) + parseInt(totalExpense) + parsedBankDeposit)
        ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        return expectedCash;
    };
    
    const expectedCash = calculateExpectedCash(salesAmount, paidDebt, previousCash, newDebt, totalExpense, bankDeposit);

    const calculateCashFlow = (salesAmount, paidDebt, newDebt, totalExpenseIncludingBankExpenses) => {
        const parsedPreviousCashFlow = (previousCashFlow && parseInt(previousCashFlow.replace(',', ''))) || 0;
    
        const cashFlow = (
            (parseInt(salesAmount) + parseInt(paidDebt) + parsedPreviousCashFlow) -
            (parseInt(newDebt) + parseInt(totalExpenseIncludingBankExpenses))
        ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        return cashFlow;
    };

    const currentCashFLow = calculateCashFlow(salesAmount, paidDebt, newDebt, totalExpenseIncludingBankExpenses);

    const calculateCashFlowDifference = (salesAmount, paidDebt, newDebt, totalExpenseIncludingBankExpenses) => {
    
        const cashFlowDiff = (
            (parseInt(salesAmount) + parseInt(paidDebt)) -
            (parseInt(newDebt) + parseInt(totalExpenseIncludingBankExpenses))
        ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        return cashFlowDiff;
    };
    
    const cashFlowDifference = calculateCashFlowDifference(salesAmount, paidDebt, newDebt, totalExpenseIncludingBankExpenses);

    const accountFormChange = (event) => {
        const {name, value} = event.target;
        setAccountForm({...accountForm, [name]: value});
    }

    const accountFormSubmit = (event) => {
        event.preventDefault();
        if(accountForm.length !== 0){
            const updatedAccount = {
                ...accountForm, 
                salesAmount, paidDebt, newDebt, totalExpense, expectedCash, currentCashFLow, cashFlowDifference
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