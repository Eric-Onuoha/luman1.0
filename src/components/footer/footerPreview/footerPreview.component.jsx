import "./footerPreview.styles.scss";
import { addCollectionAndDocuments } from "../../../firestore/postToFirestore.utils";
import { useState } from "react";
import { Container, Row, Col, Navbar } from "bootstrap-4-react";

const FooterPreview = () => {

    const [formResponse, setFormResponse] = useState("");
    const {phoneNumber, feedback} = formResponse;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormResponse({...formResponse, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formResponse.length !== 0){
            try{
                addCollectionAndDocuments("Feedback", phoneNumber, formResponse);
                setFormResponse({phoneNumber:"", feedback:""});
            } catch(err){
                alert("Check that all fields are filled");
            }
        } 
    }

    return(
        <Navbar id="footerPreview">
            <Row id="footerRow">
                <Col col="12 lg-6" id="physicalAddress">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15756.348490609578!2d7.3447637!3d9.1466041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd9a22f432075%3A0x48eb0466fd931fc2!2sLush%20Ovens%20LTD!5e0!3m2!1sen!2sng!4v1685741045001!5m2!1sen!2sng" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p>Along phase 3 Road, Opposite Methodist Cathedral. kubwa.</p>
                </Col>
                <Col col="12 md-5" id="feedbackFormColumn">
                    <form id="feedbackForm" onSubmit={handleSubmit} onChange={handleChange}>
                        <label htmlFor="">We love to hear from our customers</label>
                        <input type="tel" name="phoneNumber" value={phoneNumber} placeholder="Phone Number" pattern="[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}" required />
                        <textarea name="feedback" value={feedback} placeholder="Please provide some feedback" id="" cols="30" rows="10" required></textarea>
                        <button type="submit">Submit Feedback</button>
                    </form>
                </Col>
            </Row>
        </Navbar>
    )
};
export default FooterPreview;