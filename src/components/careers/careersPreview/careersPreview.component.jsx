import "./careersPreview.styles.scss";
import { useNavigate } from "react-router-dom";

import Navigation from "../../navigation/navigation.component";

const CareersPreview = ({Careers}) => {

    const navigate = useNavigate();

    const handleNavigation = (e) => {
        navigate("/careers/" + e.target.id);
    }

    return(
        <div id="careersPreviewComponent">

            <div id="careersComponent">
                {Object.keys(Careers).map((Career) =>(
                    <div onClick={handleNavigation} id={Career} key={Career} className="careerList">
                        <h1 id={Career}>{Careers[Career]}</h1>
                        <img src="" alt="" />
                    </div>
                ))}
            </div>

        </div>
    )
};
export default CareersPreview;