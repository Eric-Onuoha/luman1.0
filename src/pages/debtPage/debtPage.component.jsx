import DebtPagePreview from "./debtPagePreview/debtPagePreview.component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMultipleDocuments } from "../../firestore/getFromFirestore.utils";

const DebtPage = () => {
    const dispatch = useDispatch();

    const DebtorsDB = useSelector((state) => state.debtRecord.debtRecord) || {};
    // const DebtorName = DebtorsDB && Object.keys(DebtorsDB);

    return(
        <DebtPagePreview DebtorsDB = {DebtorsDB}></DebtPagePreview>
    )
}; export default DebtPage;