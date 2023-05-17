
import CareersPreview from "./careersPreview/careersPreview.component";

const Careers = () => {
    const Careers = {"manager": "Bakery Manager", "baker":"Chief Baker", "assistant":"Bakery Assistant", "distributor":"Bakery Distributor"};
    return(
        <CareersPreview Careers = {Careers}></CareersPreview>
    )
};
export default Careers;