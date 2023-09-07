import "./salesPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import Table from "bootstrap-4-react/lib/components/table";

// import SkewEntry from "../../../components/skewEntry/skewEntry.component";
import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import { getPlainDate, getDate } from "../../../utils/getMonthAndDay";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addSales } from "../../../reduxStore/reducers/sales.reducer";
import { addSalesRepRecord } from "../../../reduxStore/reducers/salesRep.reducer";

const SalesPagePreview = ({distributors}) => {
    const regex = /^(\d{4})([a-zA-Z]+)(\d+)$/;
    const OperationsMenuType = useSelector((state) => state.operationsMenu.operationsMenu);
    const DTCSales = useSelector((state) => state.salesRecord.salesRecord);
    const SRSales = useSelector((state) => state.salesRepRecord.salesRepRecord);

    const dispatch = useDispatch();
    const [status, setStatus] = useState(" ");
    const [DTCFormResponse, setDTCFormResponse] = useState({});
    const [srFormResponse, setSrFormResponse] = useState([]);
    const {familyDTC, miniDTC, smallDTC} = DTCFormResponse;

    const todaysDate = new Date();

    const handleDTCChange = (e) => {
        const {name, value} = e.target;
        setDTCFormResponse({...DTCFormResponse, [name]: value});
        console.log(DTCFormResponse);
    }

    const handleSRChange = (e) => {
        const {name, value} = e.target;
        const srSalesData = name.split('+');
        const distributorsName = srSalesData[0];
        const dataKey = srSalesData[1];

        setSrFormResponse((prevResponse) => ({
            ...prevResponse,
            [distributorsName]: {
              ...prevResponse[distributorsName],
              [dataKey]: value,
            },
          }));

    }

    const handleButtonHover = () => {
        setStatus("Check again to make sure all fields are correct");
    }

    const handleDTCSubmit = (e) => {
        e.preventDefault();
        if (DTCFormResponse.length !== 0){
            const currentDate = getDate(todaysDate);
            const DTCSales = DTCFormResponse;
            try{
                // console.log(DTCSales);
                 dispatch(addSales({DTCSales, currentDate}));

                 setStatus("Response Recieved");
            } catch(err){
                console.log(err);
            }
        }
    }

    const handleSRSubmit = (event) => {
        event.preventDefault(); // Prevents the form from submitting and refreshing the page
        if (srFormResponse.length !== 0){
            const currentDate = getDate(todaysDate);
            // const DTCSales = {familyDTC, miniDTC, smallDTC};
            try{
                 dispatch(addSalesRepRecord({srFormResponse, currentDate}));
                 setStatus("Response Recieved");
            } catch(err){
                console.log(err);
            }
        }
    }

    return(
        <Container id="salesPagePreviewComponent" fluid="true">
            <>
            <OperationsMenu menu = {["Update Sales", "View Sales"]}></OperationsMenu>
            </>
            {OperationsMenuType === "View" ? 
            (
                <div id="salesTables"> 
                    <Table striped bordered hover responsive className = "bg-light"> 
                        <thead>
                            <tr className="bg-dark">
                                <th colSpan={1}>Date</th>
                                <th colSpan={3}>DTC Sales</th>
                            </tr>
                            <tr>
                                <th> </th>
                                <th>Family</th>
                                <th>Mini</th>
                                <th>Small</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Object.keys(DTCSales).reverse().map((salesno) => (
                                    <tr>
                                        <td>{salesno.replace(regex, "$3_$2_$1")}</td>
                                        <td>{DTCSales[salesno]["familyDTC"]}</td>
                                        <td>{DTCSales[salesno]["miniDTC"]}</td>
                                        <td>{DTCSales[salesno]["smallDTC"]}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>

                    <Table striped bordered hover responsive className = "bg-light"> 
                    {Object.keys(SRSales).map((salesdate) => (
                        <>
                        {/* <thead>
                            <tr className="bg-dark">
                                <th colSpan={1}>Date</th>
                                <th colSpan={3}></th>
                            </tr>
                            <tr>
                                <th> </th>
                                <th>Family</th>
                                <th>Mini</th>
                                <th>Small</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>{salesdate.replace(regex, "$3_$2_$1")}</td>
                                    <td>{SRSales[salesdate]["familySalesRep"]}</td>
                                    <td>{SRSales[salesdate]["miniSalesRep"]}</td>
                                    <td>{SRSales[salesdate]["smallSalesRep"]}</td>
                                </tr>
                        </tbody> */}
                        </>
                    ))}
                    </Table>
                    </div>

            ) 
            : 
            (
                <>
                <h4>Direct to Consumer (DTC) sales for {getPlainDate(todaysDate)}</h4>
                    <form onChange={handleDTCChange} onSubmit={handleDTCSubmit}>
                    <Row id="salesRecords">
                        <Col className ="dashboardEntry">
                            <p className=""></p>
                            <p className="displayHeader">Sold from sales point</p>
                            <div id="breadSkews">
                                <h4>Family <input name="familyDTC" type="text"/></h4>
                            </div>
                        </Col>
                        <Col className ="dashboardEntry">
                            <p className=""></p>
                            <p className="displayHeader">Sold from sales point</p>
                            <div id="breadSkews">
                                <h4>Mini <input name="miniDTC" type="text" /></h4>
                            </div>
                        </Col>
                        <Col className ="dashboardEntry">
                            <p className=""></p>
                            <p className="displayHeader">Sold from sales point</p>
                            <div id="breadSkews">
                                <h4>Small <input name="smallDTC" type="text"/></h4>
                            </div>
                        </Col>
                    </Row>
                    <button onMouseEnter={handleButtonHover} type="submit">Submit Sales Record</button>
                    </form>
                    <br />
                    <h4>Sales Rep - Company Distributors</h4>
                    <form onChange={handleSRChange} onSubmit={handleSRSubmit}>
                    <Row id="salesRecords">
                        {distributors.map((distributor, index) => (
                            <Col className ="dashboardEntry" key={index}>
                                <p className=""></p>
                                <p className="displayHeader">{distributor && distributor.replace(/_/g, " ")}</p>
                                <div id="breadSkews">
                                    <h4>Family <input name={`${distributor}+familySalesRep`}  type="text" /></h4>
                                    <h4>Mini <input name={`${distributor}+miniSalesRep`}type="text" /></h4>
                                    <h4>Small <input name={`${distributor}+smallSalesRep`} type="text" /></h4>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <button onMouseEnter={handleButtonHover} type="submit">Submit Sales Record</button>
                    </form>
                    <h3>{status}</h3>
                </>
            )
            }
          
        </Container>
    )
}; export default SalesPagePreview;