import { useSelector } from "react-redux";
import { GetAllDTCSales, GetAllSRSales } from "./getMonthlyTargets";
import { getDate } from "./getMonthAndDay";
import { getOrderedDates } from "./orderDates";

const currentDate = new Date();
const todaysDate = getDate(currentDate);

export const GetAllStockRecords = () => {
    return useSelector((state) => state.stock.stock) || {};
}

export const getCurrentStock = () => {
    const StockRecords = GetAllStockRecords();
    const dates = getOrderedDates(Object.keys(StockRecords));

    const latestStock = StockRecords[dates[0]] || {};
    
    return latestStock;
}

export const getCurrentSRSales = () => {
    const SRSales = GetAllSRSales();
    const salesReps = SRSales[todaysDate];
    let totalSmallSales = 0;
    let totalMiniSales = 0;
    let totalFamilySales = 0;
    
    for (const salesRep in salesReps) {
        if (salesReps.hasOwnProperty(salesRep)) {
        const smallSalesRep = (salesReps[salesRep]["smallSalesRep"] && parseInt(salesReps[salesRep]["smallSalesRep"])) || 0;
        const miniSalesRep = (salesReps[salesRep]["miniSalesRep"] && parseInt(salesReps[salesRep]["miniSalesRep"])) || 0;
        const familySalesRep = (salesReps[salesRep]["familySalesRep"] && parseInt(salesReps[salesRep]["familySalesRep"])) || 0;
        totalSmallSales += smallSalesRep;
        totalMiniSales += miniSalesRep;
        totalFamilySales += familySalesRep;
        }
    }

    return {totalFamilySales, totalMiniSales, totalSmallSales};
}

export const getCurrentDTCSales = () => {
    const DTCSales = GetAllDTCSales();

    const latestFamilyDTC = (DTCSales[todaysDate] && DTCSales[todaysDate]["familyDTC"]) || 0;
    const latestMiniDTC = (DTCSales[todaysDate] && DTCSales[todaysDate]["miniDTC"]) || 0;
    const latestSmallDTC = (DTCSales[todaysDate] && DTCSales[todaysDate]["smallDTC"]) || 0;

    return {latestFamilyDTC, latestMiniDTC, latestSmallDTC};
}

export const getCurrentSales = () => {
    const SRSales = getCurrentSRSales();
    const DTCSales = getCurrentDTCSales();

    const totalFamily = SRSales.totalFamilySales + parseInt(DTCSales.latestFamilyDTC);
    const totalMini = SRSales.totalMiniSales + parseInt(DTCSales.latestMiniDTC);
    const totalSmall = SRSales.totalSmallSales + parseInt(DTCSales.latestSmallDTC);

    return {totalFamily, totalMini, totalSmall};
}