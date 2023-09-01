import "./skewDisplayPreview.styles.scss";
import { Col } from "bootstrap-4-react/lib/components/layout";

const SkewDisplayPreview = ({heading, indicator, skewData}) => {

    return(
        <Col className ="dashboardDisplay">
            <p className={indicator}></p>
            <p className="displayHeader">{heading}</p>
            <div id="breadSkews">
                <h4>Family - {skewData.family || skewData.familySalesRep}</h4>
                <h4>Mini - {skewData.mini || skewData.miniSalesRep}</h4>
                <h4>Small - {skewData.small || skewData.smallSalesRep}</h4>
             </div>
        </Col>
    )
}; export default SkewDisplayPreview;