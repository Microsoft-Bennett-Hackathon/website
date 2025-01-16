import React from "react";

const Musclegain = () => {
  return (
    <>
      <div className="dashboard-home-container flex flex-col p-[40px] overflow-scrolls">
        <div className="dh-top flex flex-col gap-[30px]">
          <div className="flex flex-row gap-[30px]">
            <div className="bg-[#2d2d2d] w-1/2 h-[140px] rounded-lg flex flex-row items-center p-[10px] hover:scale-105 transition-transform duration-300">
              <img
                src="/workout img.png"
                alt=""
                className="w-[150px] h-full rounded-lg object-cover"
              />
              <div className="ml-[15px] flex flex-col gap-2">
                <span className="text-white font-bold">
                  Weight Loss Workout
                </span>
                <span className="text-sm font-normal">
                  By default, Tailwind provides two grow utilities. You can
                  customize these values.{" "}
                </span>
                <span className="text-sm font-thin text-slate-300">
                  11:30 - 1:00
                </span>
              </div>
            </div>
            <div className="bg-[#2d2d2d] w-1/2 h-[140px] rounded-lg flex flex-row items-center p-[10px] hover:scale-105 transition-transform duration-300">
              <img
                src="/bodybuilder.avif"
                alt=""
                className="w-[150px] h-full rounded-lg object-cover"
              />
              <div className="ml-[15px] flex flex-col gap-2">
                <span className="text-white font-bold">Muscle Gain</span>
                <span className="text-sm font-normal">
                  By default, Tailwind provides two grow utilities. You can
                  customize these values.{" "}
                </span>
                <span className="text-sm font-thin text-slate-300">
                  11:30 - 1:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Musclegain;
