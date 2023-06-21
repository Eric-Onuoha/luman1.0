import "./singleDisplayPreview.styles.scss";
import { Col } from "bootstrap-4-react/lib/components/layout";

const SingleDisplayPreview = ({indicator, heading, data}) => {
    return(
        <Col className ="dashboardDisplay">
            <p className={indicator}></p>
            <p className="displayHeader">{heading}</p>
            <h2>{data}</h2>
        </Col>
    )
}; export default SingleDisplayPreview;