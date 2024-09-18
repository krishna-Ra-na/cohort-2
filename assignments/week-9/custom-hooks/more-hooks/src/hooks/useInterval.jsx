import { useRef } from "react";
import { useEffect } from "react";

// export const useInterval = (callback, delay) => {
//   useEffect(() => {
//     const intervalId = setInterval(callback, delay);

//     return () => clearInterval(intervalId);
//   }, [callback, delay]);
// };

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
