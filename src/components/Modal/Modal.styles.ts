import styled from "styled-components";

export const ModalContainer = styled.div<{ isOpen: boolean }>`
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

  display: ${({ isOpen }): string => (isOpen ? "flex" : "none")};
`;

export const ModalContent = styled.div``;

export const CloseModalButton = styled.button`
  position: absolute;
  top: 10px; 
  right: 10px;
`;