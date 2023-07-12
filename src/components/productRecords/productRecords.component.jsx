import { useEffect } from "react";
import ProductRecordsPreview from "./productRecordsPreview/productRecordsPreview.component";

const ProductRecords = () => {

    // useEffect(()=>{
    //     getMultipleDocuments("Products").then((ProductsDB) => dispatch(addNewsUpdates(NewsUpdatesDB)));
    // }, []);

    const Products = ["bread", "snacks"];
    const ProductList = [{"bread":["familyBread", "miniBread", "smallBread"]}, {"snacks":["meatpie", "puffpuff", "doughnut"]}];
    const bread = ProductList[0];
    const snacks = ProductList[1];
    return(
        <ProductRecordsPreview Products = {Products} Bread = {bread} Snacks = {snacks}></ProductRecordsPreview>
    )
}; export default ProductRecords;