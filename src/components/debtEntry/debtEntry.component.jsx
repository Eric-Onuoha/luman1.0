import DebtEntryPreview from "./debtEntryPreview/debtEntryPreview.component";
import { useSelector } from "react-redux";

const DebtEntry = () => {
    const Utilities = useSelector((state) => state.utilities.utilities) || {};
    const Partners =  (Utilities.partners && Utilities.partners.partners) || [];

    return(
        <DebtEntryPreview Partners = {Partners}></DebtEntryPreview>
    )
}; export default DebtEntry;