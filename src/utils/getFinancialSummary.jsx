import { useSelector } from "react-redux";
import { getHighestCostOfIngredients } from "./getExpense";
import { getCurrentMonth } from "./getMonthAndDay";

const month = getCurrentMonth();

const GetAccountsData = () => {
    return useSelector((state) => state.account.account);
}

export const getRevenueByMonth = (currentMonth = month) => {
    const AccountsData = GetAccountsData();
    let grossRevenue = 0;

    for (const day in AccountsData){
        if (day.includes(currentMonth)){
            grossRevenue += parseInt(AccountsData[day]["salesAmount"])
        }
    }
    return grossRevenue;
}

export const getCostPerUnit = (currentMonth = month) => {
    const costOfIngredients = getHighestCostOfIngredients(currentMonth);
    const purchaseWeight = {
        "sugar": "50000",
        "yeast": "10000",
        "milk": "25000",
        "preservative": "25000",
        "softener": "400",
        "butter": "15000",
        "oil": "25000",
        "flour": "50000",
        "salt": "20000"
    }
    const weightPerBag = {
        "sugar": "6700",
        "yeast": "400",
        "milk": "1100",
        "preservative": "200",
        "softener": "20",
        "butter": "1700",
        "oil": "1150",
        "flour": "50000",
        "salt": "840"
    }

    let costPerBag = 0;

    for (const ingredient in costOfIngredients){
        costPerBag += parseInt(((costOfIngredients[ingredient]*weightPerBag[ingredient])/purchaseWeight[ingredient]))
    }

    const costPerUnit = (costPerBag/102).toFixed(2)

    return costPerUnit;
}