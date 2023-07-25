import "./debtPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import DebtEntry from "../../../components/debtEntry/debtEntry.component";
import { getTodaysPlainDate } from "../../../utils/getMonthAndDay";
import { useState } from "react";
import { getTodaysDate } from "../../../utils/getMonthAndDay";
import { useDispatch } from "react-redux";

import { addDebtRecord } from "../../../reduxStore/reducers/debt.reducer";

const DebtPagePreview = ({DebtorsDB}) => {
    const dispatch = useDispatch();
    const [debtForm, setDebtForm] = useState([]);
    const {debtor, description, newDebt, paidAmount} = debtForm;

    const debtFormSubmit = (event) => {
        event.preventDefault();
        if (debtForm.length !== 0){
            const currentDate = getTodaysDate();
            const debtorid = debtor.replace(/\s/g, "_");
            const oldDebtTotal = (DebtorsDB[debtorid] && parseInt(DebtorsDB[debtorid].totalDebt)) || 0;
            const debtAddition = (oldDebtTotal - parseInt(newDebt));
            const newDebtRecord = {
                ...DebtorsDB[debtorid],
                [currentDate]: {description, newDebt, paidAmount}, 
                "totalDebt": ( debtAddition + parseInt(paidAmount))
            };

            try{
                console.log(newDebtRecord);
                dispatch(addDebtRecord({debtorid, newDebtRecord}));
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