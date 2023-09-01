import SkewDisplayPreview from "./skewDisplayPreview/skewDisplayPreview.component";

const SkewDisplay = ({heading, indicator, skewData}) => {
    let message = indicator === "noIndicator"
    ? "noIndicator"
    : indicator > 0
    ? "indicatorGood"
    : "indicatorBad";

    return(
        <SkewDisplayPreview indicator={message} heading={heading} skewData = {skewData}></SkewDisplayPreview>
    )
}; export default SkewDisplay;