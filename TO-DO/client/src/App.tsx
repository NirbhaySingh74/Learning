// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
// import FinanceDashboard from "./components/FinanceDashboard";
// import Signup from "./components/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/financeDashboard" element={<FinanceDashboard />} /> */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
