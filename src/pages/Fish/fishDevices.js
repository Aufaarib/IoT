import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import img from "../../img/tank.jpg";

const FishDevices = () => {
  const [data2, setData2] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dataRef2 = db.ref("client1/fish_farm"); // Replace with your Firebase data path
    dataRef2.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setData2(data);
        arr.push(data);
      }
    });
    // Cleanup the listener when the component unmounts
    return () => {
      dataRef2.off();
    };
  }, []);

  const arr = [];
  const arrayResult = Object.keys(data2).map((room) => {
    return { name: room };
  });

  const toFishFarm = (device) => {
    navigate("/fish-farm/devices/detail", {
      state: {
        device: device,
      },
    });
  };

  const toHome = () => {
    navigate("/home");
    localStorage.setItem("SECTOR", "");
  };

  console.log(arrayResult);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "50px",
      }}
    >
      {/* <h1>Fish Farm Devices</h1> */}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        {arrayResult.length !== 0 ? (
          arrayResult.map((data) => (
            <button
              className="p-2 rounded-lg bg-slate-200 capitalize max-w-md"
              onClick={() => toFishFarm(data.name)}
            >
              {data.name}
              <img className="mt-3" src={img}></img>
            </button>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <button
        className="p-2 rounded-lg bg-slate-200 capitalize"
        onClick={() => toHome()}
      >
        Back
      </button>
    </div>
  );
};

export default FishDevices;
