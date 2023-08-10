import SingleDisplayPreview from "./singleDisplayPreview/singleDisplayPreview.component"

const SingleDisplay = ({indicator, heading, data}) => {
    let message = indicator === "noIndicator"
    ? "noIndicator"
    : indicator > 0
    ? "indicatorGood"
    : "indicatorBad";

    console.log(message);
    return (
        <SingleDisplayPreview indicator={message} heading = {heading} data={data}></SingleDisplayPreview>
    )
};
export default SingleDisplay;