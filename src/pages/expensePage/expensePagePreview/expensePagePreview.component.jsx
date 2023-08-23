import "./expensePagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import Table from "bootstrap-4-react/lib/components/table";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodaysDate } from "../../../utils/getMonthAndDay";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import ExpenseEntry from "../../../components/expenseEntry/expenseEntry.component";
import { getDate, getPlainDate } from "../../../utils/getMonthAndDay";
import { addExpense } from "../../../reduxStore/reducers/expense.reducer";

const ExpensePagePreview = ({TotalExpenses, Expenses, DaysExpenses}) => {
    const regex = /^(\d{4})([a-zA-Z]+)(\d+)$/;
    const OperationsMenuType = useSelector((state) => state.operationsMenu.operationsMenu);
    const dispatch = useDispatch();
    const todaysDate = new Date();
    const [count, setCount] = useState(1);
    const [expenseForm, setExpenseForm] = useState([]);
    const {category, ingredient, item, quantity, amount, paymentBy} = expenseForm;

    const expenseFormChange = (event) => {
        const {name, value} = event.target;
        setExpenseForm({...expenseForm, [name]: value});
    }
    
    const expenseFormSubmit = (event) => {
        event.preventDefault();
        if (expenseForm.length !== 0){
            const number = parseInt(DaysExpenses && DaysExpenses.length) || 0;
            const currentDate = getDate(todaysDate);
            let newExpense;

            if(ingredient === undefined){
                newExpense = {
                    ...Expenses,
                    [number]: {category, item, quantity, amount, paymentBy}
                }
            } else {
                newExpense = {
                    ...Expenses,
                    [number]: {category, ingredient, quantity, amount, paymentBy}
                }
            }
            try{
                dispatch(addExpense({newExpense, currentDate}));
            } catch (err){
                alert("Something went wrong, please refresh and try again" & err);
            }
        }
    }

    return(
        <Container id="expensePagePreviewComponent" fluid="true">
            <OperationsMenu menu = {["Update Expense", "View Expenses"]}></OperationsMenu>

            {OperationsMenuType === "View" ?
                (
                    <>
                    <Table striped bordered hover responsive className = "bg-light"> 
                        <thead>
                            <tr className="bg-dark">
                                <th>Date</th>
                                <th>Categories</th>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th>Payment Method</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Object.keys(TotalExpenses).map((expenseDate, i) => (
                            <>
                            {Object.keys(TotalExpenses[expenseDate]).map((num) => (
                                <tr>
                                <td>{expenseDate.replace(regex, "$3_$2_$1")}</td>
                                <td>{TotalExpenses && TotalExpenses[expenseDate][num]["category"]}</td>
                                <td>{TotalExpenses[expenseDate][num]["item"] || TotalExpenses[expenseDate][num]["ingredient"]}</td>
                                <td>{TotalExpenses && TotalExpenses[expenseDate][num]["quantity"]}</td>
                                <td>{TotalExpenses && TotalExpenses[expenseDate][num]["amount"]}</td>
                                <td>{TotalExpenses && TotalExpenses[expenseDate][num]["paymentBy"]}</td>
                                </tr>
                            ))}
                            </>
                        ))}
                        </tbody>
                    </Table>
                    </>
                )
                :
                (
                    <>
                    <h4>Expenses for {getPlainDate(todaysDate)}</h4>
                    {DaysExpenses && DaysExpenses.map((expenseItem) => (
                    <Row id="updatedExpenses" key={expenseItem}>
                        <Col><h4>Categories: {Expenses && Expenses[expenseItem].category}</h4></Col>
                        <Col><h4>Item: {Expenses && Expenses[expenseItem].item || Expenses[expenseItem].ingredient}</h4></Col>
                        <Col><h4>Quantity: {Expenses && Expenses[expenseItem].quantity}</h4></Col>
                        <Col><h4>Amount: {Expenses && Expenses[expenseItem].amount}</h4></Col>
                        <Col><h4>Payment Method: {Expenses && Expenses[expenseItem].paymentBy}</h4></Col>
                    </Row>
                    ))}
                    <form onChange={expenseFormChange} onSubmit={expenseFormSubmit}>
                        <Row id="expenseRecords">
                            <ExpenseEntry></ExpenseEntry>
                        </Row>
                        <button type="submit">Update Expense for today</button>
                    </form>
                    </>

                )
            }
        </Container>
    )
}; export default ExpensePagePreview;