import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [user, setUsername] = useState("");
  const [pwd, setPassword] = useState("");

  useEffect(() => {}, []);

  const onLogin = () => {
    localStorage.setItem("USER", user);
    // localStorage.setItem("")
    navigate("/home");
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 bg-green-300 p-5 rounded-md">
        <label className="font-bold mb-2 text-lg bg-slate-200 p-2 rounded-md">
          IoT Based Monitoring System
        </label>
        <label className="font-bold mb-5">Please Login</label>
        <label className="flex justify-start">Username</label>
        <input
          className="bg-white outline-none p-2 rounded-md"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="flex justify-start">Password</label>
        <input
          className="bg-white0 outline-none p-2 rounded-md"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="bg-slate-200 p-1 rounded-lg" onClick={() => onLogin()}>
        Login
      </button>
    </div>
  );
}

export default Login;
