import { useSelector } from "react-redux";
import { getTodaysDate, getCurrentMonth } from "./getMonthAndDay";

const currentDate = getTodaysDate();
const currentmonth = getCurrentMonth();

export const GetCurrentDaysExpense = (date = currentDate) => {
    const ExpenseList = useSelector((state) => state.expenses.expenses) || {};
    console.log(ExpenseList)
    let totalExpense = 0;

    for (const key in ExpenseList[date]) {
        if(ExpenseList[date][key].paymentBy === "Cash"){
            const paidAmount = parseInt(ExpenseList[date][key].amount, 10);
            totalExpense += paidAmount;
        }
    }
  
    return totalExpense;
}

export const GetExpenseByCategory = () => {
    const ExpenseList = useSelector((state) => state.expenses.expenses) || {};
    const categoryExpenses = {};

    for (const date in ExpenseList) {

        if(date.includes(currentmonth)){
            for (const expenseId in ExpenseList[date]) {
                const expense = ExpenseList[date][expenseId];
                const category = expense.category;
                const amount = parseFloat(expense.amount);
    
                if (categoryExpenses[category]) {
                categoryExpenses[category] += amount;
                } else {
                categoryExpenses[category] = amount;
                }
            }
        }
    }

    return categoryExpenses;
}