import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userdata, setUserData] = useContext(AuthContext);

  return (
    <div>
      <div className="bg-[#1c1c1c]/70 p-6 rounded-2xl mt-8 mb-4 h-92 shadow-xl border border-gray-700 backdrop-blur-md ring-1 ring-emerald-400/10 max-w-7xl mx-auto">
        <div
          className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 rounded-xl mb-4 px-6 py-3 flex justify-between items-center shadow-md border-l-4 border-emerald-400"
          id="header"
        >
          <div className="w-1/5 flex flex-col items-center">
            <h1 className="text-lg">Employee Name</h1>
          </div>
          <div className="w-1/5 flex flex-col items-center">
            <h1 className="text-lg">Active Task</h1>
          </div>
          <div className="w-1/5 flex flex-col items-center">
            <h1 className="text-lg">Completed Task</h1>
          </div>
          <div className="w-1/5 flex flex-col items-center">
            <h1 className="text-lg">Failed Task</h1>
          </div>
        </div>

        <div id="tasklist" className="h-[85%] overflow-auto">
          {userdata.map((e, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-emerald-900 rounded-xl mb-4 px-6 py-3 transition-all duration-200 shadow-md hover:shadow-gray-700 cursor-pointer bg-gradient-to-r from-gray-800/80 to-gray-700/80 border-l-4"
            >
              <div className="w-1/5 flex flex-col items-center">
                <span className="text-lg font-semibold ">
                  {e.firstName}
                </span>
                <span className="text-sm text-gray-300">{e.role}</span>
              </div>
              <div className="w-1/5 flex flex-col items-center">
                <span className="text-2xl">
                  {e.taskStats.active || "0"}
                </span>
              </div>
              <div className="w-1/5 flex flex-col items-center">
                <span className="text-2xl">
                  {e.taskStats.completed || "0"}
                </span>
              </div>
              <div className="w-1/5 flex flex-col items-center">
                <span className="text-2xl">
                  {e.taskStats.failed || "0"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-10 w-full"></div> {/* Test element */}
    </div>
  );
};

export default AllTask;
