import React, { useEffect, useState } from 'react'
import Login from './components/Auth/login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx'

const App = () => {

  

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) =>{
  }

  return (
    <>
      {!user ? <Login/>: ''}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
