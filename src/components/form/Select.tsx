import React from "react";

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps {
  id?: string;
  label: string;
  multiple?: boolean;
  options: Option[];
  value: string | number;
  onChange: (option: string) => void;
  className?: string;
}

const CustomSelect: React.FC<SelectProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  multiple = false,
  className = "",
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className=" capitalize form-label mb-1">
        {label}
      </label>

      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`select`}
        multiple={multiple}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
