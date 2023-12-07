import { useSelector } from "react-redux";
import { getCurrentMonth, getMonthRange, getCurrentDateToUpdate } from "./getMonthAndDay";

const regex = /^(\d{4})(\w+)(\d{1,2})$/;

const month = getCurrentMonth();
// const month = "september";

export const GetAllDTCSales = () => {
    return useSelector((state) => state.salesRecord.salesRecord) || {};
}

export const GetAllSRSales = () => {
    return useSelector((state) => state.salesRepRecord.salesRepRecord) || {};
}

export const GetStockRecords = () => {
  return useSelector((state) => state.stock.stock);
}

export const GetMonthlyDTCSales = () => {
    let activeDays = 0;
    const DTCSales = GetAllDTCSales();
    let salesdtc = {"family": 0, "mini": 0, "small": 0};
    
    for (const key in DTCSales) {
      if (key.includes(month)) {
        activeDays += 1;
        salesdtc.family += (DTCSales[key].familyDTC && parseInt(DTCSales[key].familyDTC)) || 0;
        salesdtc.mini += (DTCSales[key].miniDTC && parseInt(DTCSales[key].miniDTC)) || 0;
        salesdtc.small += (DTCSales[key].smallDTC && parseInt(DTCSales[key].smallDTC)) || 0;
      }
    }
    
return {salesdtc, activeDays};

}

export const GetMonthlySRSales = () => {
    const SRSales = GetAllSRSales();
    // const month = getCurrentMonth();
    // const month = "august";
    // const salesReps = GetDistributors();

    //When you have records, try a solution that just checks if the date include the currentmonth and 
    //then adds. Similar to the DTC one
        
    const totals = {};


    for (const dateKey in SRSales) {
        if (SRSales.hasOwnProperty(dateKey)) {
          if (dateKey.includes(month)) {
            for (const salespersonName in SRSales[dateKey]) {
              // if (SRSales[dateKey].hasOwnProperty(salespersonName)) {
                const salespersonData = SRSales[dateKey][salespersonName];
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
              // }
            }
          }
        }
      }
return totals;

}

export const GetActiveDays = (currentMonth = month) => {
  function countSundays() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const currentDate = now.getDate();
    let count = 0;
  
    // Loop through the days of the month
    for (let day = 1; day <= currentDate; day++) {
      const date = new Date(year, month, day);
      // Check if the day is a Sunday (0 corresponds to Sunday)
      if (date.getDay() !== 0) {
        count++;
      }
    }
    return count;
  }
  
  const activeDays = countSundays();
  return activeDays;
}

export const GetMonthlyBagPerDay = (currentMonth = month) => {
    const StockRecords = GetStockRecords();
    let activeDays = (GetActiveDays() - 1);

    let totalFamily = 0;
    let totalMini = 0;
    let totalSmall = 0;

    let familybpd = 0;
    let minibpd = 0;
    let bagsperday = 0;


    for (const date in StockRecords){
      if(date.includes(currentMonth)){
        // activeDays ++;
        totalFamily += parseInt(StockRecords[date]["familyBread"]["totalSales"]) || 0;
        totalMini += parseInt(StockRecords[date]["miniBread"]["totalSales"]) || 0;
        totalSmall += parseInt(StockRecords[date]["smallBread"]["totalSales"]) || 0;
      }
    }

    if (activeDays !== 0){
      familybpd = ((totalFamily/102)/activeDays);
      minibpd = ((totalMini/160)/activeDays);
      bagsperday = (familybpd + minibpd);
    }

    return {bagsperday, familybpd, minibpd, activeDays};
}