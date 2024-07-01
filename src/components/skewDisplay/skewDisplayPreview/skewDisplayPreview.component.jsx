import "./skewDisplayPreview.styles.scss";
import { Col } from "bootstrap-4-react/lib/components/layout";
import { Fragment } from "react";
import Table from "bootstrap-4-react/lib/components/table";

const SkewDisplayPreview = ({heading, indicator, skewData}) => {

    const expenseCategory = Object.keys(skewData).filter(element => element !== "ingredient" && element !== "salary");

    const expenseBudget = {
        "dataBundle": 12000,
        "miscellaneous": 260000,
        "TopesExpense": 120000,
        "aramansExpense": 120000,
        "nylonBag": 10000,
        "diesel": 125000,
        "gas": 104000,
        "lightbill": 20000
    }

    return(
        <Col className ="dashboardDisplay">
            <p className={indicator}></p>
            <p className="displayHeader">{heading}</p>
            <div id="skews">
                    <Table bordered hover responsive = {true} className = "bg-light"> 
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Category</th>
                                <th>Amount Spent</th>
                                <th>Budget</th>
                            </tr>
                        </thead>
                        <tbody>
                        {expenseCategory.map((skew, i) => (
                            <Fragment key={i}>
                                <tr>
                                <td>{i+1}</td>
                                <td className="category">{skew}</td>
                                <td>{skewData[skew].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                {(expenseBudget[skew] >= skewData[skew]) ? (
                                    <td id={"indicatorGood"}>{expenseBudget[skew]}</td>
                                ) : (
                                    <td id={"indicatorBad"}>{expenseBudget[skew]}</td>
                                )}
                                </tr>
                            </Fragment>
                        ))}
                        </tbody>
                    </Table>
             </div>
        </Col>
    )
}; export default SkewDisplayPreview;