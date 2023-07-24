import "./expensePagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import { useState } from "react";
import { useDispatch } from "react-redux";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import ExpenseEntry from "../../../components/expenseEntry/expenseEntry.component";
import { getDate, getPlainDate } from "../../../utils/getMonthAndDay";
import { addExpense } from "../../../reduxStore/reducers/expense.reducer";

const ExpensePagePreview = ({Expenses, DaysExpenses}) => {
    const dispatch = useDispatch();
    const todaysDate = new Date();
    const [count, setCount] = useState(1);
    const [expenseForm, setExpenseForm] = useState([]);
    const {category, ingridient, item, quantity, amount, paymentBy} = expenseForm;

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

            if(ingridient === undefined){
                newExpense = {
                    ...Expenses,
                    [number]: {category, item, item, quantity, amount, paymentBy}
                }
            } else {
                newExpense = {
                    ...Expenses,
                    [number]: {category, ingridient, item, quantity, amount, paymentBy}
                }
            }
            console.log(newExpense);         
            try{
                // addCollectionAndDocuments("Products", date, ProductFormat);
                dispatch(addExpense({newExpense, currentDate}));
            } catch (err){
                alert("Something went wrong, please refresh and try again" & err);
            }
        }
    }

    return(
        <Container id="expensePagePreviewComponent" fluid="true">
            <OperationsMenu menu = "Expense"></OperationsMenu>
                <h4>Expenses for {getPlainDate(todaysDate)}</h4>
                {DaysExpenses && DaysExpenses.map((expenseItem) => (
                <Row id="updatedExpenses" key={expenseItem}>
                    <Col><h4>Categories: {Expenses && Expenses[expenseItem].category}</h4></Col>
                    <Col><h4>Item: {Expenses && Expenses[expenseItem].item || Expenses[expenseItem].ingridient}</h4></Col>
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
        </Container>
    )
}; export default ExpensePagePreview;