import React, { FC } from "react";
import { Icon } from "@iconify/react";


interface BodyMassProps {}

const BodyMass: FC<BodyMassProps> = ({}) => {




  
  return (
    <div
      className="flex flex-col items-center h-[640px]
      bg-gradient-to-l from-[#D6E6FE] to-transparent outline-none
    flex-shrink-0 border border-none rounded-b-3xl border-[#B3D3F1]"
    >
      <div className="py-5 items-center">
        <Icon
          className="w-[40px] h-[40px] text-[#B3D3F1]"
          icon="game-icons:abstract-082"
        />
      </div>
      <div className="flex flex-col items-center w-[328px] gap-[24px]">
        <h1 className="text-center font-semibold leading-[52.8px] tracking-[-2.4px] text-[48px] font-inter">
          Body Mass Index Calculator
        </h1>
        <p className="text-center text-[16px] font-normal leading-[24px] text-[#5E6E85] font-inter pb-12">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <div className="border-none rounded-xl w-[328px] flex-col gap-6 bg-white">
        <div className="p-[24px]">
          <h1 className="font-inter text-2xl font-semibold tracking-[-1.2px] pb-[24px]">
            Enter your details below
          </h1>
          <div className="flex items-center gap-[18px]">
            <div className="flex  items-center gap-6">
              <div className="bg-white p-4 rounded-full shadow-md relative">
                <div className="h-4 w-4 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <p className="font-inter text-base font-semibold">Metric</p>
              <div className="bg-white p-4 rounded-full shadow-md relative ">
                <div className="h-4 w-4 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <p className="font-inter text-base font-semibold">Imperial</p>
            </div>
          </div>
          <div className="py-[24px]">
            <p className="leading-[21px] text-sm pb-2">Height</p>
            <input
              className="w-full rounded-md px-6 py-5 text-2xl"
              type="text"
              placeholder="cm"
            />
          </div>
          <div className="py-[24px]">
            <p className="leading-[21px] text-sm pb-2">Weight</p>
            <input
              className="w-full rounded-md px-6 py-5 text-2xl flex items-start"
              type="text"
              placeholder="kg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyMass;