import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/home");
  };

  return (
    <div className="App">
      <div className="bg-white w-full h-screen flex items-center justify-center p-16">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
