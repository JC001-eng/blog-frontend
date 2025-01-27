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

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        <button className="close" onClick={onClose}>
          x
        </button>
        {title && <h2>{title}</h2>}
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
