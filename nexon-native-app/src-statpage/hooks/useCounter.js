import { useEffect, useState } from "react";

export default function useCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interValue = 0.01;
    const myInterval = setInterval(() => {
      interValue += (0.025 * (interValue * 5)) / (interValue * 3);
      setCounter(interValue);
      if (interValue >= 1) {
        clearInterval(myInterval);
        setCounter(1);
      }
    }, 20);
  }, []);

  return { counter };
}
