import DebtEntryPreview from "./debtEntryPreview/debtEntryPreview.component";
import { useSelector } from "react-redux";
import { getCurrentStaff } from "../../utils/getStaff";

const DebtEntry = () => {
    const Utilities = useSelector((state) => state.utilities.utilities) || {};
    const Partners =  (Utilities.partners && Utilities.partners.partners) || [];
    const currentStaff = getCurrentStaff();

    currentStaff.forEach((staff) => {
        if(Partners.includes(staff.replace(/_/g, " "))){
            currentStaff.pop(staff)
        }
    })

    const currentPartners = [...Partners, ...currentStaff];


    return(
        <DebtEntryPreview Partners = {currentPartners}></DebtEntryPreview>
    )
}; export default DebtEntry;