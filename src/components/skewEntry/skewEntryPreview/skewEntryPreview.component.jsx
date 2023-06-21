import "./skewEntryPreview.styles.scss";
import { Col } from "bootstrap-4-react/lib/components/layout";

const SkewEntryPreview = ({name}) => {
    return(
        <Col className ="dashboardEntry">
            <p className=""></p>
            <p className="displayHeader">{name}</p>
            <div id="breadSkews">
                <h4>Family - <input name="familySalesRep" type="text" /></h4>
                <h4>Mini - <input type="text" /></h4>
                <h4>Small - <input type="text" /></h4>
             </div>
        </Col>
    )
}; export default SkewEntryPreview;