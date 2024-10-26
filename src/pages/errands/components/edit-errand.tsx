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
import LoadingSplash from "../../../components/common/loading-splash";

type Props = { selectedErrand: string; handleClose: any };

const EditErrand = () => {
  const { errandId } = useParams();
  const navigate = useNavigate();
  const [updateErrand] = useUpdateErrandMutation();
  const { data: customersApiResponse, ...customersApiResponseDetails } =
    useGetCustomersQuery({ unPaginate: true });
  const { data: errandApiResponse, ...errandApiResponseDetails } =
    useGetErrandQuery(errandId || "");

  if (
    customersApiResponseDetails.isLoading ||
    errandApiResponseDetails.isLoading
  ) {
    return <LoadingSplash />;
  }

  const attributes = [
    {
      name: "receiver",
      label: "Receiver",
      type: "reselect",
      options: [
        ...(customersApiResponse
          ? customersApiResponse?.data?.map((customerRes) => ({
              label: (
                <div className="label flex ">
                  <img
                    src="/media/avatars/blank.png"
                    alt="flag"
                    className="w-[20px] rounded-full me-2"
                  />
                  <span>{customerRes.fullName}</span>
                </div>
              ),
              value: customerRes.id,
              id: Number(customerRes.id),
            }))
          : []),
      ],
      placeholder: "Enter receiver's name",
      validation: Yup.string().required("Receiver name is required"),
    },
    {
      name: "helper",
      label: "Helper",
      type: "reselect",
      options: [
        ...(customersApiResponse?.data
          ? customersApiResponse?.data?.map((customerRes) => ({
              label: (
                <div className="label flex ">
                  <img
                    src="/media/avatars/blank.png"
                    alt="flag"
                    className="w-[20px] rounded-full me-2"
                  />
                  <span>{customerRes.fullName}</span>
                </div>
              ),
              value: customerRes.id,
              id: Number(customerRes.id),
            }))
          : []),
      ],
      placeholder: "Enter helper's name",
      validation: Yup.string().required("Helper name is required"),
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Enter errand description",
      validation: Yup.string().required("Description is required"),
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      options: [
        { label: "Requested", value: "requested" },
        { label: "In-progress", value: "in-progress" },
        { label: "Completed", value: "completed" },
        { label: "Cancelled", value: "cancelled" },
      ],
      validation: Yup.string().required("Status is required"),
    },
    {
      name: "paymentStatus",
      label: "Payment Status",
      type: "select",
      options: [
        { label: "Unpaid", value: "unpaid" },
        { label: "Paid", value: "paid" },
      ],
      validation: Yup.string().required("Payment status is required"),
    },
  ];

  const initialValues = {
    receiver: errandApiResponse?.receiver?.id,
    helper: errandApiResponse?.helper?.id,
    description: errandApiResponse?.description || "",
    status: errandApiResponse?.status || "requested",
    paymentStatus: errandApiResponse?.paymentStatus || "unpaid",
  };

  const handleSubmit = async (values: any) => {
    try {
      await updateErrand({
        id: errandId || "",
        data: values,
      }).unwrap();

      toast("Errand Updated");
      navigate("/errands/categories");
    } catch (error: any) {
      toast.error("Failed to update errand. Please try again.");
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
              Create Errand
            </h1>
          </div>
          <div className="flex items-center gap-2.5">
            {/* <a className="btn btn-sm btn-light" href="#">
          Import CSV
        </a> */}
            <Link className="btn btn-sm btn-primary" to={"/errands/categories"}>
              All Categories
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
            title="Update Errand"
            isLoading={errandApiResponseDetails.isLoading}
          />
        </div>
      </div>
    </main>
  );
};

export default EditErrand;
