import React from "react";
import { useLocation, useParams } from "react-router-dom";

import Badge from "../../../components/badge";
import ReusableForm from "../../../components/form/ReusableForm";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import * as Yup from "yup";
import {
  useGetAdminQuery,
  useUpdateAdminMutation,
} from "../../../redux/services/admin";
import { toast } from "react-toastify";
type Props = {};

const AdminProfile = (props: Props) => {
  const { adminId } = useParams();
  const location = useLocation();
  const [updateAdmin, { ...updateAdminApiDetails }] = useUpdateAdminMutation();

  const { data: adminApiResponse, ...adminApiResponseDetails } =
    useGetAdminQuery(adminId);

  if (adminApiResponseDetails.isLoading) {
    return <LoadingSpinner />;
  }

  const attributes = [
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
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter First Name",
      validation: Yup.string().required("First Name is required"),
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
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter Last Name",
      validation: Yup.string().required("Last Name is required"),
    },
    {
      name: "contactNumber",
      label: "Contact Number",
      type: "number",
      placeholder: "Enter Contact Number",
      validation: Yup.number().required("Contact Number is required"),
    },
  ];

  const initialValues = {
    email: adminApiResponse.email,
    lastName: adminApiResponse.lastName,
    contactNumber: adminApiResponse.contactNumber,
    status: adminApiResponse.status,
    firstName: adminApiResponse.firstName,
  };

  const handleSubmit = async (values: any) => {
    try {
      const res: any = await updateAdmin({
        id: adminId,
        data: {
          ...values,
          contactNumber: `${values.contactNumber}`,
        },
      }).unwrap();

      if (res.id) {
        toast("Admin Updated!");
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleCancel = () => {
    console.log("Form cancelled");
  };

  return (
    <>
      <div className="container-fixed gap-3 flex flex-col">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">About</h3>
          </div>
          <div className="card-body pt-4 pb-3">
            <table className="table-auto">
              <tbody>
                <tr>
                  <td className="text-sm font-medium text-gray-500 pb-3.5 pe-3">
                    Address:
                  </td>
                  <td className="text-sm font-medium text-gray-800 pb-3.5">
                    {adminApiResponse.address}
                  </td>
                </tr>

                <tr>
                  <td className="text-sm font-medium text-gray-500 pb-3.5 pe-3">
                    Email:
                  </td>
                  <td className="text-sm font-medium text-gray-800 pb-3.5">
                    <a
                      className="text-gray-800 hover:text-primary-active"
                      href={`mailto:${adminApiResponse?.email}`}
                      target="_blank"
                    >
                      {adminApiResponse?.email}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <ReusableForm
          attributes={attributes}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          handleCancel={handleCancel}
          title="Update admin details"
          isLoading={updateAdminApiDetails.isLoading}
        />
      </div>
    </>
  );
};

export default AdminProfile;
