import StockPagePreview from "./stockPagePreview/stockPagePreview.component";
import { useSelector } from "react-redux";
import { getDate } from "../../utils/getMonthAndDay";

const StockPage = () => {
    const prevStock = useSelector((state) => state.stock.stock) || {};
    const prevDTCSales = useSelector((state) => state.salesRecord.salesRecord) || {};
    const prevSalesRep = useSelector((state) => state.salesRepRecord.salesRepRecord) || {};
    const regex = /^(\d{4})(.*)/;

    const currentDate = new Date();
    const today = new Date();

    // Function to find the latest date from the keys of the data object
    // function getLatestDate(prevSalesRep) {
    //     let latestDate = null;
    //     for (const date in prevSalesRep) {
    //     if (!latestDate || date > latestDate) {
    //         latestDate = date;
    //     }
    //     }
    //     return latestDate;
    // }
    
    // // Step 1: Get the latest date from the data object
    // const latestDate = getLatestDate(prevSalesRep);
    const latestDate = getDate(currentDate.setDate(currentDate.getDate() - 1));
    const todaysDate = getDate(today);
    
    // Step 2: Get the "smallSalesRep" values for all entities under the latest date
    const entities = prevSalesRep[todaysDate];
    console.log(prevSalesRep[todaysDate]);
    let totalSmallSales = 0;
    let totalMiniSales = 0;
    let totalFamilySales = 0;
    
    for (const entity in entities) {
        if (entities.hasOwnProperty(entity)) {
        const smallSalesRep = parseInt(entities[entity]["smallSalesRep"]);
        const miniSalesRep = parseInt(entities[entity]["miniSalesRep"]);
        const familySalesRep = parseInt(entities[entity]["familySalesRep"]);
        totalSmallSales += smallSalesRep;
        totalMiniSales += miniSalesRep;
        totalFamilySales += familySalesRep;
        }
    }

    //get
    const LatestDTCSales = Object.keys(prevDTCSales).sort((a,b) => {
        let dateA = new Date(a.replace(regex, "$1 $2"));
        let dateB = new Date(b.replace(regex, "$1 $2"));
        return(dateB-dateA);
    });

    const LatestStockRecord = Object.keys(prevStock).sort((a,b) => {
        let dateA = new Date(a.replace(regex, "$1 $2"));
        let dateB = new Date(b.replace(regex, "$1 $2"));
        return(dateB-dateA);
    });

    const ProductList = [{"bread":["familyBread", "miniBread", "smallBread"]}, {"snacks":["meatpie", "puffpuff", "doughnut"]}];
    return(
        <StockPagePreview StockData = {prevStock} bread = {ProductList[0].bread} LatestStockRecord = {prevStock[LatestStockRecord[0]]} LatestDTCSales = {prevDTCSales[LatestDTCSales[0]]} totalSmallSales = {totalSmallSales} totalMiniSales = {totalMiniSales} totalFamilySales = {totalFamilySales}></StockPagePreview>
    )
}; export default StockPage;