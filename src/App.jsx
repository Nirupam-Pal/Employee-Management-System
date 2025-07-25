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

  useEffect(() => {
    // localStorage.clear()
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role);
      setloggedInUserData(userData.data)
    }

  }, [])



  const handleLogin = (email, password) => {
    if (authdata) {
      const adminUser = authdata.admin.find((e) => email == e.email && password == e.password);
      if (adminUser) {
        setUser('admin');
        setloggedInUserData(adminUser);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: adminUser }))
        return;
      }
      const employee = authdata.employees.find((e) => email == e.email && password == e.password);
      if (employee) {
        setUser('employee');
        setloggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
        return;
      }
    }
    alert("Invalid Credentials");
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user == "admin" ? <AdminDashboard data={loggedInUserData} changeUser={setUser} /> : user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null}
    </>
  );
};

export default App;
