import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import History from "./Components/History";
import Budget from "./Components/Budget";
import DebtManagement from "./Components/DebtManagement";
import Investment from "./Components/Investment";
import Login from "./Components/Login";
import { UserProvider } from "./Components/UserContext";
import TestNavBar from "./Components/testNavBar";

function App() {
  return (
    <UserProvider>
      <div className="App">
        {/* <NavBar /> */}
        <TestNavBar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/history" element={<History />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/loan" element={<DebtManagement />} />
            <Route path="/investment" element={<Investment />} />
            {/* <Route path="/*" element={<Error />} /> */}
          </Routes>
        </header>
      </div>
    </UserProvider>
  );
}

export default App;
