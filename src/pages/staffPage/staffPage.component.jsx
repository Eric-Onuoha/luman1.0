import StaffPagePreview from "./staffPagePreview/staffPagePreview.component";
import { useSelector } from "react-redux";

const StaffPage = () => {

    const Staff = useSelector((state) => state.staffList.staffList) || {};
    const StaffMembers = Object.keys(Staff);
    console.log(StaffMembers);

    return(
        <StaffPagePreview StaffMembers = {StaffMembers}></StaffPagePreview>
    )
}; export default StaffPage;