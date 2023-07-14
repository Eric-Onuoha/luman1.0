import ProductsPagePreview from "./productsPagePreview/productsPagePreview.component";
import { useSelector } from "react-redux";


const ProductsPage = () => {
    const Products = useSelector((state) => state.productList.productList) || {};
    console.log(Products);
    const LatestDate = Object.keys(Products).sort((a,b)=> (b-a));
    const LatestProducts = Products[LatestDate[0]] || {};

    return(
        <ProductsPagePreview LatestProducts = {LatestProducts} ></ProductsPagePreview>
    )
}; export default ProductsPage;