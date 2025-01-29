import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #fff;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 32px;

    ul {
      list-style: none;
      margin: 4px 0;
    }
  }

  p {
    margin: 0;
    padding: 0;
    color: #000;
  }

  button {
    border-radius: 24px;
    background-color: #111;
    color: #fff;
    padding: 10px 20px;
  }
`;
