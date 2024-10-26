import React from "react";
// import { Spinner } from "react-bootstrap";

interface CustomButtonProps {
  btnText: string;
  btnAction?: () => void;
  showLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  showLoading,
  btnAction,
  btnText,
}) => {
  return (
    <button
      onClick={btnAction}
      disabled={showLoading}
      style={{ height: "35px" }}
      className="btn btn-sm d-flex gap-2 justify-content-center align-items-center fw-bold btn-primary"
    >
      {showLoading ? <span>Loading</span> : btnText}
    </button>
  );
};

export default CustomButton;
