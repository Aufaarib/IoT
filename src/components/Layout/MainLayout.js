import React, { useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onLogout = () => {
    navigate("/");
    localStorage.setItem("USER", "");
  };

  return localStorage.getItem("USER") !== "" ? (
    <div className="App">
      <div className="bg-green-300 flex flex-row justify-between items-center px-5 py-2 text-lg">
        <h1>IoT Based Monitoring System | {localStorage.getItem("SECTOR")}</h1>
        <div className="flex flex-row items-center gap-4">
          <h1 className="capitalize">{localStorage.getItem("USER")}</h1>
          <button
            className="p-2 rounded-lg bg-slate-200"
            onClick={() => onLogout()}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="bg-white w-full h-screen flex items-center justify-center p-16">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default MainLayout;
