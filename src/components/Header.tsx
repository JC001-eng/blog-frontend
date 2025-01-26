import React from "react";
import Modal from "./Modal/Modal";
import Login from "../pages/auth/login";
import SignUp from "../pages/auth/signup";
import { useState } from "react";

export default function Header(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState<"login" | "signup">("login");

  const handleOpenModal = (view: "login" | "signup"): void => {
    setIsModalOpen(true);
    setView(view);
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                handleOpenModal("login");
              }}
            >
              Login
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                handleOpenModal("signup");
              }}
            >
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={view === "login" ? "Login" : "Sign Up"}
      >
        {view === "login" && <Login />}
        {view === "signup" && <SignUp />}
      </Modal>
    </header>
  );
}
