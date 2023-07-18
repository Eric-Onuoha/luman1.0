import "./productsPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import { useState } from "react";
import { useDispatch } from "react-redux";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import ProductRecords from "../../../components/productRecords/productRecords.component";
import { addProduct } from "../../../reduxStore/reducers/productList.reducer";
import { getDate } from "../../../utils/getMonthAndDay";
// import { updateFamilyPrice } from "../../../reduxStore/reducers/productList.reducer";
import { addCollectionAndDocuments } from "../../../firestore/postToFirestore.utils";


const ProductsPagePreview = ({LatestProducts, LatestDate}) => {
    const dispatch = useDispatch();
    const [changedDate, setChangedDate] = useState(" ");
    const [formResponse, setFormResponse] = useState([]);
    const {productType, productName, productPriceDTC, productPriceSR} = formResponse;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formResponse.length !== 0 && formResponse.productType !== undefined && formResponse.productName !== undefined){
            const productPrices = {productPriceDTC, productPriceSR}
            let date = getDate(changedDate);         
            try{
                // addCollectionAndDocuments("Products", date, ProductFormat);
                dispatch(addProduct({date, productType, productName, productPrices}));
            } catch (err){
                alert("Something went wrong, please refresh and try again" & err);
            }
        }
    }

    const handleDateChange = (e) => {
        const newDate = new Date(e.target.value);
        setChangedDate(newDate);
    }

    // const getDate = () => {
    //     let year = changedDate.getUTCFullYear();
    //     let month = changedDate.getUTCMonth() + 1;
    //     let day = changedDate.getUTCDate();
    //     let months = ['january', 'february', 'march', 'april',
    //             'may', 'june', 'july', 'august', 'september',
    //             'october', 'november', 'december'];
    //     return (year + "" + months[month - 1] + "" + day);
    // }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormResponse({...formResponse, [name]: value});
    }

    return(
        <Container id="productsPagePreviewComponent" fluid="true">
            <OperationsMenu menu = {["Update Product Prices", "View Previews Prices"]}></OperationsMenu>

            <h4>Products and Current Prices since {LatestDate || " "}:</h4>
            <Row id="oldPrices">
                <Col>
                <h4>Family Loaf:</h4>
                <h4>DTC: {LatestProducts.bread && LatestProducts.bread.familyBread.productPriceDTC}</h4>
                <h4>Sales Rep: {LatestProducts.bread && LatestProducts.bread.familyBread.productPriceSR}</h4>
                </Col>
                <Col>
                <h4>Mini Loaf: </h4>
                <h4>DTC: {LatestProducts.bread && LatestProducts.bread.miniBread.productPriceDTC }</h4>
                <h4>Sales Rep: {LatestProducts.bread && LatestProducts.bread.miniBread.productPriceSR }</h4>
                </Col>
                <Col>
                <h4>Small Loaf:</h4>
                <h4>DTC: {LatestProducts.bread && LatestProducts.bread.smallBread.productPriceDTC }</h4>
                <h4>Sales Rep: {LatestProducts.bread && LatestProducts.bread.smallBread.productPriceSR }</h4>
                </Col>
            </Row>
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <h4>Chnage product Prices from: <input type="date" onChange={handleDateChange} required/></h4>
                <Row id="productRecords">
                    <ProductRecords></ProductRecords>
                </Row>
                <button type="submit">Update Product List</button>
            </form>
        </Container>
    )
}; export default ProductsPagePreview;