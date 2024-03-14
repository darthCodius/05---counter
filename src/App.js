import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);

  const handleMinus = () => count > -100 && setCount(count - 1);

  const handlePlus = () => count < 100 && setCount(count + 1);

  return (
    <div className="steps">
      <p className="message">Counter</p>

      <div className="numbers">
        <div className="active">{count}</div>
      </div>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#ff3300", color: "#fff" }}
          onClick={handleMinus}
        >
          -
        </button>
        <button
          style={{ backgroundColor: "#009933", color: "#fff" }}
          onClick={handlePlus}
        >
          +
        </button>
      </div>
    </div>
  );
}
