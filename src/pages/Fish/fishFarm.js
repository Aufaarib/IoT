import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import Speedometer from "../../speedometer";
import { useLocation, useNavigate } from "react-router-dom";

function FishFarm() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [agx, setAgx] = useState(80);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const dataRef = db.ref(`client1/fish_farm/${location.state.device}`); // Replace with your Firebase data path

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

  const toFishDevices = () => {
    navigate("/fish-farm/devices");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "50px",
      }}
    >
      <h1 className="p-2 rounded-none w-full bg-slate-400 capitalize">{`${location.state.device} Detail`}</h1>
      <div className="p-10 rounded-lg bg-slate-200 capitalize">
        <div style={{ display: "flex", flexDirection: "row", gap: "40px" }}>
          {/* <h4>Ph : {data.ph}</h4>
            <h4>Turbidity : {data.turbidity}</h4>
            <h4>Water Temp : {data.water_temp}</h4> */}
          <Speedometer id="dial5" value={data.ph} title="pH" />
          <Speedometer id="dial5" value={data.turbidity} title="Turbidity" />
          <Speedometer
            id="dial5"
            value={data.water_temp}
            title="Water Temperature"
          />
        </div>
      </div>
      <button
        className="p-2 rounded-lg bg-slate-200 capitalize"
        onClick={() => toFishDevices()}
      >
        Back
      </button>
    </div>
  );
}

export default FishFarm;
