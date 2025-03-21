import React, { useMemo, useState } from "react";
import "./BIMcalc.css";

const BIMCalc = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(180);

  const onWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const onHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const CalcHandle = useMemo(() => {
    const calculateHeight = height / 100;
    const result = (weight / (calculateHeight * calculateHeight)).toFixed(1);
    return result;
  }, [weight, height]);

  return (
    <main className="calculator-container">
      <h1 className="title">BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="weight-display">Weight: {weight} kg</p>
        <input
          className="slider"
          type="range"
          step={1}
          min={40}
          max={200}
          value={weight}
          onChange={onWeightChange}
        />
        <p className="height-display">Height: {height} cm</p>
        <input
          className="slider"
          type="range"
          min={140}
          max={220}
          value={height}
          onChange={onHeightChange}
        />
      </div>
      <div className="output-section">
        <p className="bmi-text">Your BMI is</p>
        <div className="bmi-result">{CalcHandle}</div>
      </div>
    </main>
  );
};

export default BIMCalc;
