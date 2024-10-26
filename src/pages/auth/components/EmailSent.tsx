import { useState } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const initialValues = {
  email: "admin@demo.com",
};

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
});

export function EmailSent() {
  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined);
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      setHasErrors(undefined);
    },
  });

  return (
    <div className="card max-w-[440px] w-full">
      <div className="card-body p-10" id="check_email_form">
        <div className="flex justify-center py-10">
          <img
            alt="image"
            className="dark:hidden max-h-[130px]"
            src="/media/illustrations/30.svg"
          />
          <img
            alt="image"
            className="light:hidden max-h-[130px]"
            src="/media/illustrations/30-dark.svg"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-3">
          Check your email
        </h3>
        <div className="text-2sm font-medium text-center text-gray-600 mb-7.5">
          Please click the link sent to your email{" "}
          <a
            className="text-2sm text-gray-800 font-medium hover:text-primary-active"
            href="#"
          >
            bob@reui.io
          </a>
          <br />
          to verify your account. Thank you
        </div>
        <div className="flex justify-center mb-5">
          <Link
            className="btn btn-primary flex justify-center"
            to="/auth/set-new-password"
          >
            Continue
          </Link>
        </div>
        <div className="flex items-center justify-center gap-1">
          <span className="text-xs font-medium text-gray-600">
            Didn’t receive an email?
          </span>
          <a className="text-xs font-medium link" href="#">
            Resend
          </a>
        </div>
      </div>
    </div>
  );
}
