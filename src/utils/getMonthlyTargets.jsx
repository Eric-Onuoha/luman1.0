import { useSelector } from "react-redux";
import { getMonthRange } from "./getMonthAndDay";
import { orderDates } from "./orderDates";
import { GetCurrentDTCSalesQuantity } from "./getSalesQuantity";

const regex = /^(\d{4})(\w+)(\d{1,2})$/;

export const GetMonthlyDTCSales = () => {
    const DTCSales = useSelector((state) => state.salesRecord.salesRecord) || {};
    const Sales = useSelector((state) => state.salesRecord.salesRecord) || {};
    const dateRange = getMonthRange();
    let salesdtc = {"family": 0, "mini": 0, "small": 0};
    
    const salesDates = Object.keys(DTCSales);
    salesDates.push(dateRange.firstDay, dateRange.lastDay);
    const sortedDates = salesDates.sort(orderDates);

    const firstDay = sortedDates.indexOf(dateRange.firstDay) + 1;
    const lastDay = sortedDates.indexOf(dateRange.lastDay);

    // if(Sales){
        for (let i = firstDay; i < lastDay; i++){
            salesdtc.family += parseInt(Sales[sortedDates[i]]["familyDTC"] && Sales[sortedDates[i]]["familyDTC"]) || 0;
            salesdtc.mini += parseInt(Sales[sortedDates[i]]["miniDTC"] && Sales[sortedDates[i]]["miniDTC"]) || 0;
            salesdtc.small += parseInt(Sales[sortedDates[i]]["smallDTC"] && Sales[sortedDates[i]]["smallDTC"]) || 0;
        }
    // }    

return salesdtc;

}