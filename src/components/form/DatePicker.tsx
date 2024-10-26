import React from "react";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";

interface DatePickerProps {
  label: string;
  value: Date | null;
  onChange: (date: Date) => void;
  className?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className="mb-4">
      <label className=" form-label mb-2">{label}</label>
      <input className="input" type="date" />
    </div>
  );
};

export default DatePicker;
