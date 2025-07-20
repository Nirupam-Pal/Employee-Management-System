import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

const AdminDashboard = ({data}) => {
  return (
    <div className="h-screen w-full p-6">
      <Header data={data}/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
