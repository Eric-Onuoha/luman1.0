import ProductsPagePreview from "./productsPagePreview/productsPagePreview.component";
import { useSelector } from "react-redux";


const ProductsPage = () => {
    const Products = useSelector((state) => state.productList.productList) || {};
    
    const regex = /^(\d{4})(.*)/;
    const LatestDate = Object.keys(Products).sort((a,b) => {
        let dateA = new Date(a.replace(regex, "$1 $2"));
        let dateB = new Date(b.replace(regex, "$1 $2"));
        return(dateB-dateA);
    });

    const LatestProducts = Products[LatestDate[0]] || {};

    return(
        <ProductsPagePreview LatestProducts = {LatestProducts} ></ProductsPagePreview>
    )
}; export default ProductsPage;