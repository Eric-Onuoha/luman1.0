import StockEntryPreview from "./stockEntryPreview/stockEntryPreview.component";

const StockEntry = ({stockInfo, LatestDTCSales, totalSRSales}) => {
    console.log(totalSRSales);
    const openStock = stockInfo && stockInfo.openningStock;
    const totSales = LatestDTCSales && totalSRSales && (parseInt(LatestDTCSales.familyDTC) + parseInt(totalSRSales)); //needs to be plus SR sales - add total sr sales to sr submission
    const currStock = (openStock - totSales);

    return(
        <StockEntryPreview openStock = {openStock} totSales = {totSales} currStock = {currStock}></StockEntryPreview>
    )
}; export default StockEntry;