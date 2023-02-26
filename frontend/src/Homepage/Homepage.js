import React, { useEffect, useState } from "react";
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
import {
  getExpectedOutput,
  getOtherStationsInfo,
  getStationName,
  getTomorrowDemand,
} from "../api";

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

const Homepage = ({ stationid, activePage, togglePageHandler }) => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [isHelped, setIsHelped] = useState({
    one: false,
    two: false,
    three: false,
  });

  const [stationName, setStationName] = useState("");
  const [expectedDemand, setExpectedDemand] = useState("");
  const [expectedCapability, setExpectedCapability] = useState("");
  const [toHelp, setToHelp] = useState(0);
  const [otherStationInfo, setOtherStationInfo] = useState([
    {
      distance: 11.618607740188402,
      stationid_from: "1",
      stationid_to: "2",
      expectedDifference: 50.61643835616438,
      stationName: "Bedok",
    },
    {
      distance: 8.434661486281879,
      stationid_from: "1",
      stationid_to: "3",
      expectedDifference: 46.43835616438356,
      stationName: "Woodlands",
    },
    {
      distance: 13.429703238804233,
      stationid_from: "1",
      stationid_to: "4",
      expectedDifference: 51.50684931506849,
      stationName: "Clementi",
    },
    {
      distance: 26.890417358226436,
      stationid_from: "1",
      stationid_to: "5",
      expectedDifference: 51.09589041095891,
      stationName: "Tuas",
    },
  ]);

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

  const handleHelper = (amount) => {
    setToHelp((prevState) => {
      return prevState + amount;
    });
  };

  useEffect(() => {
    getStationName(stationid)
      .then(({ data }) => {
        setStationName(data.stationName);
      })
      .catch((e) => console.log(e.response.data));
    getExpectedOutput(stationid)
      .then(({ data }) => {
        setExpectedCapability(Math.ceil(data.expectedOutput));
      })
      .catch((e) => console.log(e.response.data));
    getTomorrowDemand(stationid)
      .then(({ data }) => {
        setExpectedDemand(Math.ceil(data.actualDemand));
      })
      .catch((e) => console.log(e.response.data));
    getOtherStationsInfo(stationid)
      .then(({ data }) => {
        setOtherStationInfo(data);
        console.log(data);
      })
      .catch((e) => console.log(e.response.data));
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <Header
          locationName={stationName}
          activePage={activePage}
          togglePageHandler={togglePageHandler}
        />
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
          <ColumnContainer className="w-2/5 bg-gray-300 rounded-2xl p-4 divide-y-4">
            <RowContainer className={"space-x-5"}>
              <Circle
                className={`${
                  expectedDemand < expectedCapability
                    ? "bg-green-600"
                    : "bg-red-600"
                } w-20 h-20`}
              />
              <ColumnContainer className={"justify-between text-left"}>
                <RegularText>Expected Arrival: {expectedDemand}pc</RegularText>
                <RegularText>
                  Total Predicted Capability: {expectedCapability}pc
                </RegularText>
              </ColumnContainer>
            </RowContainer>
            <div className="grid grid-rows-2 grid-flow-col gap-4 p-5">
              <RegularText />
              <LargeText className={"text-right"}>-</LargeText>
              <RegularText
                className={
                  expectedDemand < expectedCapability
                    ? "text-green-700"
                    : "text-red-700"
                }
              >
                Additional Capability: {expectedCapability - expectedDemand}pc
              </RegularText>
              <RegularText>Help for other stations: {toHelp}pc</RegularText>
            </div>
            <div className="flex flex-row self-center">
              <LargeText>Remaining Capacity: </LargeText>
              <LargeText
                className={
                  expectedCapability - expectedDemand - toHelp >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {expectedCapability - expectedDemand - toHelp} pc
              </LargeText>
            </div>
          </ColumnContainer>
          <ColumnContainer className={"w-7/12 space-y-5"}>
            <LargeText>Help other stations</LargeText>
            <OtherStations
              locationName={otherStationInfo[0]["stationName"]}
              needs={Math.round(otherStationInfo[0]["expectedDifference"])}
              distance={Math.round(otherStationInfo[0]["distance"], 2)}
              isHelped={isHelped["one"]}
              toggleTick={toggleIsHelped}
              toggleCross={toggleIsRejected}
              handleHelper={handleHelper}
              selector="one"
            />
            <OtherStations
              locationName={otherStationInfo[1]["stationName"]}
              needs={Math.round(otherStationInfo[1]["expectedDifference"])}
              distance={Math.round(otherStationInfo[1]["distance"], 2)}
              isHelped={isHelped["two"]}
              toggleTick={toggleIsHelped}
              toggleCross={toggleIsRejected}
              handleHelper={handleHelper}
              selector="two"
            />
            <OtherStations
              locationName={otherStationInfo[2]["stationName"]}
              needs={Math.round(otherStationInfo[2]["expectedDifference"])}
              distance={Math.round(otherStationInfo[2]["distance"], 2)}
              isHelped={isHelped["three"]}
              toggleTick={toggleIsHelped}
              toggleCross={toggleIsRejected}
              handleHelper={handleHelper}
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
