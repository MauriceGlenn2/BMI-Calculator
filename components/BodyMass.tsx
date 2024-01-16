import React, { FC, useState } from "react";
import { Icon } from "@iconify/react";
import BodyMassInfo from "./BodyMassInfo";


interface BodyMassProps {
  blue?: boolean;
}

const BodyMass: FC<BodyMassProps> = ({}) => {
const [isRadioSelected, setRadioSelected] = useState(false);

function handleRadioChange() {
  setRadioSelected(!isRadioSelected);
  console.log("clicked");
}



  
  return (
    <>
      <div className="lg:w-[1276px] lg:h-[737px] lg:flex-shrink-0 z-20">
        <div
          className="flex flex-col items-center h-[640px] lg:w-[978px] lg:h-[737px]
      bg-gradient-to-l from-[#D6E6FE] to-transparent outline-none
    flex-shrink-0 border border-none rounded-b-3xl border-[#B3D3F1] pl-6"
        >
          <div className="py-5 items-center">
            <Icon
              className="w-[40px] h-[40px] text-[#B3D3F1] lg:w-[64px] lg:h-[64px]"
              icon="game-icons:abstract-082"
            />
          </div>
          <div className="lg:flex lg:w-[1276px] lg:h-[737px] lg:items-center lg:justify-end lg:pl-6 lg:gap-8">
            <div className="lg:w-[564px] lg:pl-[116px] lg:flex-col">
              <div className="flex flex-col w-[328px] gap-[24px] md:w-[686px]">
                <h1
                  className="text-center font-semibold lg:text-left leading-[52.8px] 
              tracking-[-2.4px] text-[48px] font-inter"
                >
                  Body Mass
                  <br /> Index Calculator
                </h1>
                <p
                  className="text-center lg:w-[456px] text-[16px] font-normal 
              lg:text-left leading-[24px] text-[#5E6E85] font-inter pb-12"
                >
                  Better understand your weight in relation to your height using
                  our body mass index (BM) calculator. While BMI is not the sole
                  determinant of a healthy weight, it offers a valuable starting
                  point to evaluate your overall health and well-being.
                </p>
              </div>
            </div>
            <div
              className="border-none rounded-xl shadow-custom w-[328px] 
          flex-col gap-6 bg-white md:w-[686px] lg:w-[556px]"
            >
              <div className="p-[24px]">
                <h1 className="font-inter text-2xl font-semibold tracking-[-1.2px] pb-[24px]">
                  Enter your details below
                </h1>

                <div className="flex items-center gap-6">
                  <div className="flex items-center md:w-[50%]">
                    <div
                      className="bg-white p-4 rounded-full shadow-md relative cursor-pointer"
                      onClick={handleRadioChange}
                    >
                      <div className="h-4 w-4 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                    <p className="font-inter text-base font-semibold pl-[18px]">
                      Metric
                    </p>
                  </div>
                  <div className="flex items-center md:w-[50%]">
                    <div className="bg-white p-4 rounded-full shadow-md relative cursor-pointer">
                      <div className="h-4 w-4 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                    <p className="font-inter text-base font-semibold pl-[18px]">
                      Imperial
                    </p>
                  </div>
                </div>

                <div className="md:flex md:gap-6 ">
                  <div className="pt-6">
                    <p className="leading-[21px] text-sm pb-2">Height</p>
                    <div className="flex items-start relative">
                      <input
                        className="w-full rounded-md pl-6 pr-14 py-5 text-2xl border border-[#D8E2E7]
                 flex items-start focus:outline-none "
                        type="text"
                      />
                      <span className="text-2xl pr-6 font-semibold text-[#345FF6] tracking-[-1.2px] items-center justify-center flex absolute transform translate-y-1/2 right-0">
                        cm
                      </span>
                    </div>
                  </div>
                  <div className="pt-6">
                    <p className="leading-[21px] text-sm pb-2">Weight</p>
                    <div className="flex items-start relative">
                      <input
                        className="w-full rounded-md pl-6 pr-14 py-5 text-2xl border border-[#D8E2E7]
                flex items-start focus:outline-none"
                        type="text"
                      />
                      <span className="text-2xl pr-6 font-semibold text-[#345FF6] tracking-[-1.2px] items-center justify-center flex absolute transform translate-y-1/2 right-0">
                        kg
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="p-8 mt-6 gap-6 flex flex-col rounded-2xl
            bg-gradient-to-r from-[#345FF6] to-[#587DFF] w-full  border
            md:rounded-r-full"
                >
                  <div className="md:gap-6 md:flex md:justify-center md:items-center md:self-stretch">
                    <div className="md:w-[50%]">
                      <p className="text-white font-semibold leading-6 font-inter pb-2">
                        Your BMI is...
                      </p>
                      <h1 className="font-inter text-white text-[48px] font-semibold tracking-[-2.4px ] leading-[52.8px]">
                        23.4
                      </h1>
                    </div>
                    <div className="md:w-[50%]">
                      <p className=" text-white font-inter text-sm font-normal leading-[21px]">
                        Your BMI suggests you’re a healthy weight. Your ideal
                        weight is between{" "}
                        <span className="font-bold">63.3kgs - 85.2kgs.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BodyMassInfo />
    </>
  );
};

export default BodyMass;