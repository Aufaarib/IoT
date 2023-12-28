import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import imgAgr from "../img/sawah.jpeg";
import imgKlm from "../img/klm.jpg";

function HomePage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dataRef2 = db.ref(`${localStorage.getItem("USER")}`); // Replace with your Firebase data path
    dataRef2.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setData(data);
        arr.push(data);
      }
    });
    // Cleanup the listener when the component unmounts
    return () => {
      dataRef2.off();
    };
  }, []);

  const arr = [];
  const arrayResult = Object.keys(data).map((room) => {
    return { name: room };
  });

  console.log(arrayResult);

  const toAgrFarm = () => {
    navigate("/agri-farm/devices");
    localStorage.setItem("SECTOR", "Agriculture");
  };

  const toFishFarm = () => {
    navigate("/fish-farm/devices");
    localStorage.setItem("SECTOR", "Fish Farm");
  };

  return (
    <div className="flex flex-row gap-5">
      {arrayResult.length !== 0 ? (
        arrayResult.map((data) => (
          <button
            className="p-2 rounded-lg bg-slate-200 capitalize"
            onClick={
              data.name === "agri_farm"
                ? () => toAgrFarm(data.name)
                : () => toFishFarm(data.name)
            }
          >
            {data.name}
            <img
              className="mt-3"
              src={data.name === "agri_farm" ? imgAgr : imgKlm}
              width="500"
              height="500"
            />
          </button>
        ))
      ) : (
        <h1>Loading...</h1>
        // <h2 className="font-bold">
        //   User {localStorage.getItem("USER")} Not Found
        // </h2>
      )}
    </div>
  );
}

export default HomePage;
