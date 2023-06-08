import React, {Fragment} from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./navigationPreview.styles.scss";

import { Navbar, Nav, Collapse } from "bootstrap-4-react";
import Logo from "../../../assets/images/LushOvensLogo.png";

const NavigationPreview = ({navItems}) => {
    const navigate = useNavigate();


    const handleNavigation = (e) => {
        e.target.className = "navItem active";
        navigate("/" + e.target.textContent);
    }

    return(
    <Fragment>
    <Navbar id="navigationPreviewComponent" expand="lg" light bg="light" fixed="top">
        <div id="navContainer">
            <Navbar.Brand href="/"><img id="lushLogo" src={Logo} alt="Lush Ovens ltd. Logo" /></Navbar.Brand>
            <Navbar.Toggler target="#navbarNav" />
            <Collapse navbar id="navbarNav">
            <Navbar.Nav id="navItems">
            {navItems.map((navItem) => ( 
                <Nav.ItemLink id="navItem" key={navItem} onClick={handleNavigation}>{navItem}</Nav.ItemLink>
            ))}
            </Navbar.Nav>
            </Collapse>
        </div>
    </Navbar>
    <Outlet/>
    </Fragment>
    )
};
export default NavigationPreview;

