import "./operationsPagePreview.styles.scss";
import { Container, Row, Col } from "bootstrap-4-react/lib/components/layout";
import DailyTransactionsIcon from "../../../assets/images/dailyTransactionIcon.png";
import TargetIcon from "../../../assets/images/targetIcon.png";
import RecordsIcon from "../../../assets/images/recordsIcons.png";
import ProductIcon from "../../../assets/images/productIcon.png";
import SignOutIcon from "../../../assets/images/signout.png";

import { useDispatch } from "react-redux";
import { updateCurrentUser } from "../../../reduxStore/reducers/user.reducer";
import { SignUserOut } from "../../../authenticator/signIn/signIn.firebase.utils";
import Targets from "../../../components/targets/targets.component";
import SalesPage from "../../salesPage/salesPage.component";
import ExpensePage from "../../expensePage/expensePage.component";
import DebtPage from "../../debtPage/debtPage.component";
import StockPage from "../../stockPage/stockPage.component";
import CashPage from "../../cashPage/cashPage.component";
import ProductsPage from "../../productsPage/productsPage.component";
import StaffPage from "../../staffPage/staffPage.component";

import { useState } from "react";

const OperationsPagePreview = () => {
    const dispatch = useDispatch();
    const [subMenuClass, setSubMenuClass] = useState("subMenuItems");
    const [menuTab, setMenuTab] = useState("Targets");

    const showSubMenu = () => {
        {subMenuClass === " " ? setSubMenuClass("subMenuItems") : setSubMenuClass(" ")};
    }

    const changeCurrentTab = (e) => {
        setMenuTab(e.target.outerText);
    }

    const signOut = () => {
        SignUserOut();
        dispatch(updateCurrentUser(""));
    }

    return(
        <Container id="dashboardComponent" fluid={true}>
            <Row id="dashboardRow">
                <Col id="dashboardMenu" className="col-2">
                    <div>
                        <div className="menuItem" onClick={changeCurrentTab}>
                            <p id="mainMenuItem"><img src={TargetIcon}/>Targets</p>
                        </div>
                        
                        <div className="menuItem">
                            <p id="mainMenuItem" onClick={showSubMenu}><img src={DailyTransactionsIcon}/>Daily Records</p>
                            <div className={subMenuClass}>
                                <p className="subMenuItem" onClick={changeCurrentTab}>Sales</p>
                                <p className="subMenuItem" onClick={changeCurrentTab}>Stock</p>
                                <p className="subMenuItem" onClick={changeCurrentTab}>Expense</p>
                                <p className="subMenuItem" onClick={changeCurrentTab}>Debt</p>
                                <p className="subMenuItem" onClick={changeCurrentTab}>Accounts</p>
                            </div>
                        </div>
                        
                        <div className="menuItem" onClick={changeCurrentTab}>
                            <p id="mainMenuItem"><img src={RecordsIcon}/>Staff Records</p>
                        </div>
                        <div className="menuItem" onClick={changeCurrentTab}>
                            <p id="mainMenuItem"><img src={ProductIcon}/>Product Records</p>
                        </div>
                    </div>
                    <div className="menuItem" onClick={signOut}>
                        <p id="mainMenuItem"><img src={SignOutIcon}/>Sign Out</p>
                    </div>
                </Col>
                <Col id="dashboardItems" className="col-10">
                    {menuTab === "Targets" ? (
                        <Targets></Targets>
                    ) : (menuTab === "Sales" ? (
                        <SalesPage></SalesPage>
                    ) : (menuTab === "Stock") ? (
                        <StockPage></StockPage>
                    ) : (menuTab === "Expense") ? (
                        <ExpensePage></ExpensePage>
                    ) : (menuTab === "Accounts") ? (
                        <CashPage></CashPage>
                    ) : (menuTab === "Debt") ? (
                        <DebtPage></DebtPage>
                    ) : (menuTab === "Staff Records") ? (
                        <StaffPage></StaffPage>
                    ) : (menuTab === "Product Records") ? (
                        <ProductsPage></ProductsPage>
                    ) : ( 
                        <p></p>
                    ))}
                </Col>
            </Row>            
        </Container>
    )
};
export default OperationsPagePreview;