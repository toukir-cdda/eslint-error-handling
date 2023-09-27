"use client";
import { useState } from "react";

const FontSize = () => {
  const [unit, setUnit] = useState("px");
  const [fontSize, setFontSize] = useState("");

  const handleChange = (e) => {
    setFontSize(unit === "px" ? `${e.target.value}px` : `${e.target.value}rem`);
  };
  console.log(fontSize);
  return (
    <div>
      <span>Select size unit</span>
      <select onChange={(e) => setUnit(e.target.value)}>
        <option value="px">px</option>
        <option value="rem">rem</option>
      </select>
      <input
        type="number"
        name=""
        id=""
        placeholder="@font size"
        onChange={handleChange}
        pattern="^(?!\s*$).+"
        required
      />
    </div>
  );
};

export default FontSize;
