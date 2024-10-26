import React from "react";
import * as Yup from "yup";
import ReusableForm from "../../../components/form/ReusableForm";
import { Link, useNavigate } from "react-router-dom";
import { useCreateAdminMutation } from "../../../redux/services/admin";
import { toast } from "react-toastify";
import { useGetRolesQuery } from "../../../redux/services/role";
import LoadingSplash from "../../../components/common/loading-splash";

export function AddAdmin() {
  const [createAdmin] = useCreateAdminMutation();
  const navigate = useNavigate();
  const { data: rolesApiResponse, ...rolesApiResponseDetails } =
    useGetRolesQuery({});

  if (rolesApiResponseDetails.isLoading) {
    return <LoadingSplash />;
  }
  const attributes = [
    {
      name: "fullName",
      label: "Fullname",
      type: "text",
      placeholder: "Enter Admin fullName",
      validation: Yup.string().required("FullName is required"),
    },

    {
      name: "role",
      label: "Role",
      type: "select",
      placeholder: "Select role name",
      options: rolesApiResponse?.data
        ? [
            {
              label: "Select status",
              value: "",
            },
            ...rolesApiResponse?.data?.map((rolesRes) => ({
              label: rolesRes.name,
              value: Number(rolesRes.id),
            })),
          ]
        : [
            {
              label: "Select status",
              value: "",
            },
          ],
      validation: Yup.string().required("Role is required"),
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter Admin email",
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
      validation: Yup.string().required("Degree is required"),
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter Admin password",
      validation: Yup.string().required("Password is required"),
    },
    {
      name: "address",
      label: "Address",
      type: "textarea",
      placeholder: "Enter Admin Address",
      validation: Yup.string().required("Password is required"),
    },
  ];

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    address: "",
  };

  const handleSubmit = async (values: any) => {
    try {
      const res: any = await createAdmin(values).unwrap();
      console.log(res);
      if (res.id) {
        toast("Admin created!");
        navigate("/admins");
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
            <Link className="btn btn-sm btn-primary" to={"/admins/all"}>
              All Admins
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
            title="Create Admin"
            isLoading={false}
          />
        </div>
      </div>
    </main>
  );
}
