import React from "react";

const AllTask = () => {
  return (
    <div
      id="tasklist"
      className="bg-[#1c1c1c]/70 p-7 rounded-2xl mt-8 h-64 overflow-auto shadow-xl border border-gray-700 backdrop-blur-md ring-1 ring-emerald-400/10 max-w-5xl mx-auto"
    >
        <div className="flex items-center justify-between bg-yellow-400 rounded-xl mb-4 px-6 py-3 transition-all duration-200 shadow-md hover:shadow-emerald-400/20  hover:scale-[1.025] cursor-pointer bg-gradient-to-r from-gray-800/80 to-gray-700/80 border-l-4">
            <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">Nirupam</span>
            <span className="text-sm text-gray-300">Make UI design</span>
            </div>
            <span className="px-4 py-1 rounded-full text-xs font-bold text-white shadow bg-yellow-400 bg-opacity-80 border border-white/10">
            Pending
            </span>
        </div>
        <div className="flex items-center justify-between bg-orange-400 rounded-xl mb-4 px-6 py-3 transition-all duration-200 shadow-md hover:shadow-emerald-400/20  hover:scale-[1.025] cursor-pointer bg-gradient-to-r from-gray-800/80 to-gray-700/80 border-l-4">
            <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">Nirupam</span>
            <span className="text-sm text-gray-300">Make UI design</span>
            </div>
            <span className="px-4 py-1 rounded-full text-xs font-bold text-white shadow bg-orange-400 bg-opacity-80 border border-white/10">
            Pending
            </span>
        </div>
        <div className="flex items-center justify-between bg-violet-400 rounded-xl mb-4 px-6 py-3 transition-all duration-200 shadow-md hover:shadow-emerald-400/20  hover:scale-[1.025] cursor-pointer bg-gradient-to-r from-gray-800/80 to-gray-700/80 border-l-4">
            <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">Nirupam</span>
            <span className="text-sm text-gray-300">Make UI design</span>
            </div>
            <span className="px-4 py-1 rounded-full text-xs font-bold text-white shadow bg-violet-400 bg-opacity-80 border border-white/10">
            Pending
            </span>
        </div>
        <div className="flex items-center justify-between bg-pink-400 rounded-xl mb-4 px-6 py-3 transition-all duration-200 shadow-md hover:shadow-emerald-400/20  hover:scale-[1.025] cursor-pointer bg-gradient-to-r from-gray-800/80 to-gray-700/80 border-l-4">
            <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">Nirupam</span>
            <span className="text-sm text-gray-300">Make UI design</span>
            </div>
            <span className="px-4 py-1 rounded-full text-xs font-bold text-white shadow bg-pink-400 bg-opacity-80 border border-white/10">
            Pending
            </span>
        </div>
        <div className="flex items-center justify-between bg-blue-400 rounded-xl mb-4 px-6 py-3 transition-all duration-200 shadow-md hover:shadow-emerald-400/20  hover:scale-[1.025] cursor-pointer bg-gradient-to-r from-gray-800/80 to-gray-700/80 border-l-4">
            <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">Nirupam</span>
            <span className="text-sm text-gray-300">Make UI design</span>
            </div>
            <span className="px-4 py-1 rounded-full text-xs font-bold text-white shadow bg-blue-400 bg-opacity-80 border border-white/10">
            Pending
            </span>
        </div>
    </div>
  );
};

export default AllTask;
