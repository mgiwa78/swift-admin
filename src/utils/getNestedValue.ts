/**
 * Function to retrieve nested values from an object based on a string accessor.
 * @param obj The object to retrieve the value from.
 * @param accessor The string accessor, e.g., "student.name".
 * @returns The nested value or undefined if not found.
 */
export const getNestedValue = (obj: any, accessor: string): any => {
  if (!obj || !accessor) return undefined;

  return accessor.split(".").reduce((nestedObj, key) => nestedObj?.[key], obj);
};
