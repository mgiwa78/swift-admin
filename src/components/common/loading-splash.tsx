import React from "react";
import LoadingSpinner from "./LoadingSpinner";

type Props = {};

const LoadingSplash = (props: Props) => {
  return (
    <div
      className="modal open flex justify-center items-center bg-[#000000df]"
      data-modal="true"
      role="dialog"
      tabIndex={-1}
      style={{
        zIndex: 90,
        display: "block",
      }}
      aria-modal={true}
    >
      <div className=" flex justify-center items-center h-full  w-full">
        <div className=" flex justify-center items-center p-4 bg-white rounded-sm w-fit">
          <LoadingSpinner />
        </div>
      </div>
    </div>
  );
};

export default LoadingSplash;
