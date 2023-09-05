import { useSelector } from "react-redux";
import { getCurrentMonth, getMonthRange } from "./getMonthAndDay";

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
        salesdtc.family += (DTCSales[key].familyDTC && parseInt(DTCSales[key].familyDTC)) || 0;
        salesdtc.mini += (DTCSales[key].miniDTC && parseInt(DTCSales[key].miniDTC)) || 0;
        salesdtc.small += (DTCSales[key].smallDTC && parseInt(DTCSales[key].smallDTC)) || 0;
      }
    }
    
return {salesdtc, activeDays};

}

export const GetMonthlySRSales = () => {
    const SRSales = GetAllSRSales();
    const month = getCurrentMonth();
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
      minibpd = ((totalMini/160)/DTCObject.activeDays);
      bagsperday = (familybpd + minibpd);
    }

    return {bagsperday, familybpd, minibpd};
}