import "./productRecordsPreview.styles.scss";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";

import AddRow from "../../../assets/images/add.png";
import DeleteRow from "../../../assets/images/remove.png";
import { useEffect, useState } from "react";

// const handleSubmit = (event) => {
//     event.preventDefault();
//     alert("Test");
// }

// const handleFormSubmit = (e) => {
//     e.preventDefault();
// }


const ProductRecordsPreview = () => {

    const [productsRow, setProductsRow] = useState([]);
    useEffect(() => {
        addRowFunc();
    }, [])

    const addRowFunc = () => {
        console.log(productsRow);
        setProductsRow(oldProductsRow => [...oldProductsRow, <Row id="products">
        <img title="Delete Product Change" src={DeleteRow}/>
            <h4>Product Type - <select name="productType">
                    <option value="Bread">Bread</option>
                    <option value="Snacks">Snacks</option>
                </select></h4>
            <h4>Product Name - <input name="productName" type="text" /></h4>
            <h4>DTC Price - <input type="text" name="productPriceDTC" /></h4>
            <h4>Sales Rep Price - <input type="text" name="productPriceSR" /></h4>
            <img title="Add another product change" src={AddRow} onClick={addRowFunc}/>
         </Row>])
    }

    return(
        <Col className="productRecords col-12">
            {/* <form onSubmit={handleSubmit}> */}
            {productsRow}
             {/* </form> */}
        </Col>
    )
}; export default ProductRecordsPreview;