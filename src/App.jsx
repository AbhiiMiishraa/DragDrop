

import React from "react";
import { useState } from "react";
import "./Style.css"


export default function App() {
  const [leftItem, setLeftItem] = useState([
    "Apple",
    "mango",
    "orange",
    "Apple",
    "mango",
    "orange",
    "grapes",
    "pumpkin",
    "cherry",
  ]);
  const [rightItem, setRightItem] = useState(["grapes", "pumpkin", "cherry"]);

  const [dragItem, setDragItem] = useState(null);
  const [dragFrom, setDragFrom] = useState(null);

  const allowDrop = (e) => e.preventDefault();

  const dragStart = (item, from) => {
    setDragFrom(from);
    setDragItem(item);
  };

  const onDragItem = (to) => {
    if (dragFrom == "right" && to == "left") {
      setRightItem((prev) => prev.filter((item) => item != dragItem));
      setLeftItem((prev) => [...prev, dragItem]);
    }
    if (dragFrom == "left" && to == "right") {
      setLeftItem((prev) => prev.filter((item) => item != dragItem));
      setRightItem((prev) => [...prev, dragItem]);
    }
  };

  return (
    <div className="container">
      <div
        className="box"
        onDragOver={allowDrop}
        onDrop={() => onDragItem("left")}
      >
        <h3>LEFT</h3>
        {leftItem.map((item, index) => (
          <li
            className="list"
            key={index}
            draggable={true}
            onDragStart={() => dragStart(item, "left")}
          >
            {item}
          </li>
        ))}
      </div>
      <div
        className="box"
        onDragOver={allowDrop}
        onDrop={() => onDragItem("right")}
      >
        <h3>RIGHT</h3>
        {rightItem.map((item, index) => (
          <li
            className="list"
            key={index}
            draggable={true}
            onDragStart={() => dragStart(item, "right")}
          >
            {item}
          </li>
        ))}
      </div>
    </div>
  );
}
