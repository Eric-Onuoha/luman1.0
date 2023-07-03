import "./productsPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import ProductRecords from "../../../components/productRecords/productRecords.component";

const ProductsPagePreview = () => {
    return(
        <Container id="productsPagePreviewComponent" fluid="true">
            <OperationsMenu menu = "Products"></OperationsMenu>

            <h4>Products and Current Prices since 12th April:</h4>
            <Row id="oldPrices">
                <Col>
                <h4>Family Loaf:</h4>
                <h4>DTC: 1000</h4>
                <h4>Sales Rep: 870</h4>
                </Col>
                <Col>
                <h4>Mini Loaf:</h4>
                <h4>DTC: 700</h4>
                <h4>Sales Rep: 600</h4>
                </Col>
                <Col>
                <h4>Small Loaf:</h4>
                <h4>DTC: 300</h4>
                <h4>Sales Rep: 240</h4>
                </Col>
            </Row>
            <form>
                <h4>Chnage product Prices from: <input type="date"/></h4>
                <Row id="productRecords">
                    <ProductRecords></ProductRecords>
                </Row>
            </form>
        </Container>
    )
}; export default ProductsPagePreview;