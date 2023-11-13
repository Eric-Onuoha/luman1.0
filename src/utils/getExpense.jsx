import { useSelector } from "react-redux";
import { getCurrentDateToUpdate, getDate, getCurrentMonth } from "./getMonthAndDay";

const todaysDate = getCurrentDateToUpdate();
const currentDate = getDate(todaysDate);

const month = getCurrentMonth();
// const currentmonth = "september";

const GetExpenseData = () => {
    return useSelector((state) => state.expenses.expenses) || {};
}

const GetIngredientCostData = () => {
    return useSelector((state) => state.utilities.utilities.monthCost) || {}
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
    const ingredientCost = GetIngredientCostData();
    
    let highestIngredientCost = ingredientCost[currentMonth] || {};
    console.log(highestIngredientCost);

    return highestIngredientCost;
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

export const getIngredientExpenseByMonth = (currentMonth = month) => {
    const ExpenseList = GetExpenseData();
    let totalExpense = 0;

    for (const date in ExpenseList) {

        if(date.includes(currentMonth)){
            for (const expenseId in ExpenseList[date]) {
                const expense = ExpenseList[date][expenseId];
                const category = expense.category;
                
                if(category === "ingredient"){
                    totalExpense += parseFloat(expense.amount);
                }

            }
        }
    }

    return totalExpense;
}