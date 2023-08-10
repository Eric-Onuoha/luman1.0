import { useSelector } from "react-redux";

export const GetDistributors = () => {
    const StaffDB = useSelector((state)=> state.staffList.staffList) || {};
    const distributors = [];
    Object.keys(StaffDB).map((staff)=>{
        if(StaffDB[staff].department === "Distributor"){
            distributors.push(staff);
        }
    });

    return distributors;
}