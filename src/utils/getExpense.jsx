import { useSelector } from "react-redux";
import { getTodaysDate } from "./getMonthAndDay";

const currentDate = getTodaysDate();

export const GetCurrentDaysExpense = (date = currentDate) => {
    const ExpenseList = useSelector((state) => state.expenses.expenses) || {};
    let totalExpense = 0;

    for (const key in ExpenseList[date]) {
        const paidAmount = parseInt(ExpenseList[date][key].amount, 10);
        totalExpense += paidAmount;
    }
  
    return totalExpense;
}