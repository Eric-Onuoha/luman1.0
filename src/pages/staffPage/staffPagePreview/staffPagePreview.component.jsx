import "./staffPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import { useState } from "react";
import { getPlainDate } from "../../../utils/getMonthAndDay";
import { addStaff } from "../../../reduxStore/reducers/staff.reducer";
import { useDispatch } from "react-redux";

const StaffPagePreview = ({StaffMembers}) => {
    const dispatch = useDispatch();
    const [staffFormResponse, setStaffFormResponse] = useState([]);
    const {staffName, department, phone, startDate, dob, address, emergencyContact1, emergencyContact2} = staffFormResponse;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setStaffFormResponse({...staffFormResponse, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (staffFormResponse.length !== 0){
            const workStartDate = getPlainDate(startDate);
            const birthday = getPlainDate(dob);
            const StaffName = staffName.replace(/\s/g, "_");
            const staffDetails = {department, phone, workStartDate, birthday, address, emergencyContact1, emergencyContact2};
            // ons
            try{
                dispatch(addStaff({StaffName, staffDetails}));
            } catch (err){
                alert("Something went wrong, please refresh and try again" & err);
            }
        }
    }

    return(
        <Container id="staffPagePreviewComponent" fluid="true">
            {/* <OperationsMenu ></OperationsMenu> */}

            <Row>
                <Col className="staffList mr-4 col-3">
                <h4>Current Staff List:</h4>
                <ol>
                {StaffMembers.map((staffMember) => (
                    <li>{staffMember.replace(/_/g, " ")}</li>
                ))}
                 </ol>

                </Col>
                <Col className="staffList addStaff">
                    <form onSubmit={handleSubmit} onChange={handleChange}>
                    <Row>
                        <Col>          
                            <label htmlFor="staffName">Full Name:</label>
                            <input type="text" name="staffName" id="staffName" value={staffName} required/>

                            <label htmlFor="department">Department:</label>
                            <select name="department" id="department" defaultValue={"default"} required>
                                <option value="default" disabled >Select Department</option>
                                <option value="Baker">Baker</option>
                                <option value="Distributor">Distributor</option>
                                <option value="Others">Others</option>
                            </select>

                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}" name="phone" id="phone" value={phone} required/>

                            <label htmlFor="startDate">Work Start Date:</label>
                            <input type="date" name="startDate" id="startDate" value={startDate} required/>

                            <label htmlFor="dob">Date of Birth:</label>
                            <input type="date" name="dob" id="dob" value={dob} required/>

                            <label htmlFor="address">Address:</label>
                            <input type="text" name="address" id="address" value={address} required/>
                        </Col>
                        <Col>
                            <label htmlFor="emergencyContact1">Emergency Contact 1:</label>
                            <input type="tell" pattern="[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}" name="emergencyContact1" id="emergencyContact1" required value={emergencyContact1}/>
                            <label htmlFor="emergencyContact2">Emergency Contact 2:</label>
                            <input type="tell" pattern="[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}" name="emergencyContact2" id="emergencyContact2" required value={emergencyContact2}/>
                            <button type="submit">Submit Staff Record</button>
                        </Col>
                    </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}; export default StaffPagePreview;