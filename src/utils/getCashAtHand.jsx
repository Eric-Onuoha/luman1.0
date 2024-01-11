import { useSelector } from "react-redux";
import { getTodaysDate } from "./getMonthAndDay";
import { getOrderedDates } from "./orderDates";

const currentDate = getTodaysDate();
const regex = /^(\d{4})(.*)/;

export const GetPreviousCashAtHand = (date = currentDate) => {
    const PreviousAccount = useSelector((state) => state.account.account) || {};
    const accountDates = getOrderedDates(Object.keys(PreviousAccount))

    if (accountDates.length === 0){
        return 0;
    }

    if (accountDates[0] == date){
        const previousCAH = (PreviousAccount[accountDates[1]] && PreviousAccount[accountDates[1]].expectedCash) || 0;
        return previousCAH;
    }

    const previousCAH = (PreviousAccount[accountDates[0]] && PreviousAccount[accountDates[0]].expectedCash);   
    return previousCAH;
}

export const GetPreviousCashFlow = (date = currentDate) => {
    const PreviousAccount = useSelector((state) => state.account.account) || {};
    const accountDates = getOrderedDates(Object.keys(PreviousAccount))

    if (accountDates.length === 0){
        return 0;
    }

    if (accountDates[0] == date){
        const previousCashFlow = (PreviousAccount[accountDates[1]] && PreviousAccount[accountDates[1]].currentCashFLow) || 0;
        return previousCashFlow;
    }

    const previousCashFlow = (PreviousAccount[accountDates[0]] && PreviousAccount[accountDates[0]].currentCashFLow);   
    return previousCashFlow;
}