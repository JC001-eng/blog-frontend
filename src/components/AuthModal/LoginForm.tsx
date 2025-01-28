import React, { useState } from "react";
import api from "../../services/api";
import { useRouter } from "next/router";
import { AccountButton } from "./AuthModal.styles";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  interface LoginResponse {
    token: string;
    username: string;
    user_id: string;
  }

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please, fill all fields.");
      return;
    }

    try {
      const response = await api.post<LoginResponse>("/sessions", {
        email,
        password,
      });
      const { token, username: responseUsername } = response.data;
      localStorage.setItem("token", token);

      await router.push({
        pathname: `/dashboard/${responseUsername}`,
      });
    } catch (error: any) {
      if (error.response?.data?.error_code === "INVALID_CREDENTIALS") {
        setMessage(
          error.response?.data?.error ||
            "Invalid email or password. Please, try again."
        );
      }
    }
  };

  return (
    <form name="Login" onSubmit={handleLogin}>
      <p>Email</p>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />
      <p>Password</p>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <AccountButton type="submit">Log In</AccountButton>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Login;
