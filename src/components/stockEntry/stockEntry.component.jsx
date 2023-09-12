import StockEntryPreview from "./stockEntryPreview/stockEntryPreview.component";

const StockEntry = ({Product, totSales}) => {
    return(
        <StockEntryPreview Product = {Product} totSales={totSales}></StockEntryPreview>
    )
}; export default StockEntry;