import "./careersPreview.styles.scss";
import { useNavigate } from "react-router-dom";

import Navigation from "../../navigation/navigation.component";
import ContactDetails from "../../contactDetails/contactDetails.component";

// import Baker from "../../../assets/images/baker.jpeg";
// import Assistant from "../../../assets/images/assistant.png";
// import Manager from "../../../assets/images/manager.jpg";
// import Distributor from "../../../assets/images/delivery.jpg";

const CareersPreview = ({Careers}) => {

    const navigate = useNavigate();

    const handleNavigation = (e) => {
        navigate("/careers/" + e.target.id);
    }
    return(
        <div id="careersPreviewComponent">
            <div id="NavigationComponent">
                <Navigation></Navigation>
            </div>

            <div id="careersComponent">
                {Object.keys(Careers).map((Career) =>(
                    <div onClick={handleNavigation} id={Career} className="careerList">
                        <h1 id={Career}>{Careers[Career]}</h1>
                        <img src="" alt="" />
                    </div>
                ))}
            </div>

            <div id="contactDetailsComponent">
                <ContactDetails></ContactDetails>
            </div>
        </div>
    )
};
export default CareersPreview;