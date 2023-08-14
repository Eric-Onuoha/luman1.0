import "./stockPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import StockEntry from "../../../components/stockEntry/stockEntry.component";
import { useState } from "react";

const StockPagePreview = ({bread, LatestStockRecord, LatestDTCSales, totalSmallSales, totalMiniSales, totalFamilySales}) => {
    const [product, setProduct] = useState(" ");

    const changeProduct = (e) => {
        setProduct(e.target.value)
    }

    return(
        <Container id="stockPagePreviewComponent" fluid="true">
            <OperationsMenu menu = {["Update Stock", "View Stock"]}></OperationsMenu>
                <h4>Update Stock for: <select name="stockDate" defaultValue={"default"} onChange={changeProduct}>
                    <option disabled = {true} value="default">Select Product</option>
                    {bread.map((breadType) => (
                        <option key={breadType} name={breadType} value={breadType}>{breadType}</option>
                    ))}
                </select></h4>
                <Row id="stockRecords">
                    {product === " " ? (
                        <StockEntry stockInfo = {{}}></StockEntry>
                    ) : (product === "familyBread" ? (
                        <StockEntry Product = {product} LatestStock = {LatestStockRecord} stockInfo = {LatestStockRecord && LatestStockRecord.familyBread} LatestDTCSales = {LatestDTCSales && LatestDTCSales.familyDTC} totalSRSales = {totalFamilySales}></StockEntry>
                    ) : (product === "miniBread") ? (
                        <StockEntry Product = {product} LatestStock = {LatestStockRecord} stockInfo = {LatestStockRecord && LatestStockRecord.miniBread} LatestDTCSales = {LatestDTCSales && LatestDTCSales.miniDTC} totalSRSales = {totalMiniSales}></StockEntry>
                    ) : (product === "smallBread") ? (
                        <StockEntry Product = {product} LatestStock = {LatestStockRecord} stockInfo = {LatestStockRecord && LatestStockRecord.smallBread} LatestDTCSales = {LatestDTCSales && LatestDTCSales.smallDTC} totalSRSales = {totalSmallSales}></StockEntry>
                    ) : (
                        <p></p>
                    ))}
                </Row>
        </Container>
    )
}; export default StockPagePreview;