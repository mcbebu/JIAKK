import React from "react";
import NinjaLogo1 from "../assets/NinjaVanLogo.svg";
import Tick from "../assets/Tick.svg";
import Cross from "../assets/Cross.svg";
import HomePageCar from "./assets/HomePageBg.svg"

const Homepage = () => {
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
        <div class="flex flex-col basis-1/4">
          <div class="flex">Check:</div>
          <div class="flex items-center justify-center bg-red-500 text-white mx-3 text-2xl p-5 rounded-lg">
            26 Feb 2023
          </div>
        </div>
        <div class="flex basis-3/4 justify-end">
          <div class="flex w-16 h-16 bg-white border-2 rounded-full items-center justify-center text-2xl">
            Y
          </div>
        </div>
      </div>

      <div class="flex flex-row mb-20">
        <div class="flex basis-1/2 flex-col bg-gray-200 m-10 rounded-lg">
          <div class="flex flex-row">
            <div class="flex basis-1/6 items-center justify-center">
              <div class="flex w-10 h-10 bg-gray-500 rounded-full"></div>
            </div>
            <div class="flex flex-col basis-5/6">
              <div class="flex basis-full">Expected Arrival:</div>
              <div class="flex basis-full">Total Predicted Capability:</div>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex flex-row">
              <div class="flex basis-1/6"></div>
              <div class="flex basis-5/6">Additional Capability</div>
            </div>
            <div class="flex flex-row">
              <div class="flex basis-1/6 justify-center">-</div>
              <div class="flex basis-5/6">Help from other stations</div>
            </div>
            <div class="flex flex-col items-center">Remaining Capacity: X</div>
          </div>
        </div>
        <div class="flex basis-1/2 flex-col mx-10">
          <div class="flex text-lg font-bold">Help Other Stations</div>
          <div class="flex basis-full flex-row bg-black text-white rounded-lg">
            <div class="flex basis-1/6 items-center justify-center">
              <button
                className="bg-transparent focus:outline-none bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${Tick})`,
                  width: "30px",
                  height: "30px",
                }}
              ></button>
            </div>
            <div class="flex basis-1/6 items-center justify-center">
              <button
                className="bg-transparent focus:outline-none bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${Cross})`,
                  width: "30px",
                  height: "30px",
                }}
              ></button>
            </div>
            <div class="flex basis-1/3 items-center justify-center">
              Needs: 80Pc
            </div>
            <div class="flex basis-1/3 items-center justify-center">
              Distance: 1km
            </div>
          </div>
          <div class="flex basis-full flex-row bg-red-500 text-white rounded-lg">
            <div class="flex basis-1/6 items-center justify-center">
              <button
                className="bg-transparent focus:outline-none bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${Tick})`,
                  width: "30px",
                  height: "30px",
                }}
              ></button>
            </div>
            <div class="flex basis-1/6 items-center justify-center">
              <button
                className="bg-transparent focus:outline-none bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${Cross})`,
                  width: "30px",
                  height: "30px",
                }}
              ></button>
            </div>
            <div class="flex basis-1/3 items-center justify-center">
              Needs: 30pc
            </div>
            <div class="flex basis-1/3 items-center justify-center">
              Distance: 2km
            </div>
          </div>
          <div class="flex basis-full flex-row bg-red-500 text-white rounded-lg">
            <div class="flex basis-1/6 items-center justify-center">
              <button
                className="bg-transparent focus:outline-none bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${Tick})`,
                  width: "30px",
                  height: "30px",
                }}
              ></button>
            </div>
            <div class="flex basis-1/6 items-center justify-center">
              <button
                className="bg-transparent focus:outline-none bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${Cross})`,
                  width: "30px",
                  height: "30px",
                }}
              ></button>
            </div>
            <div class="flex basis-1/3 items-center justify-center">
              Needs: 65pc
            </div>
            <div class="flex basis-1/3 items-center justify-center">
              Distance: 1.5km
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="bg-home-page"></div>
      </div>
    </div>
  );
};

export default Homepage;
