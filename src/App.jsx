import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authdata = useContext(AuthContext)

  // localStorage.clear()
  // useEffect(() => {
  //   if(authdata){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authdata]);
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role);
      setloggedInUserData(userData.data)
    }

  }, [])



  const handleLogin = (email, password) => {
    if (authdata && authdata.admin.find((e) => email == e.email && password == e.password)) {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (authdata) {
      const employee = authdata.employees.find((e) => email == e.email && password == e.password);
      if (employee) {
        setUser('employee');
        setloggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data:employee }))
      }


    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user == "admin" ? <AdminDashboard /> : user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null}
      {/* {user === "employee" && <EmployeeDashboard data={loggedInUserData}/>} */}
    </>
  );
};

export default App;
