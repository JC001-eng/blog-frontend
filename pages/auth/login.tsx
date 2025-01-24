import React, { useState } from "react";
import api from "../../services/api";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();

  interface LoginResponse {
    token: string;
    username: string;
    user_id: string;
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.post<LoginResponse>("/sessions", {
        email,
        password,
      });
      const { token, username: responseUsername } = response.data;
      localStorage.setItem("token", token);

      setUsername(responseUsername);
      router.push({
        pathname: `/dashboard/${responseUsername}`,
      });
    } catch (error: any) {
      setMessage(error.response?.data?.error || "Invalid credentials.");
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
