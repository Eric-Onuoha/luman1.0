import { useSelector } from "react-redux";
import { getTodaysDate } from "./getMonthAndDay";

const currentDate = getTodaysDate();
const regex = /^(\d{4})(.*)/;

export const GetPreviousCashAtHand = (date = currentDate) => {
    const PreviousAccount = useSelector((state) => state.account.account) || {};
    const accountDates = Object.keys(PreviousAccount).sort((a,b) => {
        let dateA = new Date(a.replace(regex, "$1 $2"));
        let dateB = new Date(b.replace(regex, "$1 $2"));
        return(dateB-dateA);
    });

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