import "./staffPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import { useState } from "react";
import { getPlainDate } from "../../../utils/getMonthAndDay";

const StaffPagePreview = () => {

    const [staffFormResponse, setStaffFormResponse] = useState([]);
    const {staffName, department, phone, startDate, dob, address, emergencyContact1, emergencyContact2} = staffFormResponse;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setStaffFormResponse({...staffFormResponse, [name]: value});
        console.log(staffFormResponse);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (staffFormResponse.length !== 0){
            let workStartDate = getPlainDate(startDate);
            let birthday = getPlainDate(dob);
            console.log(birthday);       
            console.log(workStartDate);       
            // try{
            //     // addCollectionAndDocuments("Products", date, ProductFormat);
            //     dispatch(addProduct({date, productType, productName, productPrices}));
            // } catch (err){
            //     alert("Something went wrong, please refresh and try again" & err);
            // }
        }
    }

    return(
        <Container id="staffPagePreviewComponent" fluid="true">
            <OperationsMenu menu = "Products"></OperationsMenu>

            <Row>
                <Col className="staffList mr-4 col-3">
                <h4>Current Staff List:</h4>
                <ol>
                    <li>Jerry James Nwogiafornm</li>
                    <li>Jerry James</li>
                    <li>Jerry James</li>
                    <li>Jerry James</li>
                    <li>Jerry James</li>
                    <li>Jerry James</li>
                    <li>Jerry James</li>
                    <li>Jerry James</li>
                    <li>Jerry James</li>
                    <li>Jerry James</li>
                    <li>Jerry James</li>
                </ol>
                <button>Add New Staff</button>
                </Col>
                <Col className="staffList addStaff">
                    <form onSubmit={handleSubmit} onChange={handleChange}>
                    <Row>
                        <Col>          
                            <label htmlFor="staffName">Full Name:</label>
                            <input type="text" name="staffName" id="staffName" value={staffName}/>

                            <label htmlFor="department">Department:</label>
                            <select name="department" id="department" defaultValue={"default"}>
                                <option value="default" disabled >Select Bread</option>
                                <option value="Baker">Baker</option>
                                <option value="Distributor">Distributor</option>
                                <option value="Distributor">Others</option>
                            </select>

                            <label htmlFor="phone">Phone Number:</label>
                            <input type="number" name="phone" id="phone" value={phone}/>

                            <label htmlFor="startDate">Work Start Date:</label>
                            <input type="date" name="startDate" id="startDate" value={startDate}/>

                            <label htmlFor="dob">Date of Birth:</label>
                            <input type="date" name="dob" id="dob" value={dob}/>

                            <label htmlFor="address">Address:</label>
                            <input type="text" name="address" id="address" value={address} />
                        </Col>
                        <Col>
                            <label htmlFor="emergencyContact1">Emergency Contact 1:</label>
                            <input type="text" name="emergencyContact1" id="emergencyContact1" value={emergencyContact1}/>
                            <label htmlFor="emergencyContact2">Emergency Contact 2:</label>
                            <input type="text" name="emergencyContact2" id="emergencyContact2" value={emergencyContact2}/>
                            <button type="submit">Submit Staff Record</button>
                        </Col>
                    </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}; export default StaffPagePreview;