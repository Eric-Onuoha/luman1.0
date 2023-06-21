import "./singleEntryPreview.styles.scss";
import { Col } from "bootstrap-4-react/lib/components/layout";

const SingleEntryPreview = ({type}) => {
    return(
        <Col className ="dashboardEntry">
            <p className=""></p>
            <p className="displayHeader">Sold from sales point</p>
            <div id="breadSkews">
                <h4>{type} - <input name={type + "DTC"} type="text" /></h4>
             </div>
        </Col>
    )
}; export default SingleEntryPreview;