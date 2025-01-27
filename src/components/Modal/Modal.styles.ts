import styled from "styled-components";

interface ModalContainerProps {
  $isOpen: boolean;
}

export const ModalContainer = styled.div.attrs(() => ({
  role: "dialog",
}))<ModalContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s;
  display: ${({ $isOpen }): string => ($isOpen ? "flex" : "none")};
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  position: relative;

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
`;