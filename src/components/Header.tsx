import React from "react";
import AuthModal from "./AuthModal/AuthModal";
import { useState } from "react";

export default function Header(): JSX.Element {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleAuthModal = (): void => {
    setIsAuthModalOpen((prev) => !prev);
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                toggleAuthModal();
              }}
            >
              Login / Signup
            </button>
            <AuthModal isOpen={isAuthModalOpen} onClose={toggleAuthModal} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
