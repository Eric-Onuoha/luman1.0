import PricingPagePreview from "./pricingPagePreview/pricingPagePreview.component";
import { getOrderedDates } from "../../utils/orderDates";
import { useSelector } from "react-redux";



const PricingPage = () => {

    const Prices = useSelector((state) => state.productList.productList);
    const PriceChange = getOrderedDates(Object.keys(Prices));
    const CurrentPrice = Prices[PriceChange[0]];
    // console.log(CurrentPrice);

    return(
        <PricingPagePreview CurrentPrice = {CurrentPrice} />
    )
}; export default PricingPage;

