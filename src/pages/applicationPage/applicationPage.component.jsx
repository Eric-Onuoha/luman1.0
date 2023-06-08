import "./applicationPage.styles.scss";
import ApplicationForm from "../../components/applicationForm/applicationForm.component";
import { Container } from "bootstrap-4-react/lib/components/layout";

const ApplicationPage = () => {
    return(
        <Container id="applicationPageComponent" fluid="true">
            <div>
                <ApplicationForm></ApplicationForm>
            </div>
    </Container>
    )
};
export default ApplicationPage;