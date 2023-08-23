import ExpensePagePreview from "./expensePagePreview/expensePagePreview.component";
import { useSelector } from "react-redux";
import { getTodaysDate } from "../../utils/getMonthAndDay";

const ExpensePage = () => {

    const TotalExpenses = useSelector((state) => state.expenses.expenses) || {};
    const date = getTodaysDate();
    const daysExpenses = TotalExpenses[date] && Object.keys(TotalExpenses[date]);

    return(
        <ExpensePagePreview TotalExpenses = {TotalExpenses} Expenses = {TotalExpenses[date]} DaysExpenses = {daysExpenses}></ExpensePagePreview>
    )
}; export default ExpensePage;