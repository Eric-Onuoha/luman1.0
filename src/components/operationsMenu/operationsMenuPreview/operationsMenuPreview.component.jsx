import "./operationsMenuPreview.styles.scss";
import { Col } from "bootstrap-4-react/lib/components/layout";

const OperationsMenuPreview = ({OperationsMenuItems}) => {
    return(
        <Col id="operationsMenuPreviewComponent">
            <div id="operationsMenuItems">
                <p>{OperationsMenuItems[0]}</p>
                <p>{OperationsMenuItems[1]}</p>
            </div>
        </Col>
    )
}; export default OperationsMenuPreview;