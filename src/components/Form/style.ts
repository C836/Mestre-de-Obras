import styled from "styled-components";

export const Label = styled.label`
  width: 100%;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-top: 14px;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid #ffffff60;

    ::placeholder {
      color: #ffffff80;
    }
  }
`;

export const ExtraInput = styled.fieldset`
  display: flex;
  width: 100%;
  column-gap: 12px;
`;
