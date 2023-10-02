import { useSelector } from "react-redux";
import { getTodaysDate, getCurrentMonth } from "./getMonthAndDay";

const currentDate = getTodaysDate();
const month = getCurrentMonth();
// const currentmonth = "september";

const GetExpenseData = () => {
    return useSelector((state) => state.expenses.expenses) || {};
}

export const GetCurrentDaysExpense = (date = currentDate) => {
    const ExpenseList = GetExpenseData();
    let totalExpense = 0;

    for (const key in ExpenseList[date]) {
        if(ExpenseList[date][key].paymentBy === "Cash"){
            const paidAmount = parseInt(ExpenseList[date][key].amount, 10);
            totalExpense += paidAmount;
        }
    }
  
    return totalExpense;
}

export const GetExpenseByCategory = (currentMonth = month) => {
    const ExpenseList = GetExpenseData();
    const categoryExpenses = {};

    for (const date in ExpenseList) {

        if(date.includes(currentMonth)){
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

export const getHighestCostOfIngredients = (currentMonth = month) => {
    const ExpenseList = GetExpenseData();
    const ingredientCost = {};

    for (const date in ExpenseList){
        if (date.includes(currentMonth)){
            for (const eid in ExpenseList[date]){
                const expense = ExpenseList[date][eid]
                if (expense.category === "ingredient" && expense.quantity == 1){
                    const ingredient = expense.ingredient;
                    const amount = expense.amount
                    if(!ingredientCost.hasOwnProperty(ingredient) || (ingredientCost[ingredient] < amount )){
                        ingredientCost[ingredient] = amount;
                    }
                }
            }
        }
    }

    return ingredientCost;
}

export const getTotalExpenseByMonth = (currentMonth = month) => {
    const ExpenseList = GetExpenseData();
    let totalExpense = 0;

    for (const date in ExpenseList) {

        if(date.includes(currentMonth)){
            for (const expenseId in ExpenseList[date]) {
                const expense = ExpenseList[date][expenseId];
                const category = expense.category;
                
                if(category !== "ingredient"){
                    totalExpense += parseFloat(expense.amount);
                }

            }
        }
    }

    return totalExpense;
}