import React from "react";
import { useLocation, useParams } from "react-router-dom";

import Badge from "../../../components/badge";
import ReusableForm from "../../../components/form/ReusableForm";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import * as Yup from "yup";
import {
  useGetCustomerQuery,
  useUpdateCustomerMutation,
} from "../../../redux/services/customers";
import { toast } from "react-toastify";
type Props = {};

const CustomerProfile = (props: Props) => {
  const { customerId } = useParams();
  const location = useLocation();
  const [updateUser] = useUpdateCustomerMutation();

  const { data: customerApiResponse, ...customerApiResponseDetails } =
    useGetCustomerQuery(customerId || "");

  if (customerApiResponseDetails.isLoading) {
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
      label: "fullName",
      name: "fullName",
      type: "text",
      placeholder: "Enter Fullname",
      validation: Yup.string().required("Fullname is required"),
    },
    {
      name: "contactNumber",
      label: "Contact Number",
      type: "text",
      placeholder: "Enter Contact Number",
      validation: Yup.number().required("Contact Number is required"),
    },
  ];

  const initialValues = {
    email: customerApiResponse?.email,
    fullName: customerApiResponse?.fullName,
    contactNumber: customerApiResponse?.contactNumber,
    status: customerApiResponse?.status,
  };

  const handleSubmit = async (values: any) => {
    try {
      await updateUser({ id: customerId || "", data: values });
      toast("User updated");
    } catch (error: any) {
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
                    {customerApiResponse?.address}
                  </td>
                </tr>

                <tr>
                  <td className="text-sm font-medium text-gray-500 pb-3.5 pe-3">
                    Email:
                  </td>
                  <td className="text-sm font-medium text-gray-800 pb-3.5">
                    <a
                      className="text-gray-800 hover:text-primary-active"
                      href={`mailto:${customerApiResponse?.email}`}
                      target="_blank"
                    >
                      {customerApiResponse?.email}
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
          title="Update customer details"
          isLoading={false}
        />
      </div>
    </>
  );
};

export default CustomerProfile;
