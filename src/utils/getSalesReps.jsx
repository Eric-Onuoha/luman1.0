import { useSelector } from "react-redux";

const GetSRSales = () => {
    return useSelector((state) => state.salesRepRecord.salesRepRecord)
}

export const getSalesReps = () => {
    const SRSales = GetSRSales();
    let names = []

    for (const date in SRSales){
        for (const name in SRSales[date]){
            if(!names.includes(name)){
                names.push(name);
            }
        }
    }

    return names;
}