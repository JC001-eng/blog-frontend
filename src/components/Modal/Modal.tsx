import React from "react";
import { ModalContainer, ModalContent } from "./Modal.styles";

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleModalClose = (): void => {
    setIsOpen(false);
  };

  return (
    <ModalContainer isOpen={isOpen}>
      <button className="close" onClick={handleModalClose}>
        x
      </button>
      <ModalContent>
        <h2>Modal</h2>
        <p>This is a modal</p>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
