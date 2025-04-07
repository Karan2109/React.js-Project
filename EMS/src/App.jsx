import React, { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  // const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    setLocalStorage(); // optional, if you initialize default data

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      setUser(loggedInUser.role);
      setLoggedInUserData(loggedInUser.data);

      // if (loggedInUser.role === "employee" && authData) {
      //   const { employees } = authData;
      //   const empData = employees.find((e) => e.email === loggedInUser.email);
      //   setLoggedInUserData(empData);
      // }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    const { employees, admin } = getLocalStorage();

    const isAdmin = admin.some(
      (a) => a.email === email && a.password === password
    );
    const employeeData = employees.find(
      (e) => e.email === email && e.password === password
    );

    if (isAdmin) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (employeeData) {
      setUser("employee");
      setLoggedInUserData(employeeData); //setLoggedInUserData("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employeeData })
      );
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard changeUser={setUser} /> : ""}
      {user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
