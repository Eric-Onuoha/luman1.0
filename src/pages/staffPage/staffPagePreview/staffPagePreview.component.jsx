import "./staffPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";

const StaffPagePreview = () => {
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
                    {/* <form> */}
                    <Row>
                        <Col>          
                            <label htmlFor="staffName">Full Name:</label>
                            <input type="text" name="staffName" id="staffName" />
                            <label htmlFor="department">Department:</label>
                            <select name="department" id="department">
                                <option value="Baker">Baker</option>
                                <option value="Distributor">Distributor</option>
                                <option value="Distributor">Others</option>
                            </select>
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="text" name="phone" id="phone" />
                            <label htmlFor="dob">Date of Birth:</label>
                            <input type="date" name="dob" id="dob" />
                            <label htmlFor="address">Address:</label>
                            <input type="text" name="address" id="address" />
                            <label htmlFor="emContact1">Emergency Contact 1:</label>
                            <input type="text" name="emContact1" id="emContact1" />
                        </Col>
                        <Col>
                            <label htmlFor="emContact2">Emergency Contact 2:</label>
                            <input type="text" name="emContact2" id="emContact2" />
                            <button type="submit">Submit Staff Record</button>
                        </Col>
                    </Row>
                    {/* </form> */}
                </Col>
            </Row>
        </Container>
    )
}; export default StaffPagePreview;