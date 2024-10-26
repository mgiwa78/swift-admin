import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useCreateErrandMutation } from "../../../redux/services/errands";
import ReusableForm from "../../../components/form/ReusableForm";
import { Link, useNavigate } from "react-router-dom";
import { useGetCustomersQuery } from "../../../redux/services/customers";
import LoadingSplash from "../../../components/common/loading-splash";
import { useGetErrandCategoriesQuery } from "../../../redux/services/errand-categories";
import { useGetZonesQuery } from "../../../redux/services/zones";

type Props = { handleClose: any; isOpen: boolean };

const CreateErrand = () => {
  const [createErrand] = useCreateErrandMutation();
  const navigate = useNavigate();
  const { data: customersApiResponse, ...customersApiResponseDetails } =
    useGetCustomersQuery({ unPaginate: true });
  const {
    data: errandCategoryApiResponse,
    ...errandCategoryApiResponseDetails
  } = useGetErrandCategoriesQuery({});
  const { data: zoneApiResponse, ...zoneApiResponseDetails } = useGetZonesQuery(
    {}
  );

  const [loading, setLoading] = useState<boolean>(false);

  const [attributes, setAttributes] = useState<Array<any>>([
    {
      name: "receiver",
      label: "Receiver",
      type: "reselect",
      placeholder: "Enter receiver's name",
      options: customersApiResponse?.data
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
        : [],
      validation: Yup.string().required("Receiver name is required"),
    },
    {
      name: "helper",
      label: "Helper",
      type: "reselect",
      options: customersApiResponse?.data
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
        : [],
      placeholder: "Enter helper's name",
      validation: Yup.string().required("Helper name is required"),
    },
    {
      name: "zone",
      label: "zone",
      type: "select",
      options: [
        { label: "Select Zone", value: "" },
        ...(zoneApiResponse?.data
          ? zoneApiResponse?.data?.map((zone) => ({
              label: zone.name,
              value: Number(zone.id),
            }))
          : []),
      ],
      placeholder: "Select zone",
      validation: Yup.string().required("Category is required"),
    },
    {
      name: "category",
      label: "category",
      type: "select",
      onChange: (option: string) => {
        handleCategoryChange(option);
      },
      options: [
        { label: "Select category", value: "" },
        ...(errandCategoryApiResponse?.data
          ? errandCategoryApiResponse?.data?.map((errandCategoryRes) => ({
              label: errandCategoryRes.name,
              value: Number(errandCategoryRes.id),
            }))
          : []),
      ],
      placeholder: "Select category",
      validation: Yup.string().required("Category is required"),
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
  ]);

  if (
    customersApiResponseDetails.isLoading ||
    zoneApiResponseDetails.isLoading
  ) {
    return <LoadingSplash />;
  }

  const handleCategoryChange = (option: string) => {
    const slectedCat = errandCategoryApiResponse?.data.find(
      (e) => e.id == option
    );

    if (slectedCat?.type === "logistic") {
      setAttributes([
        ...attributes.filter((a) => a.name !== "price"),
        {
          name: "location",
          label: "Location",
          type: "location",
          placeholder: "Select pickup and drop off location",
          validation: Yup.mixed().required("Location is required"),
        },
      ]);
    } else {
      setAttributes([
        ...attributes.filter((a) => a.name !== "location"),
        {
          name: "price",
          label: "Price",
          type: "text",
          placeholder: "Enter price",
          validation: Yup.string().required("Price is required"),
        },
      ]);
    }
  };

  const initialValues = {
    receiver: "",
    description: "",
    status: "requested",
    paymentStatus: "unpaid",
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const res: any = await createErrand(values).unwrap();
      if (res.id) {
        toast.success("Errand created successfully!");
        navigate("/errands");
      }
    } catch (error: any) {
      toast.error("Failed to create errand. Please try again.");
    } finally {
      setLoading(false);
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
            <Link className="btn btn-sm btn-primary" to={"/errands"}>
              All Errands
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fixed">
        <div className="grid gap-5 lg:gap-7.5">
          <ReusableForm
            attributes={attributes}
            initialValues={initialValues}
            handleCancel={handleCancel}
            onSubmit={handleSubmit}
            title="Enter Errand Details"
            isLoading={loading}
          />
        </div>
      </div>
    </main>
  );
};

export default CreateErrand;
