import "./operationsMenuPreview.styles.scss";
import { Col } from "bootstrap-4-react/lib/components/layout";

const OperationsMenuPreview = ({OperationsMenuItems}) => {
    return(
        <Col id="operationsMenuPreviewComponent">
            <div id="operationsMenuItems">
            {OperationsMenuItems.map((item) => (
                    <p key={item}>{item}</p>
                ))}
            </div>
        </Col>
    )
}; export default OperationsMenuPreview;