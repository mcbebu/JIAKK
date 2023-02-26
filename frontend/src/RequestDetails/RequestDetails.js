import React from "react";
import Header from "../components/Header/Header";
import { useState, useEffect } from "react";
import { getStationName } from "../api";

const RequestDetails = ({ stationid, activePage, togglePageHandler }) => {
  const [stationName, setStationName] = useState("");

  useEffect(() => {
    getStationName(stationid)
      .then(({ data }) => {
        setStationName(data.stationName);
      })
      .catch((e) => console.log(e.response.data));
  }, []);

  return (
    <div>
      <Header
        locationName={stationName}
        activePage={activePage}
        togglePageHandler={togglePageHandler}
      />

      <div class="flex flex-row">
        <div class="flex flex-col basis-1/2 bg-red-500">
          <div class="flex text-4xl text-white p-5">28 Feb 2023</div>
          <div class="flex text-7xl text-white font-bold justify-end pt-10 pr-4">
            Request
          </div>
          <div class="flex justify-center text-4xl text-white mt-10 mb-5">
            Requester
          </div>
          <div class="flex mx-10 bg-white rounded-md justify-center p-3 mb-10">
            Clementi Station
          </div>
          <div class="flex justify-center text-4xl text-white mb-5">
            Routes/Waypoints
          </div>
          <div class="flex justify-evenly bg-white mx-10 p-3 rounded-md">
            <div class="flex flex-col items-center">
              <div class="w-10 h-10 rounded-full bg-white border-4 border-red-500"></div>
              <span class="text-gray-500">Blk 123</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-10 h-10 rounded-full bg-white border-4 border-red-500"></div>
              <span class="text-gray-500">Blk 124</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-10 h-10 rounded-full bg-white border-4 border-red-500"></div>
              <span class="text-gray-500">Blk 125</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-10 h-10 rounded-full bg-white border-4 border-red-500"></div>
              <span class="text-gray-500">Blk 126</span>
            </div>
          </div>
          <div class="flex justify-evenly bg-white mx-10 mt-3 mb-10 p-3 rounded-md">
            <div class="flex flex-col items-center">
              <div class="w-10 h-10 rounded-full bg-white border-4 border-red-500"></div>
              <span class="text-gray-500">Blk 123</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-10 h-10 rounded-full bg-white border-4 border-red-500"></div>
              <span class="text-gray-500">Blk 124</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-10 h-10 rounded-full bg-white border-4 border-red-500"></div>
              <span class="text-gray-500">Blk 125</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-10 h-10 rounded-full bg-white border-4 border-red-500"></div>
              <span class="text-gray-500">Blk 126</span>
            </div>
          </div>
          <div class="flex justify-center text-4xl text-md text-white mb-5">
            Request Information
          </div>

          <div class="flex flex-row mb-5">
            <div class="flex basis-1/2 bg-white ml-10 mr-2 p-3 rounded-md text-gray">
              Parcel Quantity:
            </div>
            <div class="flex basis-1/2 bg-white ml-2 mr-10 p-3 rounded-md text-gray">
              Drivers:
            </div>
          </div>
        </div>

        <div class="flex flex-col basis-1/2 bg-white">
          <div class="flex text-4xl text-white p-5">28 Feb 2023</div>
          <div class="flex text-7xl text-red-500 font-bold justify-start pt-10 pl-3">
            Details
          </div>
          <div class="flex justify-start text-4xl text-black ml-10 mt-10 mb-5">
            Provider
          </div>
          <div class="flex bg-white border-2 border-grey-500 rounded-md justify-start mx-10 p-3 mb-10">
            Yio Chu Kang Station
          </div>
          <div class="flex justify-start text-4xl text-black ml-10 mb-5">
            Number of Employees Allocated
          </div>
          <div class="flex bg-white border-2 border-grey-500 rounded-md justify-start text-gray-400 mx-10 p-3 mb-10">
            Enter Number
          </div>

          <div class="flex flex-row">
            <div class="flex basis-2/3 justify-start">
              <div class="flex justify-start text-4xl text-black ml-10 mb-5">
                Names of Employees:
              </div>
            </div>
            <div class="flex basis-1/3 justify-start">
              <div class="flex justify-start text-4xl text-black ml-2 mb-5">
                Phone Number:
              </div>
            </div>
          </div>

          <div class="flex flex-row">
            <div class="flex basis-2/3 justify-start">
              <div class="flex basis-full bg-white border-2 border-grey-500 rounded-md justify-start text-gray-400 ml-10 mr-2 p-3">
                Enter name
              </div>
            </div>
            <div class="flex basis-1/3 justify-start">
              <div class="flex basis-full bg-white border-2 border-grey-500 rounded-md justify-start text-gray-400 ml-2 mr-10 p-3">
                Enter name
              </div>
            </div>
          </div>

          <div class="flex flex-row">
            <div class="flex basis-2/3 justify-start">
              <div class="flex basis-full bg-white border-2 border-grey-500 rounded-md justify-start text-gray-400 mt-2 ml-10 mr-2 p-3">
                Enter number
              </div>
            </div>
            <div class="flex basis-1/3 justify-start">
              <div class="flex basis-full bg-white border-2 border-grey-500 rounded-md justify-start text-gray-400 mt-2 ml-2 mr-10 p-3">
                Enter number
              </div>
            </div>
          </div>

          <div class="flex flex-row justify-end">
            <div class="flex bg-red-500 rounded-md text-white p-2 mt-10 mr-10">
              Done!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
