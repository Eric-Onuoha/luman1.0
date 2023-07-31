import { useSelector } from "react-redux";
import { getTodaysDate } from "./getMonthAndDay";

const currentDate = getTodaysDate();

export const GetCurrentDTCSalesQuantity = () => {
    const Sales = useSelector((state) => state.salesRecord.salesRecord) || {};

        const regex = /^(\d{4})(.*)/;
        const  DTCSales = Object.keys(Sales).sort((a,b) => {
        let dateA = new Date(a.replace(regex, "$1 $2"));
        let dateB = new Date(b.replace(regex, "$1 $2"));
        return(dateB-dateA);
    });

    const DTCQuantity = (Sales[DTCSales[currentDate]].familyDTC + Sales[DTCSales[currentDate]].miniDTC + Sales[DTCSales[currentDate]].smallDTC) || 0;

    return DTCQuantity
}

export const GetCurrentDTCFamilySalesQuantity = () => {
    const Sales = useSelector((state) => state.salesRecord.salesRecord) || {};

        const regex = /^(\d{4})(.*)/;
        const  DTCSales = Object.keys(Sales).sort((a,b) => {
        let dateA = new Date(a.replace(regex, "$1 $2"));
        let dateB = new Date(b.replace(regex, "$1 $2"));
        return(dateB-dateA);
    });

    // const DTCQuantity = Sales[DTCSales[currentDate]].familyDTC || 0;
    const DTCQuantity = Sales[DTCSales[0]] && Sales[DTCSales[0]].familyDTC;

    return DTCQuantity;
}

export const GetCurrentDTCMiniSalesQuantity = () => {
    const Sales = useSelector((state) => state.salesRecord.salesRecord) || {};

        const regex = /^(\d{4})(.*)/;
        const  DTCSales = Object.keys(Sales).sort((a,b) => {
        let dateA = new Date(a.replace(regex, "$1 $2"));
        let dateB = new Date(b.replace(regex, "$1 $2"));
        return(dateB-dateA);
    });

    // const DTCQuantity = Sales[DTCSales[currentDate]].familyDTC || 0;
    const miniDTCQuantity = Sales[DTCSales[0]] && Sales[DTCSales[0]].miniDTC;

    return miniDTCQuantity;
}

export const GetCurrentDTCSmallSalesQuantity = () => {
    const Sales = useSelector((state) => state.salesRecord.salesRecord) || {};

        const regex = /^(\d{4})(.*)/;
        const  DTCSales = Object.keys(Sales).sort((a,b) => {
        let dateA = new Date(a.replace(regex, "$1 $2"));
        let dateB = new Date(b.replace(regex, "$1 $2"));
        return(dateB-dateA);
    });

    // const DTCQuantity = Sales[DTCSales[currentDate]].familyDTC || 0;
    const smallDTCQuantity = Sales[DTCSales[0]] && Sales[DTCSales[0]].smallDTC;

    return smallDTCQuantity;
}

export const GetDTCSalesQuantityAtDay = (day, product) => {
    const Sales = useSelector((state) => state.salesRecord.salesRecord) || {};

        const regex = /^(\d{4})(.*)/;
        const  DTCSales = Object.keys(Sales);

        const daysIndex = DTCSales.indexOf(day);

        if (daysIndex < 0){
            return 0;
        }

    return Sales[DTCSales[daysIndex]][product];
}

