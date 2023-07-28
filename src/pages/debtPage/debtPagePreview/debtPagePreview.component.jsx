import "./debtPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import DebtEntry from "../../../components/debtEntry/debtEntry.component";
import { getTodaysPlainDate } from "../../../utils/getMonthAndDay";
import { useState } from "react";
import { getTodaysDate } from "../../../utils/getMonthAndDay";
import { useDispatch } from "react-redux";

import { addDebtRecord } from "../../../reduxStore/reducers/debt.reducer";

const DebtPagePreview = ({DebtorsDB, Debtors}) => {
    const dispatch = useDispatch();
    const [debtForm, setDebtForm] = useState([]);
    const {debtor, description, newDebt, paidAmount} = debtForm;
    const currentDate = getTodaysDate();

    const debtFormSubmit = (event) => {
        event.preventDefault();
        if (debtForm.length !== 0){
            const debtorid = debtor.replace(/\s/g, "_");
            const debt = (parseInt(paidAmount) - parseInt(newDebt));
            const newDebtRecord = {
                ...DebtorsDB[debtorid],
                [currentDate]: {description, newDebt, paidAmount, "daysDebt": debt}
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
            <OperationsMenu></OperationsMenu>
            <h4>Debt for: {getTodaysPlainDate()}</h4>
            {Debtors.map((debtor) => (
            <Row key={debtor} id="updatedDebtRecords">
                <Col>Debtor: {debtor}</Col>
                <Col>Description: {DebtorsDB[debtor][currentDate].description}</Col>
                <Col>New Debt: {DebtorsDB[debtor][currentDate].newDebt}</Col>
                <Col>Paid Amount: {DebtorsDB[debtor][currentDate].paidAmount}</Col>
                <Col>Todays Debt: {DebtorsDB[debtor][currentDate].daysDebt}</Col>
            </Row>
            ))}
            <form onChange={debtFormChange} onSubmit={debtFormSubmit}>
                <Row id="debtRecords">
                    <DebtEntry></DebtEntry>
                </Row>
                <button type="submit">Update Debt Records</button>
            </form>
        </Container>
    )
}; export default DebtPagePreview;