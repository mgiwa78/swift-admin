import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ReusableForm from "../../../components/form/ReusableForm";
import { Link, useNavigate } from "react-router-dom";
import {
  useGetConfigQuery,
  useUpdateConfigMutation,
} from "../../../redux/services/system-config";
import LoadingSpinner from "../../../components/common/LoadingSpinner";

const ErrandConfiguration = () => {
  const [updateConfig] = useUpdateConfigMutation();
  const [loading, setLoading] = useState<boolean>(false);
  const { data: ConfigApiResponse, ...configApiResponseDetails } =
    useGetConfigQuery("logistics-errand-price-per-km");

  const attributes = [
    {
      name: "logisticsErrandPricePerKm",
      label: "Logistic errand price per km",
      type: "number",
      placeholder: "Enter value",
      validation: Yup.string().required("Value is required"),
    },
  ];

  if (configApiResponseDetails.isLoading) {
    return <LoadingSpinner />;
  }

  const initialValues = {
    logisticsErrandPricePerKm: Number(ConfigApiResponse?.value),
  };
  console.log(attributes);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const res: any = await updateConfig({
        key: "logistics-errand-price-per-km",
        data: { value: values.logisticsErrandPricePerKm },
      }).unwrap();
      if (res.id) {
        toast.success("Config updated successfully!");
      }
    } catch (error: any) {
      toast.error("Failed to update config. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    console.log("Form cancelled");
  };

  if (configApiResponseDetails.isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <ReusableForm
      attributes={attributes}
      initialValues={initialValues}
      handleCancel={handleCancel}
      onSubmit={handleSubmit}
      title="Update Errand Configuration"
      isLoading={loading}
    />
  );
};

export default ErrandConfiguration;
