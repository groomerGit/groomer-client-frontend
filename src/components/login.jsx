import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Store } from "../App";
import Context from "../Context/axios";



const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { setisAuth } = useContext(Store); // Access context
  const navigate = useNavigate(); // React Router navigation

  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${Context}/client/login`,
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const token = response?.data?.data?.token; 
      if (token) {
        setisAuth(token); // Update the context
        localStorage.setItem("salon_user_token", token); // Store in localStorage
        navigate("/profile"); // Navigate to profile page
      } else {
        throw new Error("Token not found in response.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Invalid username or password");
    }
  };

 
  
  

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-black border border-gray-700 p-8 rounded-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold text-white text-center mb-6">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 bg-black border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-black border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-300"
              required
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#deb887] text-black py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
