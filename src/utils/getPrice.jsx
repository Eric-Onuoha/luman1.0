import { useSelector } from "react-redux";
import { getTodaysDate } from "./getMonthAndDay";

const currentDate = getTodaysDate();

export const GetCurrentPrice = (category, product, salesType) => {
    const ProductsDB = useSelector((state) => state.productList.productList) || {};

    const regex = /^(\d{4})(.*)/;
    const PriceList = Object.keys(ProductsDB).sort((a,b) => {
        let dateA = new Date(a.replace(regex, "$1 $2"));
        let dateB = new Date(b.replace(regex, "$1 $2"));
        return(dateB-dateA);
    });
    const currentPrice = ProductsDB[PriceList[0]] && ProductsDB[PriceList[0]][category][product][salesType];

    return currentPrice;
}

export const GetPriceAtDay = (day, category, product, salesType) => {
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