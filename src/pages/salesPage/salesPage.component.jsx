import SalesPagePreview from "./salesPagePreview/salesPagePreview.component";
import { useSelector } from "react-redux";


const SalesPage = () => {
    const StaffDB = useSelector((state)=> state.staffList.staffList) || {};
    const distributors = [];
    Object.keys(StaffDB).map((staff)=>{
        if(StaffDB[staff].department === "Distributor"){
            distributors.push(staff);
        }
    });

    return(
        <SalesPagePreview distributors = {distributors}></SalesPagePreview>
    )
}; export default SalesPage;