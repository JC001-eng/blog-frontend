import React, { useState } from "react";
import api from "../../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/sessions", { email, password });
      const { token } = response.data;
      localStorage.setItem("token", token);
      setMessage("Logged in successfully!");
    } catch (error) {
      setMessage(error.response.data.error || "Invalid credentials.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Log In</h1>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <button type="submit">Log In</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Login;
