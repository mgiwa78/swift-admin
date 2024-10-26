/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { Link, useNavigate, useParams } from "react-router-dom";
// import {toAbsoluteUrl} from '../../../_metronic/helpers'
// import {PasswordMeterComponent} from '../../../_metronic/assets/ts/components'

import * as swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(swal.default);

const initialValues = {
  password: "",
  changepassword: "",
  acceptTerms: false,
};

const NewPasswordSchema = Yup.object().shape({
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

export function SetNewPassword() {
  const navigate = useNavigate();
  let { token } = useParams();
  const [isVerifyToken, setIsVerifyToken] = useState<null | boolean | string>(
    null
  );
  useEffect(() => {
    if (token) {
      verifytoken(token);
    }
  }, [token]);

  const verifytoken = async (token: string) => {};
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: NewPasswordSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      try {
        setLoading(true);
        setSubmitting(true);
        MySwal.fire({
          text: "Password Update Successfully",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Login now!",

          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-danger",
          },
        }).then(() => {
          navigate("/auth/login");
        });
        setSubmitting(false);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setStatus("The NewPassword details is incorrect");
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    // PasswordMeterComponent.bootstrap()
  }, []);
  return (
    <div className="card max-w-[370px] w-full">
      <form
        action="#"
        className="card-body flex flex-col gap-5 p-10"
        id="reset_password_change_password_form"
        method="post"
      >
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Reset Password
          </h3>
          <span className="text-2sm font-medium text-gray-600">
            Enter your new password
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">New Password</label>
          <label className="input" data-toggle-password="true">
            <input
              name="user_new_password"
              placeholder="Enter a new password"
              type="password"
            />
            <div className="btn btn-icon" data-toggle-password-trigger="true">
              <i className="ki-filled ki-eye text-gray-500 toggle-password-active:hidden"></i>
              <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block"></i>
            </div>
          </label>
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">
            Confirm New Password
          </label>
          <label className="input" data-toggle-password="true">
            <input
              name="user_confirm_password"
              placeholder="Re-enter a new Password"
              type="password"
            />
            <div className="btn btn-icon" data-toggle-password-trigger="true">
              <i className="ki-filled ki-eye text-gray-500 toggle-password-active:hidden"></i>
              <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block"></i>
            </div>
          </label>
        </div>
        <Link
          to={"/auth/password-changed"}
          className="btn btn-primary flex justify-center grow"
        >
          Submit
        </Link>
      </form>
    </div>
  );
}
