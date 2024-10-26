import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ReusableForm from "../../../components/form/ReusableForm";
import { Link, useNavigate } from "react-router-dom";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../../redux/services/auth";

const UpdateProfile = () => {
  const [updateProfile] = useUpdateProfileMutation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { data: profileApiResponse } = useGetProfileQuery();

  const attributes = [
    {
      name: "fullName",
      label: "Full name",
      type: "text",
      placeholder: "Enter your fullName",
      validation: Yup.string().required("fullName is required"),
    },

    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      validation: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    },
    {
      name: "address",
      label: "Address",
      type: "textarea",
      placeholder: "Enter your Address",
      validation: Yup.string().required("Address is required"),
    },
  ];

  const initialValues = {
    fullName: profileApiResponse?.fullName,
    email: profileApiResponse?.email,
    address: profileApiResponse?.address,
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const res: any = await updateProfile(values).unwrap();
      if (res.id) {
        toast.success("Profile updated successfully!");
        navigate("/settings");
      }
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
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
      title="Update Profile"
      isLoading={loading}
    />
  );
};

export default UpdateProfile;
