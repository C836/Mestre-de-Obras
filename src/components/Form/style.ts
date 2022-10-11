import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  max-width: 100vw;
  padding: 12px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 60px;
`;

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

export const ExtraInput = styled.div`
  display: flex;
  width: 100%;
  column-gap: 12px;
`;

export const FieldSet = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ffffff60;
  border-radius: 10px;
  width: 100%;
  padding: 12px;
`;
