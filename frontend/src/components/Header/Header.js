import Icon from "../Image/Icon";
import NinjaLogo1 from "../../assets/NinjaVanLogo.svg";
import LargeText from "../Text/LargeText";
import RegularText from "../Text/RegularText";
import { getDateString } from "../../utils/dateGetter";
import TextButton from "../Buttons/TextButton";

const Header = ({ locationName, activePage, togglePageHandler }) => {
  return (
    <div className="flex flex-row justify-between h-20 bg-black items-center">
      <img src={NinjaLogo1} className="h-2/3 ml-20" alt="ninjaLogo" />
      <TextButton
        onClick={() => {if (activePage === 1) togglePageHandler()}}
        styles={activePage === 0 ? "border-b-2 border-white text-white font-bold text-xl" : "text-white text-xl"}
      >
        Home Page
      </TextButton>
      <TextButton
        onClick={() => {if (activePage === 0) togglePageHandler()}}
        styles={activePage === 1 ? "border-b-2 border-white text-white font-bold text-xl" : "text-white text-xl"}
      >
        Request Details
      </TextButton>

      <div className="flex flex-row w-1/2 justify-evenly items-center">
        <LargeText className={"text-white"}>{locationName}</LargeText>
        <RegularText className={"text-white"}>
          Today: {getDateString(new Date())}
        </RegularText>
      </div>
    </div>
  );
};

export default Header;
