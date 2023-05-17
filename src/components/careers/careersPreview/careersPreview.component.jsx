import "./careersPreview.styles.scss";
import { useNavigate } from "react-router-dom";

const CareersPreview = ({Careers}) => {

    const navigate = useNavigate();

    const handleNavigation = (e) => {
        // navigate("/careers/" + e.target.id);
        console.log(e.target.id);
    }
    return(
        <div id="careersPreviewComponent">
            {Object.keys(Careers).map((Career) =>(
                <div onClick={handleNavigation} id={Career} className="careerList">
                    <h1 id={Career}>{Careers[Career]} </h1>
                </div>
            ))}
        </div>
    )
};
export default CareersPreview;