import { GetCurrentPrice } from "./getPrice";
import { GetCurrentDTCSalesQuantity, GetCurrentSRSalesQuantity } from "./getSalesQuantity";


export const getCurrentFamilyAmount = () => {
    const DTCSales = GetCurrentDTCSalesQuantity("familyDTC");
    const SRSales = GetCurrentSRSalesQuantity("familySalesRep");
    const currentDTCPrice = GetCurrentPrice("bread", "familyBread", "productPriceDTC");
    const currentSRPrice = GetCurrentPrice("bread", "familyBread", "productPriceSR");

    const salesAmount = ((DTCSales * currentDTCPrice) + (SRSales * currentSRPrice));

    return salesAmount;
}

export const getCurrentMiniAmount = () => {
    const DTCSales = GetCurrentDTCSalesQuantity("miniDTC");
    const SRSales = GetCurrentSRSalesQuantity("miniSalesRep");
    const currentDTCPrice = GetCurrentPrice("bread", "miniBread", "productPriceDTC");
    const currentSRPrice = GetCurrentPrice("bread", "miniBread", "productPriceSR");

    const salesAmount = ((DTCSales * currentDTCPrice) + (SRSales * currentSRPrice));

    return salesAmount;
}

export const getCurrentSmallAmount = () => {
    const DTCSales = GetCurrentDTCSalesQuantity("smallDTC");
    const SRSales = GetCurrentSRSalesQuantity("smallSalesRep");
    const currentDTCPrice = GetCurrentPrice("bread", "smallBread", "productPriceDTC");
    const currentSRPrice = GetCurrentPrice("bread", "smallBread", "productPriceSR");

    const salesAmount = ((DTCSales * currentDTCPrice) + (SRSales * currentSRPrice));

    return salesAmount;
}

export const getCurrentAmount = () => {
    const familyAmount = getCurrentFamilyAmount();
    const miniAmount = getCurrentMiniAmount(); 
    const smallAmount = getCurrentSmallAmount();

    return (familyAmount + miniAmount + smallAmount);
}