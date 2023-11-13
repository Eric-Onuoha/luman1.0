import { useSelector } from "react-redux";
import { getCurrentDateToUpdate, getDate } from "./getMonthAndDay";
import { getOrderedDates } from "./orderDates";

const todaysDate = getCurrentDateToUpdate();
const currentDate = getDate(todaysDate);

export const GetCurrentPrice = (category, product, salesType) => {
    const ProductsDB = useSelector((state) => state.productList.productList) || {};

    const regex = /^(\d{4})(.*)/;
    const PriceList = getOrderedDates(Object.keys(ProductsDB))
    const currentPrice = ProductsDB[PriceList[0]] && ProductsDB[PriceList[0]][category][product][salesType];

    return currentPrice;
}

export const GetPriceAtDay = (day, category, product, salesType) => { // Not sure if this is still in use anywhere
    const ProductsDB = useSelector((state) => state.productList.productList);

    const regex = /^(\d{4})(.*)/;
    let PriceList = Object.keys(ProductsDB);
    PriceList.push(day);
    
    const DaysPrice = PriceList.sort((a,b) => {
        let dateA = new Date(a.replace(regex, "$1 $2"));
        let dateB = new Date(b.replace(regex, "$1 $2"));
        return(dateA-dateB);
    });
    
    const priceDate = DaysPrice.indexOf(day) - 1;

    if (priceDate < 0){
        return 0;
    }

    return ProductsDB[DaysPrice[priceDate]][category][product][salesType];
}