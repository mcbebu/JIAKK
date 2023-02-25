import BlackTickIcon from "../assets/BlackTick.svg";
import BlackCrossIcon from "../assets/BlackCross.svg";
import GreenTickIcon from "../assets/GreenTick.svg";
import RedCrossIcon from "../assets/RedCross.svg";
import IconButton from "../components/Buttons/IconButton";
import LargeText from "../components/Text/LargeText";
import RegularText from "../components/Text/RegularText";
import Circle from "../components/Shapes/Circle";

const OtherStations = ({
  locationName,
  needs,
  distance,
  isHelped,
  toggleTick,
  toggleCross,
  selector,
}) => {
  return (
    <div className="flex flex-row space-x-2">
      <div
        className={`flex flex-row rounded-2xl justify-evenly align-center space-x-10 p-4 ${
          isHelped ? "bg-green-600" : "bg-red-600"
        }`}
      >
        <IconButton iconSrc={isHelped ? BlackTickIcon : GreenTickIcon} onClick={() => toggleTick(selector)} />
        <IconButton iconSrc={isHelped ? RedCrossIcon : BlackCrossIcon} onClick={() => toggleCross(selector)} />
        <div className="flex flex-col">
          <LargeText className={"text-white"}>{locationName}</LargeText>
          <RegularText className={"text-white"}>Needs: {needs} Pc</RegularText>
        </div>
        <RegularText className={"text-white self-center"}>
          Distance: {distance}km
        </RegularText>
      </div>
      <Circle
        className={`border-2 w-20 h-20 text-6xl self-center ${
          isHelped ? "border-black" : "border-red-600 text-red-600"
        }`}
      >
        !
      </Circle>
    </div>
  );
};

export default OtherStations;
