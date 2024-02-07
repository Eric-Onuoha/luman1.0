import { useSelector } from "react-redux";
import { getHighestCostOfIngredients } from "./getExpense";
import { getCurrentMonth, getCurrentYear } from "./getMonthAndDay";
import { getOrderedDates } from "./orderDates";

const month = getCurrentMonth();
const year = getCurrentYear();

const GetAccountsData = () => {
    return useSelector((state) => state.account.account);
}

const GetStockData = () => {
    return useSelector((state) => state.stock.stock);
}

const GetUtilitiesData = () => {
    return useSelector((state) => state.utilities.utilities);
}

export const getRevenueByMonth = ( currentYear = year, currentMonth = month) => {
    const AccountsData = GetAccountsData();
    let grossRevenue = 0;

    for (const day in AccountsData){
        if (day.includes(currentMonth) && day.includes(currentYear)){
            grossRevenue += parseInt(AccountsData[day]["salesAmount"])
        }
    }
    return grossRevenue;
}

export const getCurrentAvailableCash = (currentYear = year, currentMonth = month) => {
    const AccountsData = GetAccountsData();
    let currentAvailableCash = 0;
    
    const OrderedAccountsData = getOrderedDates(Object.keys(AccountsData));
    const lastAccountDay = OrderedAccountsData[0];

    try{
        currentAvailableCash = AccountsData[lastAccountDay]["currentCashFLow"] || 0;
    }catch(err){
        return currentAvailableCash;
    }

    return currentAvailableCash;
}


export const getCashFlowDifference = (currentYear = year, currentMonth = month) => {
    const AccountsData = GetAccountsData();
    console.log(AccountsData);
    let cashFlowDiff = 0;
    
    for (const day in AccountsData){
        if (day.includes(currentMonth) && day.includes(currentYear)){
            cashFlowDiff += parseInt(AccountsData[day]["cashFlowDifference"])
        }
    }

    return cashFlowDiff;
}


export const getQuantitySold = (currentYear = year, currentMonth = month) => {
    const StockData = GetStockData();
    let quantitySold = 0;

    for (const day in StockData){
        if (day.includes(currentMonth) && day.includes(currentYear)){
            quantitySold += parseInt(StockData[day]["familyBread"]["totalSales"])
        }
    }
    return quantitySold;
}

//currentMonth has to be september until I fix the expense records to reflect the cost of 1 item for other months
export const getCostPerUnit = (currentYear = year, currentMonth = month) => {
    const variables = GetUtilitiesData() || {};

    try{
        const costOfIngredients = variables[`variables${currentYear}`][currentMonth]['cost'] || {};
        const quantityPerBag = variables[`variables${currentYear}`][currentMonth]['quantityperbag'] || 1;
    
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
        const weightPerBag = variables[`variables${currentYear}`]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         [currentMonth]['recipe'] || {};
    
        let costPerBag = 0;
    
        for (const ingredient in costOfIngredients){
            costPerBag += parseInt(((costOfIngredients[ingredient]*weightPerBag[ingredient])/purchaseWeight[ingredient]))
        }
    
        const costPerUnit = (costPerBag/quantityPerBag).toFixed(2)
    
        return costPerUnit;
    } catch(err){
        console.log(err);
        return 0;
    }

}