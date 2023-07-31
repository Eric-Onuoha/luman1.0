import { useSelector } from "react-redux";
import { getTodaysDate } from "./getMonthAndDay";

export const GetCurrentPaidDebt = (date) => {
    const debtors = useSelector((state) => state.debtRecord.debtRecord) || {};

    let totalPaidAmount = 0;

    for (const key in debtors) {
      if (debtors.hasOwnProperty(key) && debtors[key].hasOwnProperty(date)) {
        const paidAmount = parseInt(debtors[key][date].paidAmount, 10);
        totalPaidAmount += paidAmount;
      }
    }
  
    return totalPaidAmount;
}