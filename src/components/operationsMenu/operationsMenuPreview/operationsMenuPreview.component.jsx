import "./operationsMenuPreview.styles.scss";
import { Col } from "bootstrap-4-react/lib/components/layout";

import { updateOperationsMenu } from "../../../reduxStore/reducers/operationsMenu";
import { useDispatch } from "react-redux";

const OperationsMenuPreview = ({OperationsMenuItems}) => {
    const dispatch = useDispatch();

    const setOperationsMenu = (e) => {
        const operationsMenu = e.target.id;
        dispatch(updateOperationsMenu(operationsMenu));
    }

    return(
        <Col id="operationsMenuPreviewComponent">
            <div id="operationsMenuItems">
            {OperationsMenuItems.map((item) => (
                    <p id={item.match(/^([^ ]+)/)[0]} key={item} onClick={setOperationsMenu}>{item}</p>
                ))}
            </div>
        </Col>
    )
}; export default OperationsMenuPreview;