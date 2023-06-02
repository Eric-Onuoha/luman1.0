import NavigationPreview from "./navigationPreview/navigationPreview.component"

const Navigation = () => {
    const navItems = ["Careers", "Operations"];
    return (
        <NavigationPreview navItems={navItems}/>
    )
};
export default Navigation;