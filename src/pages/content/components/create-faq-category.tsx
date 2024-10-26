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
import {
  useGetFaqCategoryQuery,
  useCreateFaqCategoryMutation,
} from "../../../redux/services/faq-categories";

type Props = { selectedErrand: string; handleClose: any };

const CreateFaqCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [createFaqCategory, { ...createFaqCategoryApiResponse }] =
    useCreateFaqCategoryMutation();

  const attributes = [
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "Category title is required",
      validation: Yup.string().required("Title is required"),
    },
  ];

  const initialValues = {
    title: "",
  };

  const handleSubmit = async (values: any) => {
    try {
      await createFaqCategory({
        id,
        data: values,
      }).unwrap();
      navigate("/content/faqs/categories");
      toast("Faq Category Created");
    } catch (error: any) {
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
              Enter Faq category details
            </h1>
          </div>
          <div className="flex items-center gap-2.5">
            {/* <a className="btn btn-sm btn-light" href="#">
          Import CSV
        </a> */}
            <Link
              className="btn btn-sm btn-primary"
              to={"/content/faqs/categories"}
            >
              All Categories
            </Link>
            <Link className="btn btn-sm btn-primary" to={"/content/faqs"}>
              All Faqs
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
            title="Create Faq Category"
            isLoading={createFaqCategoryApiResponse.isLoading}
          />
        </div>
      </div>
    </main>
  );
};

export default CreateFaqCategory;
