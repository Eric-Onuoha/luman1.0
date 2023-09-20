import React, {Fragment, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./navigationPreview.styles.scss";

import { Navbar, Nav, Collapse } from "bootstrap-4-react";
import Logo from "../../../assets/images/LushOvensLogo.png";
import HamburgerMenu from "../../../assets/images/burger-menu.svg";

const NavigationPreview = ({navItems}) => {
    const navigate = useNavigate();
    const [showNav, setShowNav] = useState("navItemsMobile");
    const [navFocus, setNavFocus] = useState(" ");

    const toggleMenu = () => {
        (showNav === "navItemsMobile" ? setShowNav(" ") : setShowNav("navItemsMobile"));
        (navFocus === " " ? setNavFocus("navModal") : setNavFocus(" "));
    }

    const handleNavigation = (e) => {
        toggleMenu();
        navigate("/" + e.target.textContent);
    }

    String.prototype.properCase = function () {
        return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    return(
    <Fragment>
    <Navbar id="navigationPreviewComponent" expand="lg" light bg="light" fixed="top">
    <Navbar.Brand id="mobileLogo" href="/"><img id="lushLogo" src={Logo} alt="Lush Ovens ltd. Logo" /></Navbar.Brand>
        <div id={showNav} className="navItemsContainer">
            <Navbar.Brand id="laptopLogo" href="/"><img id="lushLogo" src={Logo} alt="Lush Ovens ltd. Logo" /></Navbar.Brand>
            <Navbar.Nav id="navItems">
            {navItems.map((navItem) => ( 
                <Nav.ItemLink className="navItem" key={navItem} onClick={handleNavigation}>{navItem.properCase()}</Nav.ItemLink>
            ))}
            </Navbar.Nav>
        </div>
        <div id={navFocus} onClick={toggleMenu}></div>
        <div className="hamburgerMenu" onClick={toggleMenu}><img src={HamburgerMenu} alt="Menu"/></div>
    </Navbar>
    <Outlet/>
    </Fragment>
    )
};
export default NavigationPreview;

