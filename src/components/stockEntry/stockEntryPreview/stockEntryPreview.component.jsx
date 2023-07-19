import { useState } from "react";
import "./stockEntryPreview.styles.scss";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";

const StockEntryPreview = ({openStock, totSales, currStock}) => {
    const [amountProduced, setAmountProduced] = useState(0);

    const addToStock = (e) => {
        {e.target.value == "" ? setAmountProduced(0) : setAmountProduced(e.target.value)}
    }

    return(
        <Col className="stockEntry col-12">
            <Row id="stock">
                <Col>
                    <h4>Openning Stock <input type="text" disabled = {true} value={openStock} name="openningStock"/></h4>               
                    <h4>Total Sales No. <input type="text" disabled = {true} value={totSales} name="totalSales"/></h4>
                    <h4>Current Stock <input type="text" disabled = {true} value={currStock + parseInt(amountProduced)} name="currentStock"/></h4>  
                </Col>

                <Col>
                    <h4>Production <input type="text" name="quantityProduced" onChange={addToStock}/></h4>          
                    <h4>Counted Stock <input type="text" name="countedStock"/></h4>      
                    <h4>Comments <textarea rows={6} cols={40} type="text" name="comment"/></h4>                
                </Col>

             </Row>
        </Col>
    )
}; export default StockEntryPreview;