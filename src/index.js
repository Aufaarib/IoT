import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MainLayout from "./components/Layout/MainLayout";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <MainLayout> */}
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      {/* </MainLayout> */}
    </BrowserRouter>
  </React.StrictMode>
);
