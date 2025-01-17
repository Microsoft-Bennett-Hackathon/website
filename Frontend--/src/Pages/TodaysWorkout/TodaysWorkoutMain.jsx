import React from "react";
import { Link } from "react-router-dom";
import TodaysWorkout from "../../Components/Dashboard/TodaysWorkout";

const TodaysWorkoutMain = () => {
  return (
    <>
      <div className="dashboard-container bg-black h-screen flex flex-col ">
        <div className="dashboard-components dashboard-top-bar bg-[#2D2D2D] w-full top-0 h-[70px] border-2 border-black">
          <div className="top-bar-container flex flex-row justify-between items-center ml-[80px] mr-[450px] h-full px-[20px] ">
            <h1 className="text-white font-extrabold text-3xl">Overview</h1>
            <div className="flex flex-row gap-[20px] items-center">
              <div className="searchbar  bg-[#D9D9D9] h-[35px] rounded-[15px] px-[20px] flex flex-row items-center">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24=0"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent placeholder-gray-800 border-none outline-none focus:ring-0"
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20s"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm4-8h8v-2H6zm0-3h12V9H6zm0-3h12V6H6z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="dashboard-components dashboard-left-bar bg-[#2D2D2D] h-full left-0 w-[80px] border-2 border-black absolute">
          <div className="left-bar-links flex  flex-col gap-[30px] mt-[100px] justify-center items-center">
            <Link to="/">
              <img src="/dumble logo.png" alt="" className="w-[50px]" />
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-width="2"
              >
                <path
                  stroke-linejoin="round"
                  d="m21 6l-5.293 5.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 0-1.414 0L7 14"
                />
                <path d="M3 3v14.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21H21" />
              </g>
            </svg>
            <Link to="/camera">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M20 4h-3.17L15 2H9L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20zM12 7a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3"
                />
              </svg>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
              />
            </svg>
          </div>
        </div>

        <div className="dashboard-components dashboard-right-bar bg-[#2D2D2D] h-full right-0 w-[450px] absolute border-2 border-black">
          <div className="right-bar-container flex flex-col px-[50px] ">
            <div className="r-top flex flex-col gap-[30px] mt-[18px]">
              <h1 className="text-white font-semibold text-2xl">
                Today's Workout
              </h1>
              <div className="flex flex-col px-[5px] shadow-sm shadow-slate-400 rounded-lg gap-[20px] mt-[5px]">
                <img src="/workout img.png" alt="" />
                <div className="flex flex-col px-[10px] my-[10px]">
                  <span className=" font-semibold text-white">
                    {" "}
                    shoulder exercise
                  </span>
                  <span className="font-medium text-white "> Week 1</span>
                </div>
              </div>
            </div>
            <div className="r-bottom mt-[25px]">
              <h1 className="text-white font-semibold text-2xl">
                Today's Diet{" "}
              </h1>
              <div className="diet-details-container flex flex-col gap-[20px] mt-[15px]">
                <div className="w-full  rounded-[20px] h-[60px] p-[10px] text-white flex flex-row items-center gap-[20px] px-3 hover:bg-[#404040] hover:scale-105 hover:shadow-sm hover:shadow-[#ff0000] transition-all duration-300 ease-in-out">
                  <img
                    src="breakfast.jpg"
                    className="w-[45px] h-[45px] rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-white"> Breakfast</span>
                    <div className="flex flex-row gap-[15px]">
                      <span className="text-sm font-normal text-white">
                        Calories :1000 cal{" "}
                      </span>
                      <span className="text-sm font-normal text-white">
                        Protein : 20g{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full  rounded-[20px] h-[60px] p-[10px] text-white flex flex-row items-center gap-[20px] px-3 hover:bg-[#404040] hover:scale-105 hover:shadow-sm hover:shadow-[#ff0000] transition-all duration-300 ease-in-out">
                  <img
                    src="lunch.jpg"
                    className="w-[45px] h-[45px] rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-white"> Lunch</span>
                    <div className="flex flex-row gap-[15px]">
                      <span className="text-sm font-normal text-white">
                        Calories :1000 cal{" "}
                      </span>
                      <span className="text-sm font-normal text-white">
                        Protein : 20g{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full  rounded-[20px] h-[60px] p-[10px] text-white flex flex-row items-center gap-[20px] px-3 hover:bg-[#404040] hover:scale-105 hover:shadow-sm hover:shadow-[#ff0000] transition-all duration-300 ease-in-out">
                  <img
                    src="dinner.jpg"
                    className="w-[45px] h-[45px] rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-white"> Dinner</span>
                    <div className="flex flex-row gap-[15px]">
                      <span className="text-sm font-normal text-white">
                        Calories :1000 cal{" "}
                      </span>
                      <span className="text-sm font-normal text-white">
                        Protein : 20g{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TodaysWorkout />
        <div className="t text-white ml-[80px] mr-[450px] relative"></div>
      </div>
    </>
  );
};

export default TodaysWorkoutMain;
