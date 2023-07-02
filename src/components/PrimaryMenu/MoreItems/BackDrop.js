import backdrop from "../../../assets/backdrop.png"
import { useState, useEffect, React } from "react"
import "./BackDrop.css"

const BackDrop = () => {
  const [pointer, setPointer] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    window.addEventListener("mousemove", mousePointer);
        
    function mousePointer(e) {
      pointer.style = setPointer({
        x: e.clientX,
        y: e.clientY
      })
    }
  })

  return (
    <div className="banner">
      <img src={backdrop} alt="" className="img" />

      <div
        value={pointer}
        style={{
          top: `${pointer.y}px`,
          left: `${pointer.x}px`,
          width: "80px",
          height: "80px",
          border: "1px solid black",
          borderRadius: "50%",
          position: "absolute",

          transform: "translate(-50%, -50%)",
          backdropFilter: "greyscale(1)"
        }}>

      </div>
    </div>
  )
}

export default BackDrop
