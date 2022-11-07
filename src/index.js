import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Thanks from "./Thanks/Thanks";
import { LanguageContextProvider } from "./store/langContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  </LanguageContextProvider>
);
