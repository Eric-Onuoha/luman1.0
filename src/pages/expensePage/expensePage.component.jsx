import ExpensePagePreview from "./expensePagePreview/expensePagePreview.component";
import { useSelector } from "react-redux";
import { getDate, getCurrentDateToUpdate } from "../../utils/getMonthAndDay";

const ExpensePage = () => {

    const TotalExpenses = useSelector((state) => state.expenses.expenses) || {};
    const todaysDate = getCurrentDateToUpdate();
    const date = getDate(todaysDate)
    const daysExpenses = TotalExpenses[date] && Object.keys(TotalExpenses[date]);

    return(
        <ExpensePagePreview TotalExpenses = {TotalExpenses} Expenses = {TotalExpenses[date]} DaysExpenses = {daysExpenses}></ExpensePagePreview>
    )
}; export default ExpensePage;