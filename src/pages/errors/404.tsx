import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Error404 = (props: Props) => {
  return (
    <div className="card max-w-[370px] w-full py-6">
      <div className="flex flex-col items-center justify-center h-[95%]">
        <div className="mb-10">
          <img
            alt="image"
            className="dark:hidden max-h-[160px]"
            src="/media/illustrations/19.svg"
          />
          <img
            alt="image"
            className="light:hidden max-h-[160px]"
            src="/media/illustrations/19-dark.svg"
          />
        </div>
        <span className="badge badge-primary badge-outline mb-3">
          404 Error
        </span>
        <h3 className="text-2.5xl font-semibold text-gray-900 text-center mb-2">
          We have lost this page
        </h3>
        <div className="text-md font-medium text-center text-gray-600 mb-10">
          The requested page is missing. Check the URL or{" "}
          <Link
            className="text-primary font-medium hover:text-primary-active"
            to="/dashboard"
          >
            Return Home
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default Error404;
