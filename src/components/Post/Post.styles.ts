import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem;
  max-width: 800px;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 3.5rem 2rem;

  .author-wrapper {
    text-align: center;
    margin: 1rem 0;
  }

  .title {
    margin: 2rem 0;
    border: transparent;
    background-color: #f2f0f0;
    font-size: 3rem;
    outline: 1px solid #f2f0f0;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;

    &:focus,
    &:active {
      outline: 1px solid #fff;
      background-color: #fff;
    }
  }
`;
