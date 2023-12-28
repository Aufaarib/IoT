import React from "react";
import "./App.css";
import FishFarm from "./pages/Fish/fishFarm";
import AgrFarm from "./pages/Agriculture/agrFarm";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AgrDevices from "./pages/Agriculture/agrDevices";
import FishDevices from "./pages/Fish/fishDevices";
import Login from "./pages/Auth/Login";
import AuthLayout from "./components/Layout/AuthLayout";
import Layout from "./components/Layout/Layout";
import MainLayout from "./components/Layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/agri-farm/devices" element={<AgrDevices />} />
        <Route path="/agri-farm/devices/detail" element={<AgrFarm />} />
        <Route path="/fish-farm/devices" element={<FishDevices />} />
        <Route path="/fish-farm/devices/detail" element={<FishFarm />} />
      </Route>
    </Routes>
  );
}

export default App;
