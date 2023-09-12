import StockPagePreview from "./stockPagePreview/stockPagePreview.component";
import { useSelector } from "react-redux";
import { getDate } from "../../utils/getMonthAndDay";

const StockPage = () => {
    const ProductList = [{"bread":["familyBread", "miniBread", "smallBread"]}, {"snacks":["meatpie", "puffpuff", "doughnut"]}];
    return(
        <StockPagePreview bread = {ProductList[0].bread}></StockPagePreview>
    )
}; export default StockPage;