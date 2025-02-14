import styled from "styled-components";

export const MediaUploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  margin: 0 auto 1rem;

  label.file-upload input[type="file"] {
    position: absolute;
    top: -1000px;
  }
`;
