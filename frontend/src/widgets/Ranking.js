import SpacedColumn from "../components/SpacedColumn";
import CenteredText from "../components/CenteredText";
import RoundedImage from "../components/RoundedImage";
import SpacedRow from "../components/SpacedRow";

const Ranking = ({
  placement,
  imgSrc,
  driverName,
  deliveryRate,
  reviewScore,
  overallScore,
}) => {
  return (
    <SpacedRow height={20} spacing={20}>
      <CenteredText>{placement}</CenteredText>
      <RoundedImage src={imgSrc} />
      <SpacedColumn>
        <CenteredText>{driverName}</CenteredText>
        <CenteredText>Delivery Rate: {deliveryRate}</CenteredText>
        <CenteredText>Review Score: {reviewScore}</CenteredText>
      </SpacedColumn>
      <CenteredText>{overallScore}</CenteredText>
    </SpacedRow>
  );
};

export default Ranking;
