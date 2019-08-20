import { useState, useEffect } from 'react';

export function useSum(a: number, b: number) {
  const [result, setResult] = useState(a + b);

  useEffect(() => {
    setResult(a + b);
  }, [a, b]);

  return result;
}
