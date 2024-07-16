// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// import FinanceDashboard from "./components/FinanceDashboard";
// import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {<Route path="/signup" element={<SignUp />} />}

          {/* Add other routes here */}
        </Routes>
      </Router>
      <Toaster />
    </>
  );
};

export default App;
