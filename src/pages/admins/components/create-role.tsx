import React from "react";
import ReusableForm from "../../../components/form/ReusableForm";

import * as Yup from "yup";
import {
  useGetErrandQuery,
  useUpdateErrandMutation,
} from "../../../redux/services/errands";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import { toast } from "react-toastify";
import { useGetCustomersQuery } from "../../../redux/services/customers";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCreateRoleMutation } from "../../../redux/services/role";

type Props = { selectedErrand: string; handleClose: any };

const CreateRole = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [createRole, { ...createRoleApiResponse }] = useCreateRoleMutation();

  const attributes = [
    {
      name: "name",
      label: "name",
      type: "text",
      placeholder: "Role name is required",
      validation: Yup.string().required("Name is required"),
    },
  ];

  const initialValues = {
    name: "",
  };

  const handleSubmit = async (values: any) => {
    try {
      await createRole(values).unwrap();
      navigate("/admins/roles");
      toast("Role Created");
    } catch (error) {
      toast.error("Failed to update errand. Please try again.");
    }
  };

  const handleCancel = () => {
    console.log("Form cancelled");
  };

  return (
    <main className="grow content h-full" id="content" role="content">
      <div className="container-fixed">
        <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-xl font-semibold leading-none text-gray-900">
              Enter role details
            </h1>
          </div>
          <div className="flex items-center gap-2.5">
            {/* <a className="btn btn-sm btn-light" href="#">
          Import CSV
        </a> */}
            <Link className="btn btn-sm btn-primary" to={"/admins/roles"}>
              All roles
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
            title="Create Role"
            isLoading={createRoleApiResponse.isLoading}
          />
        </div>
      </div>
    </main>
  );
};

export default CreateRole;
