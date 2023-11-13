import { useSelector } from "react-redux";
import { getCurrentDateToUpdate, getDate } from "./getMonthAndDay";

const todaysDate = getCurrentDateToUpdate();
const currentDate = getDate(todaysDate);

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

export const CalculateIndividualsDebt = (debtorsRecord) => {
  let totalDebt = 0;

  for (let date in debtorsRecord){
    totalDebt += (parseInt(debtorsRecord[date].paidAmount) - parseInt(debtorsRecord[date].newDebt));
  }
  
  return totalDebt;
}

export const CalculateTotalDebt = () => {
  const debtors = useSelector((state) => state.debtRecord.debtRecord) || {};
  let totalDebt = 0;
  
  Object.keys(debtors).forEach(debtor => {
    totalDebt += CalculateIndividualsDebt(debtors[debtor])
  });

  return totalDebt;
}