import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import img1 from "../../img/device1.jpg";
import img2 from "../../img/device2.jpeg";
import img3 from "../../img/device3.jpg";

const AgrDevices = () => {
  const [data2, setData2] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dataRef2 = db.ref(`${localStorage.getItem("USER")}/agri_farm`); // Replace with your Firebase data path
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

  console.log(arrayResult);

  const toAgrFarm = (device) => {
    navigate("/agri-farm/devices/detail", {
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
    <div>
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
              onClick={() => toAgrFarm(data.name)}
            >
              {data.name}
              <img className="mt-3" src={img2}></img>
            </button>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <button
        className="p-2 rounded-lg bg-slate-200 mt-10"
        onClick={() => toHome()}
      >
        Back
      </button>
    </div>
  );
};

export default AgrDevices;
