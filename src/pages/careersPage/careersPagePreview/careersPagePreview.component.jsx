import { Container } from "bootstrap-4-react/lib/components/layout";
import "./careersPagePreview.styles.scss";
import Careers from "../../../components/careers/careers.component";

const CareersPagePreview = () => {
    return(
        <Container id="careersPagePreviewComponent" fluid="true">
            <div>
                <Careers></Careers>
            </div>
        </Container>
    )
}; 
export default CareersPagePreview;