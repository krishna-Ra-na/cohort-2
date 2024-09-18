import { useState } from "react";
import { useIsOnline } from "./hooks/useIsOnline";
import { useMousePointer } from "./hooks/useMousePointer";
import { useEffect } from "react";
import { useInterval } from "./hooks/useInterval";

function App() {
  const isOnline = useIsOnline();
  const mousePointer = useMousePointer();
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);
  return (
    <>
      {isOnline ? "You are online yay!" : "You are not online"}
      <div>
        Your mouse position is {mousePointer.x} {mousePointer.y}
      </div>
      <div> Timer is at {count}</div>
    </>
  );
}

export default App;
