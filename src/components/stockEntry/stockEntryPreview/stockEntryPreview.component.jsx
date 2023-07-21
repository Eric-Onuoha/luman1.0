import { useState } from "react";
import "./stockEntryPreview.styles.scss";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";
import { getDate } from "../../../utils/getMonthAndDay";
import { useDispatch } from "react-redux";

import { addStock } from "../../../reduxStore/reducers/stock.reducer";

const StockEntryPreview = ({Product, LatestStock, openStock, totSales, currStock}) => {
    const dispatch = useDispatch();
    const todaysDate = new Date();
    const [amountProduced, setAmountProduced] = useState(0);
    const [stockForm, setStockForm] = useState([]);
    const {openningStock, totalSales, currentStock, quantityProduced, countedStock, comment} = stockForm;

    const handleStockChange = (e) => {
        const {name, value} = e.target;
        setStockForm({...stockForm, [name]: value});


    }

    const handleStockSubmit = (e) => {
        e.preventDefault();

        if (stockForm.length !== 0){
            const currentDate = getDate(todaysDate);
            stockForm.openningStock = openStock;
            stockForm.totalSales = totSales;
            stockForm.currentStock = currStock + parseInt(amountProduced);
            const newStock = {
                ...LatestStock,
                [Product]: {
                    ...stockForm
                }
            }
            try{
                dispatch(addStock({newStock, currentDate}));
            } catch(err){
                console.log(err);
            }
        }
    }

    const addToStock = (e) => {
        {e.target.value == "" ? setAmountProduced(0) : setAmountProduced(e.target.value)}
    }

    return(
        <Col className="stockEntry col-12">
            <form onChange={handleStockChange} onSubmit={handleStockSubmit}>
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
             <button type="submit">Submit Stock Record</button>
             </form>
        </Col>
    )
}; export default StockEntryPreview;