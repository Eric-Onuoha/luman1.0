import DebtPagePreview from "./debtPagePreview/debtPagePreview.component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMultipleDocuments } from "../../firestore/getFromFirestore.utils";

import { updateUtilities } from "../../reduxStore/reducers/utilities.reducer";

const DebtPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getMultipleDocuments("Utilities").then((UtilitiesDB) => dispatch(updateUtilities(UtilitiesDB)));
      }, []);

    return(
        <DebtPagePreview></DebtPagePreview>
    )
}; export default DebtPage;