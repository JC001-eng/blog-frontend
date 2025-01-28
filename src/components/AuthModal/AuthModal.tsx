import React, { useState } from "react";
import Modal from "../Modal/Modal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [view, setView] = useState<"login" | "signup">("login");

  const toggleView = (): void => {
    setView((prev) => (prev === "login" ? "signup" : "login"));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={view === "login" ? "Login" : "Sign Up"}
    >
      {view === "login" ? (
        <>
          <LoginForm />
          <p className="centered">
            Not a member?{" "}
            <button className="btnLink" onClick={toggleView}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm />
          <p className="centered">
            Already have an account?{" "}
            <button className="btnLink" onClick={toggleView}>
              Log In
            </button>
          </p>
        </>
      )}
    </Modal>
  );
};

export default AuthModal;
