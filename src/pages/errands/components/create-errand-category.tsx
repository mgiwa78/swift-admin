import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import ReusableForm from "../../../components/form/ReusableForm";
import { Link, useNavigate } from "react-router-dom";
import { useGetCustomersQuery } from "../../../redux/services/customers";
import { useCreateErrandCategoryMutation } from "../../../redux/services/errand-categories";

type Props = { handleClose: any; isOpen: boolean };

const CreateCategory = () => {
  const [createCategory] = useCreateErrandCategoryMutation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const attributes = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Category name is required",
      validation: Yup.string().required("Name is required"),
    },
    {
      name: "type",
      label: "type",
      type: "select",
      options: [
        {
          label: "Select type",
          value: "",
        },
        { label: "Logistic", value: "logistic" },
        { label: "Task", value: "task" },
      ],
      validation: Yup.string().required("Errandtype is required"),
    },
  ];

  const initialValues = {
    name: "",
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const res: any = await createCategory(values).unwrap();
      if (res.id) {
        toast.success("Category created successfully!");
        navigate("/errands/categories");
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
              Create Category
            </h1>
          </div>
          <div className="flex items-center gap-2.5">
            {/* <a className="btn btn-sm btn-light" href="#">
            Import CSV
          </a> */}
            <Link className="btn btn-sm btn-primary" to={"/errands"}>
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
            handleCancel={handleCancel}
            onSubmit={handleSubmit}
            title="Enter Category Details"
            isLoading={loading}
          />
        </div>
      </div>
    </main>
  );
};

export default CreateCategory;
