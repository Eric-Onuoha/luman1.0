import { useSelector } from "react-redux";

const GetSRSales = () => {
    return useSelector((state) => state.staffList.staffList) || {}
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

export const getCurrentStaff = () => {
    const staffList = GetSRSales();
    const activeStaff = [];

    for (const name in staffList){
        if(staffList[name]['department'] != "Fired"){
            activeStaff.push(name)
        }
    }

    return activeStaff;
}