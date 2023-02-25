import React from "react";
import NinjaLogo1 from "../assets/NinjaVanLogo.svg";

const RequestDetails = () => {
  return (
    <div>
      <div class="bg-black flex flex-row p-5">
        <div class="flex basis-2/3 item-center">
          <img src={NinjaLogo1}></img>
        </div>
        <div class="flex flex-row basis-1/3 items-center">
          <div class="flex basis-1/2 justify-start">
            <div class="text-white text-4xl font-bold">Yio Chu Kang</div>
          </div>
          <div class="flex basis-1/2 justify-end">
            <div class="text-white text-lg">Today: 25 Feb 2023</div>
          </div>
        </div>
      </div>

      <div class="flex flex-row">
        <div class="flex flex-col basis-1/2 bg-red-500">
          <div class="flex text-4xl text-white p-5">28 Feb 2023</div>
          <div class="flex text-7xl text-white font-bold justify-end pt-10 pr-3">
            Request
          </div>
          <div class="flex justify-center text-4xl text-white mt-10 mb-5">
            Requester
          </div>
          <div class="flex mx-10 bg-white rounded-md justify-center p-3">
            Clementi Station
          </div>
          <div class="flex justify-center p-3 text-white">
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
          <div class="flex justify-evenly bg-white mx-10 mt-5 p-3 rounded-md">
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
          <div class="flex justify-center text-4xl m-5 text-md text-white">
            Request Information
          </div>
          <div class="flex flex-row m-10">
            <div class="flex basis-1/2 bg-white ml-10 mr-2 p-3 rounded-md text-gray">
              Parcel Quantity:
            </div>
            <div class="flex basis-1/2 bg-white ml-2 mr-10 p-3 rounded-md text-gray">
              Drivers:
            </div>
          </div>
        </div>
        <div class="flex flex-col basis-1/2 bg-white">
          <div class="flex text-4xl text-black p-5">28 Feb 2023</div>
          <div class="flex text-7xl text-red-500 font-bold justify-start pt-10 pl-3">
            Details
          </div>
          <div class="flex justify-start text-2xl text-black ml-10 mt-10 mb-7">Provider</div>
          <div class="flex bg-white border-2 border-grey-500 rounded-md justify-start mx-10 p-3">
            Choa Chu Kang Station
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
