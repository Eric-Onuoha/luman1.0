import "./skewDisplayPreview.styles.scss";
import { Col } from "bootstrap-4-react/lib/components/layout";

const SkewDisplayPreview = ({heading, indicator, skewData}) => {

    const expenseCategory = Object.keys(skewData).filter(element => element !== "ingredient");
    return(
        <Col className ="dashboardDisplay">
            <p className={indicator}></p>
            <p className="displayHeader">{heading}</p>
            <div id="skews">
            {
                expenseCategory.map((skew) => (
                    <p><span className="category">{skew}</span> - {skewData[skew].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                ))
            }
             </div>
        </Col>
    )
}; export default SkewDisplayPreview;