import StockEntryPreview from "./stockEntryPreview/stockEntryPreview.component";

const StockEntry = ({Product, LatestStock, stockInfo, LatestDTCSales, totalSRSales}) => {
    const openStock = stockInfo && stockInfo.currentStock;
    const totSales = (parseInt(LatestDTCSales) + parseInt(totalSRSales)) || 0; 
    const currStock = (openStock - totSales) || 0;
    console.log(LatestDTCSales);

    return(
        <StockEntryPreview Product = {Product} LatestStock = {LatestStock} openStock = {openStock} totSales = {totSales} currStock = {currStock}></StockEntryPreview>
    )
}; export default StockEntry;