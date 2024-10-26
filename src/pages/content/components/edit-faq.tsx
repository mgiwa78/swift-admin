import React from "react";
import * as Yup from "yup";

import { toast } from "react-toastify";
import {
  useGetFaqQuery,
  useUpdateFaqMutation,
} from "../../../redux/services/faq";
import { useGetFaqCategoriesQuery } from "../../../redux/services/faq-categories";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import ReusableForm from "../../../components/form/ReusableForm";
import { Link, useNavigate, useParams } from "react-router-dom";

type Props = {};

const EditFaq = ({}: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [updateFaq, { ...updateFaqApiResponse }] = useUpdateFaqMutation();
  const {
    data: faqsCategoriesApiResponse,
    ...faqsCategoriesApiResponseDetails
  } = useGetFaqCategoriesQuery({});

  const { data: FaqApiResponse, ...errandApiResponseDetails } = useGetFaqQuery(
    id || ""
  );

  if (faqsCategoriesApiResponseDetails.isLoading) {
    return <LoadingSpinner />;
  }

  const attributes = [
    {
      name: "category",
      label: "Category",
      type: "select",

      options: [
        {
          label: "Select answer",
          value: "",
        },
        ...(faqsCategoriesApiResponse?.data
          ? faqsCategoriesApiResponse?.data?.map((faqsCategoriesRes) => ({
              label: faqsCategoriesRes.title,
              value: Number(faqsCategoriesRes.id),
            }))
          : []),
      ],
      validation: Yup.string().required("Faq category is required"),
    },
    {
      name: "question",
      label: "Faq question",
      type: "textarea",
      placeholder: "Enter faq question",
      validation: Yup.string().required("Question is required"),
    },
    {
      name: "answer",
      label: "Faq answer",
      type: "textarea",
      placeholder: "Enter faq answer",
      validation: Yup.string().required("Answer is required"),
    },
  ];

  const initialValues = {
    answer: FaqApiResponse?.answer,
    category: FaqApiResponse?.category?.id,
    question: FaqApiResponse?.question,
  };
  const handleSubmit = async (values: any) => {
    try {
      const res: any = await updateFaq({ id: id || "", data: values }).unwrap();

      if (res.id) {
        toast("Faq Updated successfully");
        navigate("/content/faqs");
      }
    } catch (error: any) {
      throw new Error(error);
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
              Update Faq
            </h1>
          </div>
          <div className="flex items-center gap-2.5">
            {/* <a className="btn btn-sm btn-light" href="#">
        Import CSV
      </a> */}
            <Link className="btn btn-sm btn-primary" to={"/content/faqs"}>
              All Faqs
            </Link>
            <Link
              className="btn btn-sm btn-primary"
              to={"/content/faqs/categories"}
            >
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
            title="Update Faq Details"
            isLoading={false}
          />
        </div>
      </div>
    </main>
  );
};

export default EditFaq;
