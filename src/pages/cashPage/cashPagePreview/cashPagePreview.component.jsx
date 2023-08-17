import "./cashPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import {Table} from "bootstrap-4-react";

import OperationsMenu from "../../../components/operationsMenu/operationsMenu.component";
import CashAccount from "../../../components/cashAccount/cashAccount.component";
import { getTodaysPlainDate } from "../../../utils/getMonthAndDay";
import { useSelector } from "react-redux";

const CashPagePreview = () => {
    const regex = /^(\d{4})([a-zA-Z]+)(\d+)$/;
    const OperationsMenuType = useSelector((state) => state.operationsMenu.operationsMenu);
    const AllAccounts = useSelector((state) => state.account.account) || {};
    const Accounts = Object.keys(AllAccounts);

    return(
        <Container id="cashPagePreviewComponent" fluid="true">
            <OperationsMenu menu = {["Update Accounts", "View Accounts"]}></OperationsMenu>
                {/* {OperationsMenuType === "View" ? () : ()} */}
                {OperationsMenuType === "View" ? 
                (
                    <Table striped bordered hover responsive className = "bg-light"> 
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Sales Amount</th>
                                <th>Paid Debt</th>
                                <th>New Debt</th>
                                <th>Expense Cost</th>
                                <th>Expected Cash</th>
                                <th>Deposit</th>
                                <th>CAH</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Accounts.map((account, i) => (
                            <tr>
                                <td>{account.replace(regex, "$3_$2_$1")}</td>
                                <td>{AllAccounts[account] && AllAccounts[account]["salesAmount"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{AllAccounts[account] && AllAccounts[account]["paidDebt"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{AllAccounts[account] && AllAccounts[account]["newDebt"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{AllAccounts[account] && AllAccounts[account]["totalExpense"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{AllAccounts[account] && AllAccounts[account]["expectedCash"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{AllAccounts[account] && AllAccounts[account]["bankDeposit"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{AllAccounts[account] && AllAccounts[account]["cah"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{AllAccounts[account] && AllAccounts[account]["comment"]}</td>
                            </tr>
                            ))}
                        </tbody>
                  </Table>
                ) 
                : 
                (
                    <>
                    <h4>Cash Account for: {getTodaysPlainDate()}</h4>
                    <Row id="cashRecords">
                        <CashAccount></CashAccount>
                    </Row>
                    </>
                )}

        </Container>
    )
}; export default CashPagePreview;