import { useSelector } from "react-redux";
import { getTodaysDate } from "./getMonthAndDay";

const currentDate = getTodaysDate();

export const GetCurrentPaidDebt = (date = currentDate) => {
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

export const GetCurrentDaysDebt = (date = currentDate) => {
    const debtors = useSelector((state) => state.debtRecord.debtRecord) || {};

    let totalDebt = 0;

    for (const key in debtors) {
      if (debtors.hasOwnProperty(key) && debtors[key].hasOwnProperty(date)) {
        const debt = parseInt(debtors[key][date].newDebt, 10);
        totalDebt += debt;
      }
    }
  
    return totalDebt;
}