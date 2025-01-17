import React, { useEffect, useState } from "react";

const Allworkouts = () => {
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/exercises");
        const data = await response.json();
        setExercises(data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };
    fetchExercises();
  }, []);

  const totalPages = Math.ceil(exercises.length / exercisesPerPage);

  const currentExercises = exercises.slice(
    (currentPage - 1) * exercisesPerPage,
    currentPage * exercisesPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="dashboard-home-container flex flex-col p-[40px] overflow-scrolls">
        <div className="dh-top flex flex-col gap-[30px]">
          <div className="flex flex-row gap-[30px] flex-wrap">
            {currentExercises.map((exercise, index) => (
              <div
                key={index}
                className="bg-[#2d2d2d] w-[428px] h-[140px] rounded-lg flex flex-row items-center p-[10px] hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="/bodybuilder.avif"
                  alt={exercise.Exercise}
                  className="w-[150px] h-full rounded-lg object-cover"
                />
                <div className="ml-[15px] flex flex-col">
                  <span className="text-white font-bold">
                    {exercise.Exercise}
                  </span>
                  <span className="text-sm font-normal">
                    {exercise.Description}
                  </span>
                  <span className="text-sm font-thin text-slate-300">
                    {exercise.Sets} Sets, {exercise.Reps} Reps
                  </span>
                  <span className="text-sm text-slate-300">
                    Target Area: {exercise.TargetArea}
                  </span>
                  <span className="text-sm text-slate-300">
                    Equipment: {exercise.Equipment}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between ">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Previous
            </button>
            <span className="self-center">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allworkouts;
