import { useParams } from "react-router-dom";
import "./applicationFormPreview.styles.scss";
import { useState } from "react";

import { uploadDocWithImages } from "../../../firestore/postToFirestore.utils";

const ApplicationFormPreview = () => {
    const {position} = useParams();
    const Question = "Why are you qualified for this role?";

    String.prototype.properCase = function () {
        return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    const [formResponse, setFormResponse] = useState([]);
    const [count, setCount] = useState(0);
    const [imageUpload, setImageUpload] = useState(null);
    const [formStatus, setFormStatus] = useState("");

    const {name, contact, email, SpecificQuestion, lastJobPlace, lastJobTitle, contactOfLastEmployer, nameOfPersonalReferee, contactOfPersonalReferee} = formResponse;

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus("Please wait while your CV is uploaded");
        if (formResponse.length !== 0){
            formResponse["Position"] = position;
            try{
                uploadDocWithImages(imageUpload, "Applications", email, formResponse);
            } catch (err){
                alert("Something went wrong, please refresh and try again" + err);
            }
        }
    }

    const handleImageChange = (e) => {
        let imagelist = [];
        if(e.target.files !== null) {
          for(let i = 0; i < e.target.files.length; i++){
            imagelist.push(e.target.files[i]);
          }
          setImageUpload(imagelist);
        }
      }

    const characterCount = (e) => {
        setCount(e.target.value.length);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormResponse({...formResponse, [name]: value})
    }

    return(
        <div id="applicationFormPreviewComponent">
        <div id="formIntro">
            <h2>{position.properCase()} Application Form</h2>
        </div>

        <div id="form">
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
                <input id="cvUpload" type="file" onChange={handleImageChange} accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" name="resume" />
                <br />
                <label htmlFor="SpecificQuestion">{Question}</label>
                <textarea name="SpecificQuestion" maxLength={600} id="" cols="30" rows="10" onChange={characterCount}></textarea>
                <p>{600 - count} character(s) left</p>
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
            <p>{formStatus}</p>
        </form>
        </div>

        </div>
    )
};
export default ApplicationFormPreview;