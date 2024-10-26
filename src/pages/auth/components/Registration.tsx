/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { Link } from "react-router-dom";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  changepassword: "",
  acceptTerms: false,
};

const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("First name is required"),
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  lastname: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Last name is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
  changepassword: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password")], "Password and Confirm Password didn't match"),
  acceptTerms: Yup.bool().required("You must accept the terms and conditions"),
});

export function Registration() {
  const [loading, setLoading] = useState(false);
  // const { saveAuth, setCurrentUser } = useAuth();
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
      } catch (error: any) {
        console.error(error);
        setStatus("The registration details is incorrect");
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  useEffect(() => {}, []);

  return (
    <div className="card max-w-[370px] w-full">
      <form
        action="#"
        className="card-body flex flex-col gap-5 p-10"
        id="sign_up_form"
        method="post"
      >
        <div className="text-center mb-2.5">
          <h3 className="text-lg font-semibold text-gray-900 leading-none mb-2.5">
            Sign up
          </h3>
          <div className="flex items-center justify-center font-medium">
            <span className="text-2sm text-gray-600 me-1.5">
              Already have an Account ?
            </span>
            <a
              className="text-2sm link"
              href="html/demo1/authentication/classic/sign-in.html"
            >
              Sign In
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <a className="btn btn-light btn-sm justify-center" href="#">
            <img
              alt=""
              className="size-3.5 shrink-0"
              src="assets/media/brand-logos/google.svg"
            />
            Use Google
          </a>
          <a className="btn btn-light btn-sm justify-center" href="#">
            <img
              alt=""
              className="size-3.5 shrink-0 dark:hidden"
              src="assets/media/brand-logos/apple-black.svg"
            />
            <img
              alt=""
              className="size-3.5 shrink-0 light:hidden"
              src="assets/media/brand-logos/apple-white.svg"
            />
            Use Apple
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="border-t border-gray-200 w-full"></span>
          <span className="text-2xs text-gray-500 font-medium uppercase">
            or
          </span>
          <span className="border-t border-gray-200 w-full"></span>
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Email</label>
          <input
            className="input"
            name="user_email"
            placeholder="email@email.com"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Password</label>
          <label className="input" data-toggle-password="true">
            <input
              name="user_password"
              placeholder="Enter Password"
              type="password"
            />
            <div className="btn btn-icon" data-toggle-password-trigger="true">
              <i className="ki-filled ki-eye text-gray-500 toggle-password-active:hidden"></i>
              <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block"></i>
            </div>
          </label>
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Confirm Password</label>
          <label className="input" data-toggle-password="true">
            <input
              name="user_password"
              placeholder="Re-enter Password"
              type="password"
            />
            <div className="btn btn-icon" data-toggle-password-trigger="true">
              <i className="ki-filled ki-eye text-gray-500 toggle-password-active:hidden"></i>
              <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block"></i>
            </div>
          </label>
        </div>
        <label className="checkbox-group">
          <input
            className="checkbox checkbox-sm"
            name="check"
            type="checkbox"
          />
          <span className="checkbox-label">
            I accept
            <a className="text-2sm link" href="#">
              Terms &amp; Conditions
            </a>
          </span>
        </label>
        <button className="btn btn-primary flex justify-center grow">
          Sign up
        </button>
      </form>
    </div>
  );
}
