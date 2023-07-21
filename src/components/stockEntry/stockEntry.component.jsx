import StockEntryPreview from "./stockEntryPreview/stockEntryPreview.component";

const StockEntry = ({Product, LatestStock, stockInfo, LatestDTCSales, totalSRSales}) => {
    const openStock = stockInfo && stockInfo.currentStock;
    const totSales = LatestDTCSales && totalSRSales && (parseInt(LatestDTCSales) + parseInt(totalSRSales)); 
    const currStock = (openStock - totSales) || 0;

    return(
        <StockEntryPreview Product = {Product} LatestStock = {LatestStock} openStock = {openStock} totSales = {totSales} currStock = {currStock}></StockEntryPreview>
    )
}; export default StockEntry;