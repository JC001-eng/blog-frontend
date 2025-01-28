import React from "react";
import { ModalContainer, ModalContent } from "./Modal.styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalContainer $isOpen={isOpen} onClick={handleCloseModal}>
      <ModalContent>
        <button className="close" onClick={onClose}>
          &times;
        </button>
        {title && <h2>{title}</h2>}
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
