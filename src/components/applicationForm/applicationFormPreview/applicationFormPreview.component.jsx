import { useParams } from "react-router-dom";
import "./applicationFormPreview.styles.scss";

const ApplicationFormPreview = () => {
    const {position} = useParams();
    const Question = "Sample Question";

    const handleSubmit = () => {
        console.log("submit");
    }
    return(
        <div id="applicationFormPreviewComponent">

            <form id="applicationForm" onSubmit={handleSubmit}>
                <br />
                <fieldset>
                    <label>Full Name: </label>
                    <input name="name" type="text" />
                    <br />
                    <label>Phone Number: </label>
                    <input name="contact" type="text" />
                    <br />
                    <label>Email Adress: </label>
                    <input name="email" type="text" />
                </fieldset>

                <br />
                <fieldset>
                    <label>Upload CV here: </label>
                    <input type="file" name="resume" />
                    <br />
                    <label>{Question}: </label>
                    <input type="text" />
                </fieldset>
                <br />
                <fieldset>
                <label>What is your most recent work experience</label>
                <br />
                <label>Current or last work place</label>
                <input type="text" />
                <br />
                <label>Current or last Job Title</label>
                <input type="text" />
                </fieldset>
                <br />
                <fieldset>
                <label>Two Referees are required for this application. Inability to reach your referees will result in disqualification from the recruitment process</label>
                <br />
                <label>Name of last Employer</label>
                <input type="text" />
                <br />
                <label>Phone number of last Employer</label>
                <input type="text" />
                <br />
                <label>Name of Personal Referee - A relation who can vouch for you</label>
                <input type="text" />
                <br />
                <label>Phone number of Personal Referee - A relation who can vouch for you</label>
                <input type="text" />
                </fieldset>

                <p>Succesful Applicants will be contacted for an Interview</p>
            </form>
        </div>
    )
};
export default ApplicationFormPreview;