import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation after successful login

const AdminLogin = () => {
  const navigate = useNavigate(); // To navigate after successful login
  const [email, setEmail] = useState(""); // Store email
  const [password, setPassword] = useState(""); // Store password
  const [errorMessage, setErrorMessage] = useState(""); // Error message on invalid login

  // Hardcoded credentials for testing (you can replace this with backend validation)
  const validEmail = "admin@example.com";
  const validPassword = "password123";


  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password are valid
    if (email.trim() === validEmail && password.trim() === validPassword)
{    // Redirect to the admin dashboard on successful login
      navigate("/admin-dashboard");
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="container mt-5 col-4">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
