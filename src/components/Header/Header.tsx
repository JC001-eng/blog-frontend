import React from "react";
import AuthModal from "../AuthModal/AuthModal";
import { useState } from "react";
import { StyledHeader } from "./Header.styles";

export default function Header(): JSX.Element {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleAuthModal = (): void => {
    setIsAuthModalOpen((prev) => !prev);
  };

  return (
    <StyledHeader>
      <nav>
        <p>general public</p>
        <ul>
          <li>
            <button
              onClick={() => {
                toggleAuthModal();
              }}
            >
              Login
            </button>
            <AuthModal isOpen={isAuthModalOpen} onClose={toggleAuthModal} />
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
