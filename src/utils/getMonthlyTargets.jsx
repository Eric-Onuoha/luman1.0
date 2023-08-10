import { useSelector } from "react-redux";
import { getMonthRange } from "./getMonthAndDay";
import { orderDates } from "./orderDates";
import { GetDistributors } from "./getDistributors";

const regex = /^(\d{4})(\w+)(\d{1,2})$/;

const GetAllDTCSales = () => {
    return useSelector((state) => state.salesRecord.salesRecord) || {};
}

const GetAllSRSales = () => {
    return useSelector((state) => state.salesRepRecord.salesRepRecord) || {};
}

export const GetMonthlyDTCSales = () => {
    const DTCSales = GetAllDTCSales();
    const dateRange = getMonthRange();
    let salesdtc = {"family": 0, "mini": 0, "small": 0};
    
    const salesDates = Object.keys(DTCSales);
    salesDates.push(dateRange.firstDay, dateRange.lastDay);
    const sortedDates = salesDates.sort(orderDates);

    const firstDay = sortedDates.indexOf(dateRange.firstDay) + 1;
    const lastDay = sortedDates.indexOf(dateRange.lastDay);

        for (let i = firstDay; i < lastDay; i++){
            salesdtc.family += parseInt(DTCSales[sortedDates[i]]["familyDTC"] && DTCSales[sortedDates[i]]["familyDTC"]) || 0;
            salesdtc.mini += parseInt(DTCSales[sortedDates[i]]["miniDTC"] && DTCSales[sortedDates[i]]["miniDTC"]) || 0;
            salesdtc.small += parseInt(DTCSales[sortedDates[i]]["smallDTC"] && DTCSales[sortedDates[i]]["smallDTC"]) || 0;
        }

return salesdtc;

}

export const GetMonthlySRSales = () => {
    const SRSales = GetAllSRSales();
    const dateRange = getMonthRange();
    const salesReps = GetDistributors();
    // salesReps.forEach((salesRep) => {
    //     let salesSR = {[salesRep]: {"family": 0, "mini": 0, "small": 0}};
    // })
    
    
    const salesDates = Object.keys(SRSales);
    salesDates.push(dateRange.firstDay, dateRange.lastDay);
    const sortedDates = salesDates.sort(orderDates);

    const firstDay = sortedDates.indexOf(dateRange.firstDay) + 1;
    const lastDay = sortedDates.indexOf(dateRange.lastDay);

    const totals = {};


    for (const dateKey in SRSales) {
        if (SRSales.hasOwnProperty(dateKey)) {
            let currentIndex = sortedDates.indexOf(dateKey);
          if (currentIndex >= firstDay && currentIndex < lastDay) {
            const dateEntry = SRSales[dateKey];
            for (const salespersonName in dateEntry) {
              if (dateEntry.hasOwnProperty(salespersonName)) {
                const salespersonData = dateEntry[salespersonName];
                for (const salesType in salespersonData) {
                  if (salespersonData.hasOwnProperty(salesType)) {
                    const salesValue = parseInt(salespersonData[salesType]);
                    const formattedSalesType = salesType.replace("SalesRep", "").toLowerCase();
                    
                    if (!totals[salespersonName]) {
                      totals[salespersonName] = {};
                    }
                    if (!totals[salespersonName][formattedSalesType]) {
                      totals[salespersonName][formattedSalesType] = 0;
                    }
                    totals[salespersonName][formattedSalesType] += salesValue;
                  }
                }
              }
            }
          }
        }
      }
    
return totals;

}