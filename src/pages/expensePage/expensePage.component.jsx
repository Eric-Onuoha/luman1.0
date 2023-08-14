import ExpensePagePreview from "./expensePagePreview/expensePagePreview.component";
import { useSelector } from "react-redux";
import { getTodaysDate } from "../../utils/getMonthAndDay";

const ExpensePage = () => {
    const Expenses = useSelector((state) => state.expenses.expenses) || {};
    const date = getTodaysDate();
    const daysExpenses = Expenses[date] && Object.keys(Expenses[date]);


    return(
        <ExpensePagePreview Expenses = {Expenses[date]} DaysExpenses = {daysExpenses}></ExpensePagePreview>
    )
}; export default ExpensePage;