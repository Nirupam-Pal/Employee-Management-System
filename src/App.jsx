import React, { useEffect, useState } from "react";
import Login from "./components/Auth/login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage.jsx";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      console.log(user);
    } else if (email == "user@me.com" && password == "123") {
      setUser("employee");
      console.log(user);
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard />}{" "}
    </>
  );
};

export default App;
