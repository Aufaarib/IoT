import React, { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";

const Speedometer = ({ id, value, title }) => {
  const [percentValue, setPercentValue] = useState(value);

  useEffect(() => {
    // Update the percent value only when the 'value' prop changes
    setPercentValue(value);
  }, [value]);

  return (
    <div>
      <h2>{title}</h2>
      <GaugeChart
        colors={["red", "yellow", "green"]}
        nrOfLevels={3}
        formatTextValue={() => {
          return title === "Air Temperature"
            ? percentValue + "°C"
            : percentValue + "%";
        }}
        textColor={"black"}
        percent={percentValue / 100}
        animate={false}
      />
    </div>
  );
};

export default Speedometer;
