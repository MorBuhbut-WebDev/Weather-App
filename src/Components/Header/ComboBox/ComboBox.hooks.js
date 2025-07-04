import { useState, useEffect } from "react";

export function useDebounce(value) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => clearTimeout(timerId);
  }, [value]);

  return debouncedValue;
}
