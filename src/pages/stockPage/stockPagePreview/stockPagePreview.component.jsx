import "./stockPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import Table from "bootstrap-4-react/lib/components/table";
import { useSelector } from "react-redux";
import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import StockEntry from "../../../components/stockEntry/stockEntry.component";
import { getCurrentSales } from "../../../utils/getStock";
import { useState } from "react";

const StockPagePreview = ({bread}) => {
    const OperationsMenuType = useSelector((state) => state.operationsMenu.operationsMenu);
    const StockData = useSelector((state) => state.stock.stock) || {};
    const [product, setProduct] = useState(" ");

    const changeProduct = (e) => {
        setProduct(e.target.value)
    }

    const currentSales = getCurrentSales();

    // const totalSales

    return(
        <Container id="stockPagePreviewComponent" fluid="true">
            <OperationsMenu menu = {["Update Stock", "View Stock"]}></OperationsMenu>
            {OperationsMenuType === "View" ? 
            (
                <>
                    <Table striped bordered hover responsive className = "bg-light"> 
                        <thead responsive>
                            <tr id="tableHeader" className="bg-dark">
                                <th>Date</th>
                                <th>Type</th>
                                <th>Openning Stock</th>
                                <th>Quantity Produced</th>
                                <th>Total Sales</th>
                                <th>Current Stock</th>
                                <th>Counted Stock</th>
                                <th>Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(StockData).reverse().map((stockDate) => (
                            <>
                                <tr>
                                    <td rowSpan = {2} >{stockDate}</td>
                                    <td>Family</td>
                                    <td>{StockData[stockDate]["familyBread"]["openningStock"]}</td>
                                    <td>{StockData[stockDate]["familyBread"]["quantityProduced"]}</td>
                                    <td>{StockData[stockDate]["familyBread"]["totalSales"]}</td>
                                    <td>{StockData[stockDate]["familyBread"]["currentStock"]}</td>
                                    <td>{StockData[stockDate]["familyBread"]["countedStock"]}</td>
                                    <td>{StockData[stockDate]["familyBread"]["comment"]}</td>
                                </tr>
                                <tr>
                                    <td>Mini</td>
                                    <td>{StockData[stockDate]["miniBread"]["openningStock"]}</td>
                                    <td>{StockData[stockDate]["miniBread"]["quantityProduced"]}</td>
                                    <td>{StockData[stockDate]["miniBread"]["totalSales"]}</td>
                                    <td>{StockData[stockDate]["miniBread"]["currentStock"]}</td>
                                    <td>{StockData[stockDate]["miniBread"]["countedStock"]}</td>
                                    <td>{StockData[stockDate]["miniBread"]["comment"]}</td>
                                </tr>
                                {/* <tr>
                                    <td>Small</td>
                                    <td>{StockData[stockDate]["smallBread"]["openningStock"]}</td>
                                    <td>{StockData[stockDate]["smallBread"]["quantityProduced"]}</td>
                                    <td>{StockData[stockDate]["smallBread"]["totalSales"]}</td>
                                    <td>{StockData[stockDate]["smallBread"]["currentStock"]}</td>
                                    <td>{StockData[stockDate]["smallBread"]["countedStock"]}</td>
                                    <td>{StockData[stockDate]["smallBread"]["comment"]}</td>
                                </tr> */}
                            </>
                            ))}
                        </tbody>
                    </Table>
                </>
            )
            :
            (
                <>
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
                            <StockEntry Product = {product} totSales = {currentSales.totalFamily}></StockEntry>
                        ) : (product === "miniBread") ? (
                            <StockEntry Product = {product} totSales = {currentSales.totalMini}></StockEntry>
                        ) : (product === "smallBread") ? (
                            <StockEntry Product = {product} totSales = {currentSales.totalSmall}></StockEntry>
                        ) : (
                            <p></p>
                        ))}
                    </Row>
                </>
            )
            }
        </Container>
    )
}; export default StockPagePreview;