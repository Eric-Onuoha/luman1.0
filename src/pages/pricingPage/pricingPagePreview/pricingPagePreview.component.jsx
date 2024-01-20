import "./pricingPagePreview.styles.scss";
import { Container, Row } from "bootstrap-4-react/lib/components/layout";
import Table from "bootstrap-4-react/lib/components/table";


const PricingPagePreview = ({CurrentPrice}) => {
    return(
        <Container id="pricingPage">
            <h4>Our Current Prices</h4>
            <Row>
                <Table bordered responsive className = "bg-light"> 
                        <tbody>
                            <tr>
                                <td>Family Bread</td>
                                <td>{CurrentPrice['bread']['familyBread']['productPriceDTC']}</td>
                            </tr>
                            <tr>
                                <td>Mini Bread</td>
                                <td>{CurrentPrice['bread']['miniBread']['productPriceDTC']}</td>
                            </tr>
                            <tr>
                                <td>Small Bread</td>
                                <td>{CurrentPrice['bread']['smallBread']['productPriceDTC']}</td>
                            </tr>
                        </tbody>
                    </Table>
            </Row>
        </Container>
    )
}; export default PricingPagePreview;