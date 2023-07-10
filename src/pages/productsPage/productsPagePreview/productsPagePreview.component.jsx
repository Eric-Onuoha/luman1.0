import "./productsPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import { useState } from "react";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import ProductRecords from "../../../components/productRecords/productRecords.component";
import { addCollectionAndDocuments } from "../../../firestore/postToFirestore.utils";



const ProductsPagePreview = () => {
    let dateObj = new Date();
    let year = dateObj.getUTCFullYear();
    const [formResponse, setFormResponse] = useState([]);
    const {productType, productName, productPriceDTC, productPriceSR} = formResponse;
    const Products = {"bread": {"familyBread": {}, "miniBread": 40, "smallBread": 80}, "snacks": {"meatpie": 20, "puffpuff": 10, "doughnut": 5}};
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formResponse.length !== 0 && formResponse.productType !== undefined && formResponse.productName !== undefined){
            Object.assign(Products[productType], {[productName]: {productPriceDTC, productPriceSR}});
            console.log(Products);
            let date = getMonthAndDay();
            try{
                addCollectionAndDocuments(`${"Products"+""+year}`, date, Products);
            } catch (err){
                alert("Something went wrong, please refresh and try again" + err);
            }
        }
    }

    const getMonthAndDay = () => {
        let month = dateObj.getUTCMonth() + 1; //months from 1-12
        let months = ['january', 'february', 'march', 'april',
                'may', 'june', 'july', 'august', 'september',
                'october', 'november', 'december'];
        let day = dateObj.getUTCDate();
        return (months[month - 1] + "" + day);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormResponse({...formResponse, [name]: value});
    }

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
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <h4>Chnage product Prices from: <input type="date"/></h4>
                <Row id="productRecords">
                    <ProductRecords></ProductRecords>
                </Row>
                <button type="submit">Update Product List</button>
            </form>
        </Container>
    )
}; export default ProductsPagePreview;