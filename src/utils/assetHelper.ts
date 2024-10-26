import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

export const useDebouncedValue = (value: any, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = debounce(() => setDebouncedValue(value), delay);

    handler();
    return () => {
      handler.cancel();
    };
  }, [value, delay]);

  return debouncedValue;
};

export function formatCamelCaseToTitleCase(text: string): string {
  if (typeof text !== "string") {
    return "";
  }

  return (
    text
      // Insert a space before all capital letters
      ?.replace(/([A-Z])/g, " $1")
      // Capitalize the first letter of the result
      ?.replace(/^./, (str) => str.toUpperCase())
      ?.trim()
  );
}
