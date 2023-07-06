import "./productRecordsPreview.styles.scss";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";

import AddRow from "../../../assets/images/add.png";
import DeleteRow from "../../../assets/images/remove.png";
import { useState } from "react";


const ProductRecordsPreview = () => {

    const [productsRow, setProductsRow] = useState([]);

    const deleteRowFunc = (x) => {
        // const rowToRemove = e.target.parentElement;
        let newProductsRow = [...productsRow];
        console.log(newProductsRow);
        newProductsRow.pop();
        setProductsRow([...newProductsRow]);
    }

    const addRowFunc = () => {
        setProductsRow(oldProductsRow => [...oldProductsRow,             
        <Row id="products">
            <h4>Product Type - <select name="productType">
                    <option value="Bread">Bread</option>
                    <option value="Snacks">Snacks</option>
                </select></h4>
            <h4>Product Name - <input name="productName" type="text" /></h4>
            <h4>DTC Price - <input type="text" name="productPriceDTC" /></h4>
            <h4>Sales Rep Price - <input type="text" name="productPriceSR" /></h4>
        </Row>
        ]);
         console.log(productsRow);
    }

    return(
        <Col className="productRecords col-12">
            <Row id="products">
                <img title="Delete Product Change" src={DeleteRow} onClick={deleteRowFunc}/>
                <h4>Product Type - <select name="productType">
                        <option value="Bread">Bread</option>
                        <option value="Snacks">Snacks</option>
                    </select></h4>
                <h4>Product Name - <input name="productName" type="text" /></h4>
                <h4>DTC Price - <input type="text" name="productPriceDTC" /></h4>
                <h4>Sales Rep Price - <input type="text" name="productPriceSR" /></h4>
                <img title="Add another product change" src={AddRow} onClick={addRowFunc}/>
            </Row>
            {productsRow}
        </Col>
    )
}; export default ProductRecordsPreview;