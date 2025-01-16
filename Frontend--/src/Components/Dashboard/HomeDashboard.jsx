import React from "react";

const HomeDashboard = () => {
  return (
    <>
      <div className="dashboard-home-container flex flex-col p-[40px]">
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
          <div className="flex flex-row gap-[30px]">
            <div className="bg-[#2d2d2d] w-1/2 h-[140px] rounded-lg flex flex-row items-center p-[10px] hover:scale-105 transition-transform duration-300">
              <img
                src="/dinner bw.jpg"
                alt=""
                className="w-[150px] h-full rounded-lg object-cover"
              />
              <div className="ml-[15px] flex flex-col gap-2">
                <span className="text-white font-bold">Diet Plan</span>
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
                src="/body.jpg"
                alt=""
                className="w-[150px] h-full rounded-lg object-cover"
              />
              <div className="ml-[15px] flex flex-col gap-2">
                <span className="text-white font-bold">All Exercises</span>
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

        <div className="dh-bottom flex mt-[40px]">
          <div className="bg-[#2d2d2d] w-full rounded-lg px-[10px]">
            <div className="flex flex-row  items-center py-4">
              <div className="flex flex-col items-center border-r w-1/6 border-gray-500 pr-[10px]">
                <span className="text-white font-bold mb-[20px]">Monday</span>
                <span className="text-sm text-slate-300">Arms Day</span>
                <span className="text-xs text-slate-400">
                  6:00 AM - 7:00 AM
                </span>
              </div>
              <div className="flex flex-col items-center border-r w-1/6 border-gray-500 pr-[10px]">
                <span className="text-white font-bold mb-[20px]">Tuesday</span>
                <span className="text-sm text-slate-300">Shoulder Day</span>
                <span className="text-xs text-slate-400">
                  7:30 AM - 8:30 AM
                </span>
              </div>
              <div className="flex flex-col items-center border-r w-1/6 border-gray-500 pr-[10px]">
                <span className="text-white font-bold mb-[20px]">
                  Wednesday
                </span>
                <span className="text-sm text-slate-300">Back Day</span>
                <span className="text-xs text-slate-400">
                  6:00 AM - 7:00 AM
                </span>
              </div>
              <div className="flex flex-col items-center border-r w-1/6 border-gray-500 pr-[10px]">
                <span className="text-white font-bold mb-[20px]">Thursday</span>
                <span className="text-sm text-slate-300">Chest Day</span>
                <span className="text-xs text-slate-400">
                  7:30 AM - 8:30 AM
                </span>
              </div>
              <div className="flex flex-col items-center border-r w-1/6 border-gray-500 pr-[10px]">
                <span className="text-white font-bold mb-[20px]">Friday</span>
                <span className="text-sm text-slate-300">Legs Day</span>
                <span className="text-xs text-slate-400">
                  6:00 AM - 7:00 AM
                </span>
              </div>
              <div className="flex flex-col items-center w-1/6">
                <span className="text-white font-bold mb-[20px]">Saturday</span>
                <span className="text-sm text-slate-300">Rest Day</span>
                <span className="text-xs text-slate-400">No workout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDashboard;
