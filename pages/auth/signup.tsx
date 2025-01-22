import React from "react";
import api from "../../services/api";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [username, setUsername] = React.useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users", {
        user: { username, email, password },
      });
      setMessage("Account created successfully!  Please log in.");
    } catch (error) {
      setMessage(error.response.data.error || "An error occurred");
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <h1>Sign Up</h1>

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
