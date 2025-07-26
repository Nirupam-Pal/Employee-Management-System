import React, { useEffect, useState } from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  const [employee, setEmployee] = useState(null);
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.role === "employee") {
      setEmployee(loggedInUser.data);
    }
  }, []);
  return employee ? 
    <div className='p-6 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={props.data}/> 
      <TaskListNumbers data={props.data}/>
      <TaskList data={props.data}/>
    </div>
    : null;
}

export default EmployeeDashboard