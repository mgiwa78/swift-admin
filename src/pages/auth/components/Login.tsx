/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  setCredentials,
  removeCredentials,
  setToken,
} from "../../../redux/slice/authSlice";
import { useLoginMutation } from "../../../redux/services/auth";
import { post } from "../../../lib/methods";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, loginApiDetails] = useLoginMutation();
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      try {
        setSubmitting(true);

        const response: any = await post("auth/signin", {
          email: values.email.toLowerCase(),
          password: values.password,
        });
        dispatch(setToken(response.token));
        navigate("/dashboard");
      } catch (error: any) {
        console.log(error);
        setSubmitting(false);
        dispatch(removeCredentials());

        if (error.response?.data.message) {
          return setStatus(error.response.data.message);
        }
        if (error.response?.data.error) {
          return setStatus(error.response.data.error);
        } else {
          return setStatus(error.error);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <div className="card max-w-[370px] w-full">
      <form
        onSubmit={formik.handleSubmit}
        className="card-body flex flex-col gap-5 p-10"
        id="sign_in_form"
      >
        <div className="text-center mb-2.5">
          <h3 className="text-lg font-semibold text-gray-900 leading-none mb-2.5">
            Sign in
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-2.5">
          <a className="btn btn-light btn-sm justify-center" href="#">
            <img
              alt=""
              className="size-3.5 shrink-0"
              src="/media/brand-logos/google.svg"
            />
            Use Google
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="border-t border-gray-200 w-full"> </span>
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900"> Email </label>
          <input
            className="input"
            placeholder="email@email.com"
            type="text"
            {...formik.getFieldProps("email")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-1">
            <label className="form-label text-gray-900"> Password </label>
            <Link
              to={"/auth/forgot-password"}
              className="text-2sm link shrink-0"
            >
              Forgot Password?
            </Link>
          </div>
          <label className="input" data-toggle-password="true">
            <input
              placeholder="Enter Password"
              type="password"
              {...formik.getFieldProps("password")}
            />
            <button
              className="btn btn-icon"
              data-toggle-password-trigger="true"
            >
              <i className="ki-filled ki-eye text-gray-500 toggle-password-active:hidden"></i>
              <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block"></i>
            </button>
          </label>
        </div>
        <label className="checkbox-group">
          <input
            className="checkbox checkbox-sm"
            name="check"
            type="checkbox"
          />
          <span className="checkbox-label"> Remember me </span>
        </label>
        <button
          type="submit"
          className={clsx("btn btn-primary flex justify-center grow", {
            "btn-loading": formik.isSubmitting || loginApiDetails.isLoading,
          })}
          disabled={formik.isSubmitting || loginApiDetails.isLoading}
        >
          Sign In
        </button>
        {formik.status && (
          <div className="text-red-500 text-sm text-center">
            {formik.status}
          </div>
        )}
      </form>
    </div>
  );
}
