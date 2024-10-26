import React from "react";

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox"
      />
      <label htmlFor={id} className=" form-label">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
