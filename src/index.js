import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./App";
import Spotify from "./Projects/Spotify/Spotify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bellycious from "./Projects/Bellycious/Bellycious";
import Cloud from "./Projects/Cloud/Cloud";
import This from "./Projects/This/This";
import Thanks from "./Thanks/Thanks";
import { LanguageContextProvider } from "./store/langContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="spotify" element={<Spotify />} />
        <Route path="bellycious" element={<Bellycious />} />
        <Route path="cloud" element={<Cloud />} />
        <Route path="this" element={<This />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>  
  </LanguageContextProvider>
);
