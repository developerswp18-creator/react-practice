import "../StateHook.css";
import { useState } from "react";
export const State = () => {
    const [count, setCount] = useState(0);
    const handleButtonClick = () => {
        setCount(() => count + 1);
    }
  return (
    <>
      <div className="divme">
        <h1>{count}</h1>
        <button className="btn btn-primary" onClick={handleButtonClick}>Increment</button>
      </div>
      <ChildComponent count={count} />
    </>
  );
}; 

function ChildComponent({ count }) {
   console.log("ChildComponent rendered");
   return (
   <div>
    <h1>Child Component - {count}</h1>
   </div>
   );
}