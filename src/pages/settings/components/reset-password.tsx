import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
// import { useResetPasswordMutation } from "../../../redux/services/auth";
import ReusableForm from "../../../components/form/ReusableForm";
import { Link, useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../../../redux/services/auth";

const ResetPassword = () => {
  const [resetPassword] = useResetPasswordMutation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const attributes = [
    {
      name: "currentPassword",
      label: "Current Password",
      type: "password",
      placeholder: "Enter your current password",
      validation: Yup.string().required("Current password is required"),
    },
    {
      name: "newPassword",
      label: "New Password",
      type: "password",
      placeholder: "Enter your new password",
      validation: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("New password is required"),
    },
    {
      name: "confirmNewPassword",
      label: "Confirm New Password",
      type: "password",
      placeholder: "Confirm your new password",
      validation: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Passwords must match")
        .required("Please confirm your new password"),
    },
  ];

  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const res: any = await resetPassword(values).unwrap();
      if (res.success) {
        toast.success("Password reset successfully!");
        navigate("/settings");
      }
    } catch (error: any) {
      toast.error("Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    console.log("Form cancelled");
  };

  return (
    <ReusableForm
      attributes={attributes}
      initialValues={initialValues}
      handleCancel={handleCancel}
      onSubmit={handleSubmit}
      title="Reset Password"
      isLoading={loading}
    />
  );
};

export default ResetPassword;
