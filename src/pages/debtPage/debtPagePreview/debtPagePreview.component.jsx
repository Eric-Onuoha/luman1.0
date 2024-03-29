import "./debtPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import ListGroup from 'bootstrap-4-react/lib/components/listGroup';
import Table from "bootstrap-4-react/lib/components/table";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import DebtEntry from "../../../components/debtEntry/debtEntry.component";
import { useState } from "react";
import { getCurrentDateToUpdate, getDate, getPlainDate } from "../../../utils/getMonthAndDay";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addDebtRecord } from "../../../reduxStore/reducers/debt.reducer";
import { CalculateIndividualsDebt } from "../../../utils/getDebt";
import { getOrderedDates } from "../../../utils/orderDates";

const DebtPagePreview = ({DebtorsDB, Debtors}) => {
    const OperationsMenuType = useSelector((state) => state.operationsMenu.operationsMenu);
    const dispatch = useDispatch();
    const [debtForm, setDebtForm] = useState([]);
    const [showDebts, setShowDebts] = useState("hideDebts");
    const {debtor, description, newDebt, paidAmount} = debtForm;

    const todaysDate = getCurrentDateToUpdate();
    const currentDate = getDate(todaysDate);

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

    const toggleDebtShow = (e) => {
        {e.currentTarget.children[1].className === "table-striped table-bordered table-hover table  hideDebts" ? e.currentTarget.children[1].className = "table-striped table-bordered table-hover table" : e.currentTarget.children[1].className = "table-striped table-bordered table-hover table  hideDebts"}
    }

    return(
        <Container id="debtPagePreviewComponent" fluid="true">
            <OperationsMenu menu={["Update Debt", "View Debts"]}></OperationsMenu>

            {OperationsMenuType === "View" ? 
                (
                    <>
                    {Debtors.map((debtor) => (
                        <>
                            <ListGroup as="ul" onClick = {toggleDebtShow}>
                            <ListGroup.Item as="li" id="debtSummary" bg = "dark">
                                <h4>{debtor}</h4>
                                <h4>Total: {CalculateIndividualsDebt(DebtorsDB[debtor])}</h4>
                            </ListGroup.Item>
                            <Table striped bordered hover className = {showDebts}>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Days Debt</th>
                                        <th>Description</th>
                                        <th>New Debt</th>
                                        <th>Paid Debt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {getOrderedDates(Object.keys(DebtorsDB[debtor])).map((date, i) => (
                                    <tr key={i}>
                                        <td className="col-2">{date}</td>
                                        <td className="col-2">{DebtorsDB[debtor][date].daysDebt}</td>
                                        <td className="col-4">{DebtorsDB[debtor][date].description}</td>
                                        <td className="col-2">{DebtorsDB[debtor][date].newDebt}</td>
                                        <td className="col-2">{DebtorsDB[debtor][date].paidAmount}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                            </ListGroup>
                        </>
                    ))}
                    </>
                ) 
                : 
                (
                    <>
                    <h4>Debt for: {getPlainDate(todaysDate)}</h4>
                    {Debtors.map((debtor) => ( DebtorsDB[debtor][currentDate] &&
                    <Row key={debtor} id="updatedDebtRecords">
                        <Col>Debtor: {debtor.replace(/_/g, " ")}</Col>
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
                    </>
                )
            }
        </Container>
    )
}; export default DebtPagePreview;