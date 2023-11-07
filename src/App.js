import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    const dataRef = db.ref("fish_farm"); // Replace with your Firebase data path

    dataRef.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setData(data);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => {
      dataRef.off();
    };
  }, []);

  useEffect(() => {
    const dataRef2 = db.ref("plant_farm"); // Replace with your Firebase data path

    dataRef2.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setData2(data);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => {
      dataRef2.off();
    };
  }, []);

  console.log(data.int);

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "wheat",
          padding: "10px",
          marginBottom: "30px",
          width: "auto",
        }}
      >
        <h1>IoT Based Monitoring System</h1>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-evenly", gap: "0px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "wheat",
            padding: "20px",
            borderRadius: "10px",
            width: "auto",
          }}
        >
          <h1>Fish Farm</h1>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <h4>Ph : {data.ph}</h4>
            <h4>Turbidity : {data.turbidity}</h4>
            <h4>Water Temp : {data.water_temp}</h4>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "wheat",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h1>Veg. Farm</h1>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <h4>Air Humidity : {data2.air_humidity} %</h4>
            <h4>Air Temp : {data2.air_temp} &#8451;</h4>
            <h4>Light : {data2.light} %</h4>
            <h4>Soil : {data2.soil}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
