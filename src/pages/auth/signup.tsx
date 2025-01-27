import React from "react";
import api from "../../services/api";
import { useRouter } from "next/router";
import axios from "axios";

const SignUp: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");

  const router = useRouter();

  interface SignInResponse {
    token: string;
    username: string;
    user_id: string;
  }

  const handleSignUp = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      const response = await api.post<SignInResponse>("/users", {
        user: { username, email, password },
      });
      const { token, username: responseUsername } = response.data;

      localStorage.setItem("token", token);
      await router.push({
        pathname: `/dashboard/${responseUsername}`,
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data.error || "An error occurred");
      }
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="username"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default SignUp;
