import { useSelector } from "react-redux";
import { getHighestCostOfIngredients } from "./getExpense";
import { getCurrentMonth } from "./getMonthAndDay";

const month = getCurrentMonth();

const GetAccountsData = () => {
    return useSelector((state) => state.account.account);
}

const GetStockData = () => {
    return useSelector((state) => state.stock.stock);
}

const GetUtilitiesData = () => {
    return useSelector((state) => state.utilities.utilities);
}

export const getRevenueByMonth = (currentMonth = month) => {
    const AccountsData = GetAccountsData();
    let grossRevenue = 0;

    for (const day in AccountsData){
        if (day.includes(currentMonth)){
            console.log(day)
            grossRevenue += parseInt(AccountsData[day]["salesAmount"])
        }
    }
    return grossRevenue;
}

export const getQuantitySold = (currentMonth = month) => {
    const StockData = GetStockData();
    let quantitySold = 0;

    for (const day in StockData){
        if (day.includes(currentMonth)){
            quantitySold += parseInt(StockData[day]["familyBread"]["totalSales"])
        }
    }
    return quantitySold;
}

//currentMonth has to be september until I fix the expense records to reflect the cost of 1 item for other months
export const getCostPerUnit = (currentMonth = "september") => {
    const variables = GetUtilitiesData() || {};

    const costOfIngredients = variables['variables2023'][currentMonth]['cost'] || {};
    const quantityPerBag = variables['variables2023'][currentMonth]['quantityperbag'] || 1;

    const purchaseWeight = {
        "sugar": "50000",
        "yeast": "10000",
        "milk": "25000",
        "preservative": "25000",
        "softener": "400",
        "butter": "15000",
        "oil": "25000",
        "flour": "50000",
        "salt": "50000"
    }
    const weightPerBag = variables['variables2023'][currentMonth]['recipe'] || {};

    let costPerBag = 0;

    for (const ingredient in costOfIngredients){
        costPerBag += parseInt(((costOfIngredients[ingredient]*weightPerBag[ingredient])/purchaseWeight[ingredient]))
    }

    const costPerUnit = (costPerBag/quantityPerBag).toFixed(2)

    return costPerUnit;
}