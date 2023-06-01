import { useParams } from "react-router-dom";
import { addCollectionAndDocuments } from "../../../firestore/postToFirestore.utils";
import "./applicationFormPreview.styles.scss";
import { useState } from "react";

const ApplicationFormPreview = () => {
    const {position} = useParams();
    const Question = "Sample Question";

    const [formResponse, setFormResponse] = useState([]);

    const {name, contact, email, SpecificQuestion, lastJobPlace, lastJobTitle, contactOfLastEmployer, nameOfPersonalReferee, contactOfPersonalReferee} = formResponse;

    const handleSubmit = (e) => {
        e.preventDefault();
        formResponse["Position"] = position;
        addCollectionAndDocuments("Applications/", email, formResponse);
        console.log(formResponse);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormResponse({...formResponse, [name]: value})
    }

    return(
        <div id="applicationFormPreviewComponent">

        <form id="applicationForm" onSubmit={handleSubmit} onChange={handleChange}>
            <br />
            <fieldset>
                <label htmlFor="fullName">Full Name:</label>
                <input id="fullName" name="name" type="text" />
                <br />
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input id="phoneNumber" name="contact" type="text" />
                <br />
                <label htmlFor="emailAddress">Email Address:</label>
                <input id="emailAddress" name="email" type="text" />
            </fieldset>
            <br />
            <fieldset>
                <label htmlFor="cvUpload">Upload CV here:</label>
                <input id="cvUpload" type="file" name="resume" />
                <br />
                <label htmlFor="SpecificQuestion">Provide any additional information about your qualification for the job here:</label>
                <textarea name="SpecificQuestion" id="" cols="30" rows="10"></textarea>
            </fieldset>
            <br />
            <fieldset>
                <label htmlFor="recentWorkExperience">What is your most recent work experience?</label>
                <br />
                <label htmlFor="currentWorkPlace">Current or last work place:</label>
                <input id="currentWorkPlace" name="lastJobPlace" type="text" />
                <br />
                <label htmlFor="currentJobTitle">Current or last Job Title:</label>
                <input id="currentJobTitle" name="lastJobTitle" type="text" />
            </fieldset>
            <br />
            <fieldset>
                <label htmlFor="referees">Two Referees are required for this application. Inability to reach your referees will result in disqualification from the recruitment process.</label>
                <br />
                <label htmlFor="lastEmployerName">Name of last Employer:</label>
                <input id="lastEmployerName" name="nameOfLastEmployer" type="text" />
                <br />
                <label htmlFor="lastEmployerPhone">Phone number of last Employer:</label>
                <input id="lastEmployerPhone" name="contactOfLastEmployer" type="text" />
                <br />
                <label htmlFor="personalRefereeName">Name of Personal Referee - A relation who can vouch for you:</label>
                <input id="personalRefereeName" name="nameOfPersonalReferee" type="text" />
                <br />
                <label htmlFor="personalRefereePhone">Phone number of Personal Referee - A relation who can vouch for you:</label>
                <input id="personalRefereePhone" name="contactOfPersonalReferee" type="text" />
            </fieldset>
            <p>Successful Applicants will be contacted for an Interview</p>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
};
export default ApplicationFormPreview;