import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx"; 
import Dashboard from "./components/Dashboard.jsx";

const App = () => {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </Router>
  );
};

export default App;
