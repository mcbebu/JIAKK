import React, { useState } from "react";
import Header from "../components/Header/Header";
import LargeText from "../components/Text/LargeText";
import TextButton from "../components/Buttons/TextButton";
import { getDateString } from "../utils/dateGetter";
import Circle from "../components/Shapes/Circle";
import RegularText from "../components/Text/RegularText";
import OtherStations from "./OtherStations";
import BottomSVG from "../assets/Bottom.svg";
import HomePageCar from "../assets/HomePageCar.svg";
import HomePageNinjas from "../assets/HomePageNinjas.svg";

const RowContainer = ({ children, className }) => {
  return (
    <div
      className={`w-11/12 h-1/4 py-5 flex flex-row self-center ${className}`}
    >
      {children}
    </div>
  );
};

const ColumnContainer = ({ children, className }) => {
  return (
    <div className={`flex flex-col h-full self-center ${className}`}>
      {children}
    </div>
  );
};

const Homepage = () => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [isHelped, setIsHelped] = useState({
    one: false,
    two: true,
    three: true,
  });

  const toggleIsHelped = (selector) => {
    setIsHelped((prevState) => {
      return { ...prevState, [selector]: true };
    });
  };

  const toggleIsRejected = (selector) => {
    setIsHelped((prevState) => {
      return { ...prevState, [selector]: false };
    });
  };

  return (
    <>
      <div className="flex flex-col">
        <Header locationName={"Yio Chu Kang"} />
        <RowContainer className={"mt-5 justify-between"}>
          <div className="flex flex-col space-y-4 w-1/4">
            <LargeText>Check:</LargeText>
            <TextButton
              styles={
                "bg-red-600 rounded-3xl text-center p-4 text-4xl text-white font-bold"
              }
            >
              {getDateString(tomorrow)}
            </TextButton>
          </div>
          <div className="flex w-40 h-40 bg-white border-2 rounded-full drop-shadow-md items-center justify-center text-7xl text-red-600 font-bold">
            Y
          </div>
        </RowContainer>
        <RowContainer className={"mt-5 justify-between"}>
          <ColumnContainer className="w-1/3 bg-gray-300 rounded-2xl p-4 divide-y-4">
            <RowContainer className={"space-x-5"}>
              <Circle className={"bg-green-600 w-20 h-20"} />
              <ColumnContainer className={"justify-between text-left"}>
                <RegularText>Expected Arrival: 60pc</RegularText>
                <RegularText>Total Predicted Capability: 60pc</RegularText>
              </ColumnContainer>
            </RowContainer>
            <div className="grid grid-rows-2 grid-flow-col gap-4 p-5">
              <RegularText />
              <LargeText className={"text-right"}>-</LargeText>
              <RegularText className={"text-green-700"}>
                Expected Arrival: 60pc
              </RegularText>
              <RegularText>Total Predicted Capability: 60pc</RegularText>
            </div>
          </ColumnContainer>
          <ColumnContainer className={"w-7/12 space-y-5"}>
            <LargeText>Help other stations</LargeText>
            <OtherStations
              locationName={"Woodlands"}
              needs={80}
              distance={1}
              isHelped={isHelped["one"]}
              toggleTick={toggleIsHelped}
              toggleCross={toggleIsRejected}
              selector="one"
            />
            <OtherStations
              locationName={"Woodlands"}
              needs={80}
              distance={1}
              isHelped={isHelped["two"]}
              toggleTick={toggleIsHelped}
              toggleCross={toggleIsRejected}
              selector="two"
            />
            <OtherStations
              locationName={"Woodlands"}
              needs={80}
              distance={1}
              isHelped={isHelped["three"]}
              toggleTick={toggleIsHelped}
              toggleCross={toggleIsRejected}
              selector="three"
            />
          </ColumnContainer>
        </RowContainer>
      </div>
      <img src={BottomSVG} className="absolute w-full" />
      <img src={HomePageCar} className="absolute left-20 w-80 h-80" />
      <img src={HomePageNinjas} className="absolute right-20 w-80 h-80" />
    </>
  );
};

export default Homepage;
