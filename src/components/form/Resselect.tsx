import React from "react";
import Select, { MultiValue, SingleValue } from "react-select";

interface Option {
  value: string | number;
  label: string;
}

interface CustomReselectProps {
  id?: string;
  label: string;
  options: Option[];
  value: SingleValue<Option> | MultiValue<Option>;
  onChange: (option: SingleValue<Option> | MultiValue<Option>) => void;
  isMulti?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const CustomReselect: React.FC<CustomReselectProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  isMulti = false,
  className = "",
  size = "md",
}) => {
  const sizeClass =
    size === "sm" ? "react-select-sm" : size === "lg" ? "react-select-lg" : "";

  return (
    <div className="mb-10">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <Select
        id={id}
        isSearchable={true}
        className={`react-select-styled react-select-solid ${sizeClass} ${className}`}
        classNamePrefix="react-select"
        options={options}
        value={value}
        onChange={onChange}
        isMulti={isMulti}
        placeholder="Select an option"
      />
    </div>
  );
};

export default CustomReselect;
