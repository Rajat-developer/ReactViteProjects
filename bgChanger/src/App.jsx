import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className=""
        style={{ backgroundColor: color, width: "100vw", height: "100vh" }}
      >
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <div className=" d-flex flex-wrap justify-content-center align-items-center  bg-light rounded-5  px-3 py-1 gap-4 mt-lg-4  ">
            <button
              onClick={() => setColor("red")}
              className="rounded-4 text-white   "
              style={{ backgroundColor: "Red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="rounded-4 text-white "
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("skyblue")}
              className="rounded-4 text-white "
              style={{ backgroundColor: "skyblue" }}
            >
              Skyblue
            </button>
            <button
              onClick={() => setColor("orange")}
              className="rounded-4 text-white "
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("purple")}
              className="rounded-4 text-white "
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("blue")}
              className="rounded-4 text-white "
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("black")}
              className="rounded-4 text-white "
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
