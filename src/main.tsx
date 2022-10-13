import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Background, GlobalStyle } from "./components/globals";
import backgroundImg from "./assets/img/background.jpg";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Background src={backgroundImg} />
    <App />
  </React.StrictMode>
);
