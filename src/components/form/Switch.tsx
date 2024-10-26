import React from "react";

interface SwitchProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({
  id,
  label,
  checked,
  onChange,
  className = "",
}) => {
  return (
    <div className={` items-center ${className} pt-8`}>
      <label htmlFor={id} className="switch">
        <span className="switch-label form-label mb-1"> {label}</span>
        <input
          className="order-1"
          name="check"
          type="checkbox"
          checked={checked}
          id={id}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Switch;
