import "./productRecordsPreview.styles.scss";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";

import AddRow from "../../../assets/images/add.png";
import DeleteRow from "../../../assets/images/remove.png";
import { useState } from "react";


const ProductRecordsPreview = ({Products, Bread, Snacks}) => {

    const [productsRow, setProductsRow] = useState([]);
    const [productsType, setProductType] = useState("bread");
    const [productsName, setProductName] = useState([]);

    const changeProductType = (e) => {
        setProductType(e.target.value);
    }

    const deleteRowFunc = () => {
        let newProductsRow = [...productsRow];
        newProductsRow.pop();
        setProductsRow([...newProductsRow]);
    }

    const addRowFunc = () => {
        setProductsRow(oldProductsRow => [...oldProductsRow,             
            <Row id="products">
                <h4>Product Type - <span> </span> 
                    <select name="productType" onChange={changeProductType}>
                    {Products.map((product) => (
                        <option value={product}>{product}</option>
                        ))}
                    </select>
                </h4>
                <h4>Product Name - <span> </span> 
                    {productsType === "bread" ? (
                        <select name="productType">
                        {Bread.bread.map((breadName) => (
                            <option value={breadName}>{breadName}</option>
                        ))}
                        </select>
                    ) : (
                        <select name="productType">
                        {Snacks.snacks.map((snackName) => (
                            <option value={snackName}>{snackName}</option>
                        ))}
                        </select>
                    )}
                </h4>
                <h4>DTC Price - <input type="text" name="productPriceDTC" /></h4>
                <h4>Sales Rep Price - <input type="text" name="productPriceSR" /></h4>
            </Row>
        ]);
    }

    return(
        <Col className="productRecords col-12">
            <Row id="products">
                <img title="Delete Product Change" src={DeleteRow} onClick={deleteRowFunc}/>
                <h4>Product Type - <span> </span> 
                    <select name="productType" defaultValue={"default"} onChange={changeProductType}>
                        <option value="default" disabled >Select Product</option>
                        {Products.map((productName) => (
                        <option value={productName}>{productName}</option>
                        ))}
                    </select>
                </h4>
                <h4>Product Name - <span> </span> 
                    {productsType === "bread" ? (
                        <select name="productName" defaultValue={"default"} required>
                            <option value="default" disabled >Select Bread</option>
                        {Bread.bread.map((breadName) => (
                            <option value={breadName}>{breadName}</option>
                        ))}
                        </select>
                    ) : (
                        <select name="productType" defaultValue={"default"}>
                            <option value="default" disabled >Select Snack</option>
                        {Snacks.snacks.map((snackName) => (
                            <option value={snackName}>{snackName}</option>
                        ))}
                        </select>
                    )}
                </h4>
                <h4>DTC Price - <input type="text" name="productPriceDTC" /></h4>
                <h4>Sales Rep Price - <input type="text" name="productPriceSR" /></h4>
                <img title="Add another product change" src={AddRow} onClick={addRowFunc}/>
            </Row>
            {productsRow}
        </Col>
    )
}; export default ProductRecordsPreview;