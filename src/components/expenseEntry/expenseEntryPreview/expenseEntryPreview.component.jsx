import "./expenseEntryPreview.styles.scss";
import { Row, Col } from "bootstrap-4-react/lib/components/layout";

import { useState } from "react";

const ExpenseEntryPreview = () => {

    const [category, setCategory] = useState(" ");
    const changeCategory = (e) => {
        setCategory(e.target.value);
    }

    return(
        <Col className="expenseEntry col-12">
            <Row id="expenses">
                <h4>Category - <select name="category" defaultValue={"default"} onChange={changeCategory} required = {true}>
                        <option value="default" disabled = {true}>Select Category</option>
                        <option value="ingredient">Ingredient</option>
                        <option value="tax">Tax</option>
                        <option value="diesel">Diesel</option>
                        <option value="salary">Salary</option>
                        <option value="gas">Gas</option>
                        <option value="waterbill">Water Bill</option>
                        <option value="lightbill">Light Bill</option>
                        <option value="nylonBag">Nylon Bag</option>
                        <option value="dataBundle">Data Bundle</option>
                        <option value="TopesExpense">Topes Approved Expense</option>
                        <option value="miscellaneous">Miscellaneous</option>
                    </select>
                </h4>
                {category !== "ingredient" ? (
                    <h4>Item - <input name="item" type="text" required = {true} /></h4>
                ) : (
                    <h4>Ingredient - <select name="ingredient" defaultValue={"default"} required = {true}>
                            <option value="default" disabled = {true}>Select Ingredient</option>
                            <option value="flour">Flour</option>
                            <option value="milk">Milk</option>
                            <option value="sugar">Sugar</option>
                            <option value="salt">Salt</option>
                            <option value="preservative">Preservative</option>
                            <option value="improver">Improver</option>
                            <option value="softener">Softener</option>
                            <option value="yeast">Yeast</option>
                            <option value="butter">Butter</option>
                            <option value="oil">Oil</option>
                            <option value="flavouring">Flavouring</option>
                        </select>
                    </h4>
                )}
                <h4>Quantity - <input type="text" name="quantity" required = {true}/></h4>
                <h4>Amount - <input type="text" id="amount" name="amount" required = {true} /></h4>
                <h4>Payment Method - <select name="paymentBy" defaultValue={"default"} required = {true}>
                        <option value="default" disabled = {true}>Select Method</option>
                        <option value="Cash">Cash</option>
                        <option value="Bank">Bank</option>
                        <option value="External">External</option>
                    </select>
                </h4>
             </Row>
        </Col>
    )
}; export default ExpenseEntryPreview;