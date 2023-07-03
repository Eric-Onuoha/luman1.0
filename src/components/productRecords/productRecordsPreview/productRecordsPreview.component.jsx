import "./productRecordsPreview.styles.scss";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";

import AddRow from "../../../assets/images/add.png";
import DeleteRow from "../../../assets/images/remove.png";

const ProductRecordsPreview = () => {
    return(
        <Col className="productRecords col-12">
            <Row id="products">
            <img title="Delete Product Change" src={DeleteRow}/>
                <h4>Product Type - <select name="productType">
                        <option value="Bread">Bread</option>
                        <option value="Snacks">Snacks</option>
                    </select></h4>
                <h4>Product Name - <input name="ProductName" type="text" /></h4>
                <h4>DTC Price - <input type="text" /></h4>
                <h4>Sales Rep Price - <input type="text" /></h4>
                <img title="Add another product change" src={AddRow}/>
             </Row>
        </Col>
    )
}; export default ProductRecordsPreview;