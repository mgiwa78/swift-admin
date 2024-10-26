import React from "react";

interface InputProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  icon?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  placeholder,
  icon,
  value,
  onChange,
  required = false,
  className = "",
}) => {
  return (
    <div className="mb-1">
      <label htmlFor={id} className="capitalize form-label mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="input-group">
        {icon && (
          <span className="btn btn-icon btn-icon-lg btn-input">
            <i className={`ki-outline  ${icon}`}></i>
          </span>
        )}

        <input
          className="input"
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
};

export default Input;
