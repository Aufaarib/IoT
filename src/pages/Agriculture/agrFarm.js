import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import Speedometer from "../../speedometer";

function AgrFarm() {
  const [data, setData] = useState([]);
  const [lowest, setLowest] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state.device);
  console.log(lowest);

  // Push Function
  const Push = (value) => {
    db.ref(`${localStorage.getItem("USER")}/agri_farm/${location.state.device}`)
      .update({
        sprinkler1: value,
      })
      .catch(alert);
  };

  const Push2 = (value) => {
    db.ref(`${localStorage.getItem("USER")}/agri_farm/${location.state.device}`)
      .update({
        soil_humidity_lowest: value,
      })
      .catch(alert);
  };

  useEffect(() => {
    const dataRef2 = db.ref(
      `${localStorage.getItem("USER")}/agri_farm/${location.state.device}`
    ); // Replace with your Firebase data path
    dataRef2.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setData(data);
        setLowest(data.soil_humidity_lowest);
      }
      if (data.soil_humidity < data.soil_humidity_lowest) {
        db.ref(
          `${localStorage.getItem("USER")}/agri_farm/${location.state.device}`
        )
          .update({
            soil_humidity_lowest: data.soil_humidity,
          })
          .catch(alert);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => {
      dataRef2.off();
    };
  }, []);

  const toDevices = () => {
    navigate("/agri-farm/devices");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "50px",
        width: "100%",
      }}
    >
      <h1 className="p-2 rounded-none w-full capitalize">{`${location.state.device} Detail`}</h1>
      <div className="p-10 rounded-lg bg-slate-200 capitalize overflow-x-auto w-full">
        <div className="flex flex-col lg:flex-row justify-evenly gap-[10px] w-full">
          {/* <Speedometer
            color={["red", "yellow", "green"]}
            value={data.air_humidity}
            title="Air Humidity"
          /> */}
          <Speedometer
            color={["yellow", "green", "red"]}
            value={data.air_temp}
            title="Air Temperature"
          />
          <Speedometer
            color={["red", "yellow", "green"]}
            value={data.soil_humidity}
            title="Soil Humidity"
          />
          <Speedometer
            color={["red", "yellow", "green"]}
            value={data.soil_temp}
            title="Soil Temperature"
          />
        </div>
        {/* <div className="flex flex-row justify-between">
          <div className="flex gap-1 mt-10">
            <button
              className="p-2 rounded-lg bg-blue-200 capitalize"
              onClick={() => Push(0)}
            >
              Sprinkler 1 ON
            </button>
            <button
              className="p-2 rounded-lg bg-blue-200 capitalize"
              onClick={() => Push(1)}
            >
              Sprinkler 1 OFF
            </button>
            <button
              className="p-2 rounded-lg bg-blue-200 capitalize"
              onClick={() => Push2(100)}
            >
              Reset Lowest
            </button>
            {/* <button
              className="p-2 rounded-lg bg-blue-200 capitalize"
              onClick={() => Push2(1)}
            >
              Sprinkler 2 OFF
            </button> */}
        {/* </div>
          <div className="flex flex-col gap-1 mt-10">
            <h2>Sprinkler1 {data.sprinkler1 == "0" ? "ON" : "OFF"}</h2>
            {/* <h2>Nyala {data.sprinkler1 == "0" ? "ON" : "OFF"} Kali</h2> */}
        {/* <h2>Lowest SH {lowest}</h2>
            {/* <h2>Sprinkler2 {data.sprinkler2 == "0" ? "ON" : "OFF"}</h2> */}
        {/* </div>
        </div> */}
      </div>
      <button
        className="p-2 rounded-lg bg-slate-200 capitalize"
        onClick={() => toDevices()}
      >
        Back
      </button>
    </div>
  );
}

export default AgrFarm;
