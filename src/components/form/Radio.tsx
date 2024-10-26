import React from "react";

interface RadioProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  className?: string;
}

const Radio: React.FC<RadioProps> = ({
  id,
  label,
  checked,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex gap-1 items-center ${className}`}>
      <input
        id={id}
        type="radio"
        checked={checked}
        onChange={onChange}
        className="radio"
        name="radio2"
      />
      <label className="form-label flex items-center gap-2.5 text-nowrap">
        {label}
      </label>
    </div>
  );
};

export default Radio;
