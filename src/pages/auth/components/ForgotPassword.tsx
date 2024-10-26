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

export function ForgotPassword() {
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
    <div className="card max-w-[370px] w-full">
      <form
        action="#"
        className="card-body flex flex-col gap-5 p-10"
        id="reset_password_enter_email_form"
        method="post"
      >
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">Your Email</h3>
          <span className="text-2sm text-gray-600 font-medium">
            Enter your email to reset password
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Email</label>
          <input
            className="input"
            placeholder="email@email.com"
            type="text"
          />
        </div>
        <Link
          to={"/auth/mail-sent"}
          className="btn btn-primary flex justify-center grow"
        >
          Continue
          <i className="ki-filled ki-black-right"></i>
        </Link>
      </form>
    </div>
  );
}
