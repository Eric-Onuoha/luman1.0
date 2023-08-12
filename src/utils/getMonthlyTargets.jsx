import { useSelector } from "react-redux";
import { getCurrentMonth, getMonthRange } from "./getMonthAndDay";
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
    let activeDays = 0;
    const DTCSales = GetAllDTCSales();
    const month = getCurrentMonth();
    let salesdtc = {"family": 0, "mini": 0, "small": 0};
    
    for (const key in DTCSales) {
      if (key.includes(month)) {
        activeDays += 1;
        salesdtc.family += parseInt(DTCSales[key].familyDTC);
        salesdtc.mini += parseInt(DTCSales[key].miniDTC);
        salesdtc.small += parseInt(DTCSales[key].miniDTC);
      }
    }
    
return {salesdtc, activeDays};

}

export const GetMonthlySRSales = () => {
    const SRSales = GetAllSRSales();
    const dateRange = getMonthRange();
    const salesReps = GetDistributors();

    //When you have records, try a solution that just checks if the date include the currentmonth and 
    //then adds. Similar to the DTC one
        
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

export const GetMonthlyBagPerDay = () => {
    const DTCObject = GetMonthlyDTCSales();
    const SRObject = GetMonthlySRSales();


    let totalFamily = 0;
    let totalMini = 0;
    let totalSmall = 0;

    let familybpd = 0;
    let minibpd = 0;
    let bagsperday = 0;

    // Add values from the first object
    totalFamily += DTCObject.salesdtc.family;
    totalMini += DTCObject.salesdtc.mini;
    totalSmall += DTCObject.salesdtc.small;

    // Add values from the second object
    for (const key in SRObject) {
    const values = SRObject[key];
    totalFamily += values.family;
    totalMini += values.mini;
    totalSmall += values.small;
    }

    if (DTCObject.activeDays != 0){
      familybpd = ((totalFamily/102)/DTCObject.activeDays);
      minibpd = ((totalMini/176)/DTCObject.activeDays);
      bagsperday = (familybpd + minibpd);
    }

    return {bagsperday, familybpd, minibpd};
}