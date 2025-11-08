
 import 'bootstrap/dist/css/bootstrap.min.css';
// import AssignForces from "./pages/AssignForces";


import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AssignForces from "./pages/AssignForces";
import Home from "./pages/Home";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = () => {
    // Simulate authentication success
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        {/* Route for Login */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />

        {/* Protected Route for Assign Forces and Home */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <>
                <AssignForces />
                <Home />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
