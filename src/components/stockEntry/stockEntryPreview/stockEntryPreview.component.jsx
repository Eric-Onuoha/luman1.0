import "./stockEntryPreview.styles.scss";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";

const StockEntryPreview = () => {
    return(
        <Col className="stockEntry col-12">
            <Row id="stock">
                <Col>
                    <h4>Openning Stock <input type="text" disabled = "true" /></h4>               
                    <h4>Total Sales No. <input type="text" disabled = "true"/></h4>
                    <h4>Current Stock <input type="text" disabled = "true"/></h4>  
                </Col>

                <Col>
                    <h4>Production <input type="text" /></h4>          
                    <h4>Counted Stock <input type="text"/></h4>      
                    <h4>Comments <textarea rows={6} cols={40} type="text" id="amount" /></h4>                
                </Col>

             </Row>
        </Col>
    )
}; export default StockEntryPreview;