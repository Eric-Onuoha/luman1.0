import { GetCurrentPrice } from "./getPrice";
import { GetCurrentDTCFamilySalesQuantity, GetCurrentDTCMiniSalesQuantity, GetCurrentDTCSmallSalesQuantity } from "./getSalesQuantity";


export const getCurrentFamilyAmount = () => {
    const DTCSales = GetCurrentDTCFamilySalesQuantity();
    const currentPrice = GetCurrentPrice("bread", "familyBread", "productPriceDTC");

    const salesAmount = (DTCSales * currentPrice);

    return salesAmount;
}

export const getCurrentMiniAmount = () => {
    const DTCSales = GetCurrentDTCMiniSalesQuantity();
    const currentPrice = GetCurrentPrice("bread", "miniBread", "productPriceDTC");

    const salesAmount = (DTCSales * currentPrice);

    return salesAmount;
}

export const getCurrentSmallAmount = () => {
    const DTCSales = GetCurrentDTCSmallSalesQuantity();
    const currentPrice = GetCurrentPrice("bread", "smallBread", "productPriceDTC");

    const salesAmount = (DTCSales * currentPrice);

    return salesAmount;
}

export const getCurrentAmount = () => {
    const familyAmount = getCurrentFamilyAmount();
    const miniAmount = getCurrentMiniAmount(); 
    const smallAmount = getCurrentSmallAmount();

    return (familyAmount + miniAmount + smallAmount);
}