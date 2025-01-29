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

  h2 {
    margin: 24px auto 0;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px 20px;
    background: transparent;
    border: none;
    font-size: 30px;
    cursor: pointer;
    color: #111;
  }

  p {
    text-align: left;
    margin: 16px 0 0;
    font-size: 0.85rem;
    color: rgb(138, 138, 138);

    &.centered {
      text-align: center;
      color: #333;
    }
  }

  input {
    display: block;
    width: 100%;
    padding: 8px;
    margin: 0 0 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    &.btnLink {
      color: #0077cc;
      background: none;
      border: transparent;
      font-size: 0.9rem;
      padding: 0 4px;
    }
  }
`;
