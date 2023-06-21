import SkewDisplayPreview from "./skewDisplayPreview/skewDisplay.component";

const SkewDisplay = () => {

    const SkewData = {"family": 600, "mini": 500, "small": 1000};
    return(
        <SkewDisplayPreview indicator="indicatorGood" heading="Sales for the week" skewData={SkewData}></SkewDisplayPreview>
    )
}; export default SkewDisplay;