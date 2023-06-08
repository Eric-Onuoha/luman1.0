import NavigationPreview from "./navigationPreview/navigationPreview.component"

const Navigation = () => {
    const navItems = ["Careers", "Announcements", "Pricing", "Operations"];
    return (
        <NavigationPreview navItems={navItems}/>
    )
};
export default Navigation;