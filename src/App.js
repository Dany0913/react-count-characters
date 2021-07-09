import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  let [textCounter, setTextCounter] = useState(0);
  return (
    <div className="container">
      <textarea
        id="text"
        onChange={() =>
          setTextCounter(document.getElementById("text").value.length)
        }
        rows="3"
      ></textarea>
      <div className="counter">{textCounter}</div>
    </div>
  );
}

export default App;
