import SkewDisplayPreview from "./skewDisplayPreview/skewDisplayPreview.component";

const SkewDisplay = ({heading, indicator, skewData}) => {
    //indicatorGood, indicatorBad
    return(
        <SkewDisplayPreview indicator={indicator} heading={heading} skewData = {skewData}></SkewDisplayPreview>
    )
}; export default SkewDisplay;