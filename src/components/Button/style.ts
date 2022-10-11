import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 6px;
  border-radius: 4px;
  border: 1px solid #ffffff60;
  background-color: #3e7da6;
  font-size: 1.1rem;
  cursor: pointer;
  transition: filter .2s;

  :hover {
    filter: brightness(.9);
  }
`;
