import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [assignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const [task, setTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };
    setTask(newTask);

    const data = JSON.parse(localStorage.getItem("employees"));

    data.forEach((e) => {
      if (assignTo == e.firstName) {
        e.tasks.push(task);
      }
    });
    localStorage.setItem("employees", JSON.stringify(data))
    setAsignTo("");
    setCategory("");
    setDescription("");
    settaskDate("");
    setTaskTitle("");
  };

  return (
    <div className="p-5 bg-gradient-to-br from-[#23272f] via-[#23272f] to-[#181c23] mt-7 rounded-2xl shadow-2xl border border-gray-700 max-w-7xl mx-auto">
      <form
        action=""
        onSubmit={(e) => {
          submitHandler(e);

          alert("Task Created Successfully");
        }}
        className="flex flex-wrap w-full items-start justify-between gap-8"
      >
        <div className="w-full md:w-1/2">
          <div className="mb-6">
            <h3 className="text-sm text-gray-200 mb-1 tracking-wide font-semibold uppercase letter-spacing-wider">
              Task Title
            </h3>
            <input
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#181c23] border border-gray-600 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 transition-all duration-200 placeholder-gray-400 text-white mb-2 shadow-inner focus:shadow-emerald-400/10"
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Give task to your employee"
            />
          </div>
          <div className="mb-6">
            <h3 className="text-sm text-gray-200 mb-1 tracking-wide font-semibold uppercase letter-spacing-wider">
              Date
            </h3>
            <input
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#181c23] border border-gray-600 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 transition-all duration-200 placeholder-gray-400 text-white mb-2 shadow-inner focus:shadow-emerald-400/10"
              type="date"
              value={taskDate}
              onChange={(e) => settaskDate(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <h3 className="text-sm text-gray-200 mb-1 tracking-wide font-semibold uppercase letter-spacing-wider">
              Assign to
            </h3>
            <input
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#181c23] border border-gray-600 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 transition-all duration-200 placeholder-gray-400 text-white mb-2 shadow-inner focus:shadow-emerald-400/10"
              type="text"
              value={assignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              placeholder="Employee Name"
            />
          </div>
          <div className="mb-6">
            <h3 className="text-sm text-gray-200 mb-1 tracking-wide font-semibold uppercase letter-spacing-wider">
              Category
            </h3>
            <input
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#181c23] border border-gray-600 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 transition-all duration-200 placeholder-gray-400 text-white mb-2 shadow-inner focus:shadow-emerald-400/10"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="design/ dev etc"
            />
          </div>
        </div>

        <div className="w-full md:w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-200 mb-1 tracking-wide font-semibold uppercase letter-spacing-wider">
            Description
          </h3>
          <textarea
            className="w-full h-44 text-sm py-3 px-4 rounded-lg outline-none bg-[#181c23] border border-gray-600 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 transition-all duration-200 placeholder-gray-400 text-white mb-4 resize-none shadow-inner focus:shadow-emerald-400/10"
            name=""
            id=""
            value={taskDescription}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the task in detail..."
          ></textarea>
          <button className="bg-gradient-to-r from-emerald-500 to-teal-400 py-3 hover:from-emerald-600 hover:to-teal-500 px-5 rounded-lg text-sm mt-4 w-full font-bold text-white shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-emerald-400/40 ring-2 ring-transparent hover:ring-emerald-400/40">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
