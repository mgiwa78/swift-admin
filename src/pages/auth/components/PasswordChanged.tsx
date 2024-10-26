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

export function PasswordChanged() {
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
      <div className="card-body p-10">
        <div className="flex justify-center mb-5">
          <img
            alt="image"
            className="dark:hidden max-h-[180px]"
            src="/media/illustrations/32.svg"
          />
          <img
            alt="image"
            className="light:hidden max-h-[180px]"
            src="/media/illustrations/32-dark.svg"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
          Your password is changed
        </h3>
        <div className="text-2sm font-medium text-center text-gray-600 mb-7.5">
          Your password has been successfully updated.
          <br />
          Your account's security is our priority.
        </div>
        <div className="flex justify-center">
          <Link className="btn btn-primary" to="/auth/login">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
