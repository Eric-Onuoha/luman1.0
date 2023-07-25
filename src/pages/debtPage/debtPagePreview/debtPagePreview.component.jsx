import "./debtPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import DebtEntry from "../../../components/debtEntry/debtEntry.component";
import { getTodaysPlainDate } from "../../../utils/getMonthAndDay";
import { useState } from "react";

const DebtPagePreview = () => {

    const [debtForm, setDebtForm] = useState([]);
    const {debtor, description, newDebt, paidAmount} = debtForm;
    
    const debtFormSubmit = (event) => {
        event.preventDefault();
        if (debtForm.length !== 0){

            try{
                // addCollectionAndDocuments("Products", date, ProductFormat);
                // dispatch(addExpense({newExpense, currentDate}));
            } catch (err){
                alert("Something went wrong, please refresh and try again" & err);
            }
        }
    }

    const debtFormChange = (event) => {
        const {name, value} = event.target;
        setDebtForm({...debtForm, [name]: value});
    }

    return(
        <Container id="debtPagePreviewComponent" fluid="true">
            <OperationsMenu menu = "Expense"></OperationsMenu>
            <h4>Debt for: {getTodaysPlainDate()}</h4>

            <form onChange={debtFormChange} onSubmit={debtFormSubmit}>
                <Row id="debtRecords">
                    <DebtEntry></DebtEntry>
                </Row>
                <button type="submit">Update Debt Records</button>
            </form>
        </Container>
    )
}; export default DebtPagePreview;