import NavigationPreview from "./navigationPreview/navigationPreview.component"

const Navigation = () => {
    const navItems = ["careers", "announcements", "pricing", "operations"];
    return (
        <NavigationPreview navItems={navItems}/>
    )
};
export default Navigation;