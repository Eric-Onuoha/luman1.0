import React, {Fragment} from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./navigationPreview.styles.scss";

import { Navbar, Nav, Collapse } from "bootstrap-4-react";
import Logo from "../../../assets/images/LushOvensLogo.png";

const NavigationPreview = ({navItems}) => {
    const navigate = useNavigate();


    const handleNavigation = (e) => {
        navigate("/" + e.target.textContent);
    }

    return(
    <Fragment>
    <Navbar id="navigationPreviewComponent" expand="lg" light bg="light" fixed="top">
        <div id="navContainer">
            <Navbar.Brand href="/"><img id="lushLogo" src={Logo} alt="Lush Ovens ltd. Logo" /></Navbar.Brand>
            <Navbar.Nav id="navItems">
            {navItems.map((navItem) => ( 
                <Nav.ItemLink className="navItem" key={navItem} href={navItem}>{navItem}</Nav.ItemLink>
            ))}
            </Navbar.Nav>
        </div>
    </Navbar>
    <Outlet/>
    </Fragment>
    )
};
export default NavigationPreview;

