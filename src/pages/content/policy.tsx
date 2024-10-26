import React from "react";
import * as Yup from "yup";

import { toast } from "react-toastify";
import { useCreateFaqMutation } from "../../redux/services/faq";
import ReusableForm from "../../components/form/ReusableForm";

type Props = {};

const PolicyContent = ({}: Props) => {
  const [createFaq] = useCreateFaqMutation();

  const attributes = [
    {
      name: "policy",
      label: "Policy",
      type: "textarea",
      placeholder: "Enter policy",
      validation: Yup.string().required("Policy is required"),
    },
  ];

  const initialValues = {
    policy: "",
  };
  const handleSubmit = async (values: any) => {
    try {
      const res: any = await createFaq(values).unwrap();

      if (res.id) {
        toast("Faq Created");
      }
    } catch (error) {
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
              Set policy information
            </h1>
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
            title="Policy info"
            isLoading={false}
          />
        </div>
      </div>
    </main>
  );
};

export default PolicyContent;
