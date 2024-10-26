import React from "react";
import * as Yup from "yup";
import ReusableForm from "../../../components/form/ReusableForm";
import { Link, useNavigate } from "react-router-dom";
import { useCreateCustomerMutation } from "../../../redux/services/customers";
import { toast } from "react-toastify";

export function AddCustomer() {
  const [createUser] = useCreateCustomerMutation();
  const navigate = useNavigate();
  const attributes = [
    {
      name: "fullName",
      label: "fullName",
      type: "text",
      placeholder: "Enter Customer fullName",
      validation: Yup.string().required("fullName is required"),
    },

    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter Customer email",
      validation: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      options: [
        {
          label: "Select status",
          value: "",
        },
        { label: "Active", value: "active" },
        { label: "Disabled", value: "disabled" },
        { label: "Pending", value: "pending" },
      ],
      validation: Yup.string().required("Status is required"),
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter Customer password",
      validation: Yup.string().required("Password is required"),
    },
    {
      name: "address",
      label: "Address",
      type: "textarea",
      placeholder: "Enter Customer Address",
      validation: Yup.string().required("Password is required"),
    },
  ];

  const initialValues = {
    fullName: "",
    email: "",
    address: "",
    password: "",
  };

  const handleSubmit = async (values: any) => {
    try {
      const res: any = await createUser(values).unwrap();
      console.log(res);
      if (res.id) {
        toast("User created!");
        navigate(-1);
      }
      if (res.error) {
        null;
        if (res.error?.data?.error?.sqlMessage) {
          toast.error(
            res.error?.data?.error?.sqlMessage ||
              "Failed to submit form. Please try again."
          );
        }
        if (res.error?.data?.message) {
          toast.error(
            res.error?.data?.message ||
              "Failed to submit form. Please try again."
          );
        }
        if (res.error?.data?.details) {
          res.error?.data?.details.map((det: any) => toast.error(det));
        }
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const handleCancel = () => {
    console.log("Form cancelled");
  };

  return (
    <main className="grow content pt-5 h-full" id="content" role="content">
      <div className="container-fixed">
        <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-xl font-semibold leading-none text-gray-900">
              Add Users
            </h1>
          </div>
          <div className="flex items-center gap-2.5">
            {/* <a className="btn btn-sm btn-light" href="#">
              Import CSV
            </a> */}
            <Link className="btn btn-sm btn-primary" to={"/users/all"}>
              All Users
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fixed">
        <div className="grid gap-5 lg:gap-7.5">
          <ReusableForm
            attributes={attributes}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            handleCancel={handleCancel}
            title="Example Form"
            isLoading={false}
          />
        </div>
      </div>
    </main>
  );
}
