import React, { useMemo, useState } from "react";

export function Assignment1() {
  const [input, setInput] = useState(0);

  // Your solution starts here
  const expensiveValue = useMemo(() => {
    const calculateFactorial = (n) => (n === 0 || n === 1 ? 1 : n * calculateFactorial(n - 1));
    return calculateFactorial(input);
  }, [input]);
  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
