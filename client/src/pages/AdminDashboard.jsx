// src/pages/AdminDashboard.jsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a token exists in localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      // If no token found, redirect to the login page
      navigate("/admin-login");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the Admin Dashboard. You are logged in and can manage the system here.</p>
      {/* Add any further admin-specific content here */}
    </div>
  );
};

export default AdminDashboard;
