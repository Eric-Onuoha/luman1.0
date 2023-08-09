import { useSelector } from "react-redux";
import { getTodaysDate, getDate } from "./getMonthAndDay";

const currentDate = getTodaysDate();

export const GetCurrentDTCSalesQuantity = (date = currentDate, product) => {
    const Sales = useSelector((state) => state.salesRecord.salesRecord) || {};

    const DTCQuantity = (Sales[date] && Sales[date][product]) || 0;

    return DTCQuantity;
}

export const GetCurrentSRSalesQuantity = (product) => {
    const Sales = useSelector((state) => state.salesRepRecord.salesRepRecord) || {};
    let SRSales = 0;

    for (const key in Sales[currentDate]) {
      const subObject = Sales[currentDate][key];
  
      if (typeof subObject === "object" && subObject !== null) {
        for (const prop in subObject) {
          const salesRep = subObject[prop];
  
          if (prop === product) {
            SRSales += parseInt(salesRep);
          }
        }
      }
    }
  
    return SRSales;
}

export const GetDTCSalesQuantityAtDay = (day, product) => {
    const Sales = useSelector((state) => state.salesRecord.salesRecord) || {};
    const date = getDate(day);

    const DTCQuantity = (Sales[date] && Sales[date][product]) || 0;

    return DTCQuantity;
}

