import { useSelector } from "react-redux";

const GetSRSales = () => {
    return useSelector((state) => state.staffList.staffList)
}

export const getSalesReps = () => {
    const SRs = GetSRSales();
    const activeSalesReps = [];

    for (const name in SRs){
        if(SRs[name]['department'] == "Distributor"){
            activeSalesReps.push(name)
        }
    }

    return activeSalesReps;
}