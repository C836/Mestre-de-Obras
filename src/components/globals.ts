import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    width: max-content;
    color: white;
    font-family: 'Roboto', sans-serif;
  }

  .App {
    position: absolute;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Background = styled.img`
  min-height: 100%;
  min-width: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: fixed; 
  top: 0; 
  left: 0; 
  filter: brightness(0.5);
`;
