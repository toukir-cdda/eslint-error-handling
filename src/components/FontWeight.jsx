"use client";
import { useState } from "react";

const FontWeigth = () => {
  const [weigth, setWeigth] = useState("");

  console.log(weigth);
  return (
    <div>
      <span>Select Font weigth</span>
      <select onChange={(e) => setWeigth(e.target.value)}>
        <option value="100">100 – Thin.</option>
        <option value="200">200 – Extra Light (Ultra Light)</option>
        <option value="300">300 – Light</option>
        <option value="400">400 – Normal</option>
        <option value="500">500 – Medium</option>
        <option value="600">600 – Semi Bold (Demi Bold)</option>
        <option value="700">700 – Bold</option>
        <option value="800">800 – Extra Bold (Ultra Bold)</option>
        <option value="900">900 – Black (Heavy)</option>
      </select>
    </div>
  );
};

export default FontWeigth;
