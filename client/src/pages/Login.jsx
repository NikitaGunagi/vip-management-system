import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock login logic
    if (email === "admin@example.com" && password === "password") {
      onLogin(); // Trigger login handler
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="position-relative vh-100">
      {/* Full Background Carousel */}
      <div
        id="backgroundCarousel"
        className="carousel slide position-absolute top-0 start-0 w-100 h-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100">
            <img
              src="https://assets.telegraphindia.com/telegraph/5f05d72d-e8c8-4566-ae46-07bed8e66029.jpg"
              className="d-block w-100 h-100 object-fit-cover"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item h-100">
            <img
              src="https://media.assettype.com/nationalherald%2F2024-06%2F47f9c480-a39c-43a8-b615-b7f71ff8e670%2FGettyImages_Security_personnel_stand_guard_outside_Parliament_House_in_New_Delhi__December_2023.jpg?rect=0%2C149%2C3971%2C2085&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100"
              className="d-block w-100 h-100 object-fit-cover"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item h-100">
            <img
              src="https://images.bhaskarassets.com/web2images/521/2024/10/16/awfszx_1729083190.jpg"
              className="d-block w-100 h-100 object-fit-cover"
              alt="Slide 3"
            />
          </div>
          <div className="carousel-item h-100">
            <img
              src="https://images.bhaskarassets.com/web2images/521/2024/08/28/k-53_1724852552.jpg"
              className="d-block w-100 h-100 object-fit-cover"
              alt="Slide 4"
            />
          </div>
          <div className="carousel-item h-100">
            <img
              src="https://assets.telegraphindia.com/telegraph/2023/Dec/1702638058_parliament-3.jpg"
              className="d-block w-100 h-100 object-fit-cover"
              alt="Slide 5"
            />
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#backgroundCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#backgroundCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Login Form Overlay */}
      <div
        className="position-absolute top-50 start-50 translate-middle bg-white p-5 rounded shadow"
        style={{ width: "350px", zIndex: 10 }}
      >
        <h2 className="text-center mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input 
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
