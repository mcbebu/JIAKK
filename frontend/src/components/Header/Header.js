import Icon from "../Image/Icon"
import NinjaLogo1 from "../../assets/NinjaVanLogo.svg"
import LargeText from "../Text/LargeText";
import RegularText from "../Text/RegularText";
import { getDateString } from "../../utils/dateGetter";

const Header = ({ locationName }) => {
    return <div className="flex flex-row justify-between h-20 bg-black items-center">
        <img src={NinjaLogo1} className="h-2/3 ml-20"></img>
        <div className="flex flex-row w-1/2 justify-evenly items-center">
            <LargeText className={"text-white"}>{locationName}</LargeText>
            <RegularText className={"text-white"}>Today: {getDateString(new Date())}</RegularText>
        </div>
    </div>
}

export default Header;