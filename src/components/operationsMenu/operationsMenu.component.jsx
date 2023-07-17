import OperationsMenuPreview from "./operationsMenuPreview/operationsMenuPreview.component";

const OperationsMenu = ({menu}) => {
    // let OperationsMenuItems = ["Menu Item 1", "Menu Item 2"];
    // if (menu === "Sales"){
    //     OperationsMenuItems = ["View Records","Enter Records"];
    // }
    return(
        <OperationsMenuPreview OperationsMenuItems = {menu}></OperationsMenuPreview>
    )
}; export default OperationsMenu;