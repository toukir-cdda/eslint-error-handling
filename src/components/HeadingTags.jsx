"use client";
import { useState } from "react";

const HeadingTags = () => {
  const [selectTag, setselectTag] = useState("");
  console.log(selectTag);
  return (
    <div className="flex flex-col">
      <span>Select Tag</span>
      <select name="tag" onChange={(e) => setselectTag(e.target.value)}>
        <option value="h1">h1</option>
        <option value="h2">h2</option>
        <option value="h3">h3</option>
        <option value="h4">h4</option>
        <option value="h5">h5</option>
        <option value="h6">h6</option>
      </select>
    </div>
  );
};

export default HeadingTags;
