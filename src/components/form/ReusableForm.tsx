import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "flatpickr/dist/themes/material_green.css";
import DatePicker from "./DatePicker";
import CustomSelect from "./Select";
import ErrorMessage from "./ErrorMessage";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Switch from "./Switch";
import Input from "./inputs";
import CustomReselect from "./Resselect";
import { toast } from "react-toastify";
import GoogleMapPicker from "./map-picker";

const iconsMap = {
  email: "",
  text: "",
  password: "",
};

interface Attribute {
  name: string;
  label: string;
  type: string;
  multiple?: boolean;
  icon?: string;
  onChange?: (data: any) => void;
  options?: { value: string | number; label: any }[];
  placeholder?: string;
  validation?: Yup.AnySchema;
}

interface ReusableFormProps {
  attributes: Attribute[];
  title: string;
  isLoading: boolean;
  initialValues: { [key: string]: any };
  onSubmit: (values: any) => Promise<any>;
  handleCancel: () => void;
}

const ReusableForm: React.FC<ReusableFormProps> = ({
  attributes,
  initialValues,
  onSubmit,
  title,
  isLoading,
  handleCancel,
}) => {
  const [errorMessage, setErrorMessage] = useState<any>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const validationSchema = Yup.object(
    attributes.reduce((acc, attr) => {
      if (attr.validation) {
        acc[attr.name] = attr.validation;
      }
      return acc;
    }, {} as { [key: string]: Yup.AnySchema })
  );

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        await onSubmit(values);

        // if (res.error) {
        //   setSuccessMessage(null);
        //   if (res.error?.data?.error?.sqlMessage) {
        //     setErrorMessage({
        //       message:
        //         res.error?.data?.error?.sqlMessage ||
        //         "Failed to submit form. Please try again.",
        //     });
        //   }
        //   if (res.error?.data?.message) {
        //     setErrorMessage({
        //       message:
        //         res.error?.data?.message ||
        //         "Failed to submit form. Please try again.",
        //     });
        //   }
        //   if (res.error?.data?.details) {
        //     setErrorMessage({
        //       message:
        //         res.error?.data?.message ||
        //         "Failed to submit form. Please try again.",
        //       details: res.error?.data?.details,
        //     });
        //   }
        //   console.log(errorMessage);
        // } else {
        //   console.log("Form submitted successfully!");
        //   toast("Form submitted successfully!");
        //   setErrorMessage(null);
        // }
      } catch (error: any) {
        setErrorMessage(
          error?.data?.error?.sqlMessage ||
            "Failed to submit form. Please try again."
        ); // Improved error handling
        setSuccessMessage(null);
      }
      // const formData = new FormData();

      // for (const key in values) {
      //   if (values[key] instanceof FileList) {
      //     for (let i = 0; i < values[key].length; i++) {
      //       formData.append(key, values[key][i]);
      //     }
      //   } else {
      //     formData.append(key, values[key]);
      //   }
      // }
    },
  });

  const renderField = (attribute: Attribute) => {
    switch (attribute.type) {
      case "text":
      case "email":
      case "password":
      case "number":
        return (
          <div className="col-span-1">
            <Input
              key={attribute.name}
              id={attribute.name}
              label={attribute.label}
              type={attribute.type}
              placeholder={attribute.placeholder || ""}
              icon={attribute?.icon || ""}
              value={formik.values[attribute.name]}
              onChange={formik.handleChange}
              required={
                !!attribute.validation?.tests.find(
                  (test: any) => test.OPTIONS.name === "required"
                )
              }
            />
            {formik.errors[attribute.name] && (
              <ErrorMessage message={`${formik.errors[attribute.name]}`} />
            )}
          </div>
        );
      case "textarea":
        return (
          <div className="col-span-2">
            <label className=" form-label mb-1">{attribute.label}</label>
            <textarea
              key={attribute.name}
              id={attribute.name}
              rows={6}
              className="w-full textarea"
              placeholder={attribute.placeholder || ""}
              value={formik.values[attribute.name]}
              onChange={formik.handleChange}
              required={
                !!attribute.validation?.tests.find(
                  (test: any) => test.OPTIONS.name === "required"
                )
              }
            >
              {formik.values[attribute.name]}
            </textarea>
            {formik.errors[attribute.name] && (
              <ErrorMessage message={`${formik.errors[attribute.name]}`} />
            )}
          </div>
        );
      case "date":
        return (
          <div className="col-span-1">
            <DatePicker
              key={attribute.name}
              label={attribute.label}
              value={formik.values[attribute.name]}
              onChange={(date: Date) => {
                formik.setFieldValue(attribute.name, date);
              }}
            />
            {formik.errors[attribute.name] && (
              <ErrorMessage message={`${formik.errors[attribute.name]}`} />
            )}
          </div>
        );
      case "select":
        return (
          <div className="col-span-1">
            <CustomSelect
              key={attribute.name}
              label={attribute.label}
              multiple={attribute.multiple}
              options={attribute.options || []}
              value={formik.values[attribute.name]}
              onChange={(option: any) => {
                formik.setFieldValue(attribute.name, option);
                if (attribute.onChange) {
                  attribute.onChange(option);
                }
              }}
            />
            {formik.errors[attribute.name] && (
              <ErrorMessage message={`${formik.errors[attribute.name]}`} />
            )}
          </div>
        );
      case "reselect":
        return (
          <div className="col-span-1">
            <CustomReselect
              key={attribute.name}
              label={attribute.label}
              isMulti={attribute.multiple}
              options={attribute.options || []}
              value={
                attribute.options
                  ? attribute.multiple
                    ? attribute.options?.filter((op: any) => {
                        return (
                          formik.values[attribute.name].includes(op.id) || {
                            label: "",
                            value: "",
                          }
                        );
                      })
                    : attribute.options?.find(
                        (op) => op.value === formik.values[attribute.name]
                      ) || {
                        label: "",
                        value: "",
                      }
                  : {
                      label: "",
                      value: "",
                    }
              }
              onChange={(option: any) => {
                attribute.multiple
                  ? formik.setFieldValue(
                      attribute.name,
                      option.map((o: any) => o.value)
                    )
                  : formik.setFieldValue(attribute.name, option.value);
              }}
            />
            {formik.errors[attribute.name] && (
              <ErrorMessage message={`${formik.errors[attribute.name]}`} />
            )}
          </div>
        );
      case "checkbox":
        return (
          <div className="col-span-1">
            <label className=" form-label mb-3">{attribute.label}</label>
            <Checkbox
              key={attribute.name}
              id={attribute.name}
              label={attribute.label}
              checked={formik.values[attribute.name]}
              onChange={formik.handleChange}
            />
            {formik.errors[attribute.name] && (
              <ErrorMessage message={`${formik.errors[attribute.name]}`} />
            )}
          </div>
        );
      case "radio":
        return (
          <div key={attribute.name} className="col-span-1">
            <label className={`form-label mb-2`}>{attribute.label}</label>
            <div className="flex justify-start gap-3">
              {attribute.options?.map((option) => (
                <div className="col-4" key={option.value}>
                  <Radio
                    id={`${attribute.name}-${option.value}`}
                    label={option.label}
                    checked={formik.values[attribute.name] === option.value}
                    onChange={() =>
                      formik.setFieldValue(attribute.name, option.value)
                    }
                  />
                </div>
              ))}
            </div>
            {formik.errors[attribute.name] && (
              <ErrorMessage message={`${formik.errors[attribute.name]}`} />
            )}
          </div>
        );
      case "file":
        return (
          <div className="mb-10 col-span-1" key={attribute.name}>
            <label className=" form-label mb-1" htmlFor={attribute.name}>
              {attribute.label}
            </label>
            <input
              id={attribute.name}
              type="file"
              multiple={attribute.multiple}
              className="file-input"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const file = event.target.files ? event.target.files : null;
                formik.setFieldValue(attribute.name, file);
              }}
            />
            {formik.errors[attribute.name] && (
              <ErrorMessage message={`${formik.errors[attribute.name]}`} />
            )}
          </div>
        );
      case "switch":
        return (
          <div className="col-span-1">
            {/* <label className="form-label mb-4" htmlFor={attribute.name}>
              {attribute.label}
            </label> */}
            <Switch
              key={attribute.name}
              id={attribute.name}
              label={attribute.label}
              checked={formik.values[attribute.name]}
              onChange={(element) => {
                formik.setFieldValue(attribute.name, element.target.checked);
              }}
            />
            {formik.errors[attribute.name] && (
              <ErrorMessage message={`${formik.errors[attribute.name]}`} />
            )}
          </div>
        );
      case "location":
        return (
          <div className="col-span-3">
            <label className=" form-label mb-3">{attribute.label}</label>
            <GoogleMapPicker
              onPickLocation={(pickupLocation, dropoffLocation, price) => {
                formik.setFieldValue(attribute.name, {
                  pickupLocation,
                  dropoffLocation,
                  price,
                });
                formik.setFieldValue("dropoffLocation", dropoffLocation);
                formik.setFieldValue("pickupLocation", pickupLocation);
                formik.setFieldValue("price", price);
              }}
            />
          </div>
        );
      default:
        return null;
    }
  };
  console.log(formik.errors);
  return (
    <div className="card mb-5">
      <div className="card-header">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="card-body">
        {/* Display Error and Success Messages */}
        {errorMessage?.message && (
          <div
            className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Error</span>
            <div>
              <span className="font-medium">{errorMessage?.message}:</span>
              {errorMessage.details && (
                <ul className="mt-1.5 list-disc list-inside">
                  {errorMessage.details.map((det: string) => (
                    <li>{det}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {successMessage && (
          <div
            className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Success alert!</span>{" "}
              {successMessage}.
            </div>
          </div>
        )}
        <form onSubmit={formik.handleSubmit}>
          <div
            className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
            style={{ rowGap: "10px" }}
          >
            {attributes.map((attribute) => (
              <>{renderField(attribute)}</>
            ))}
          </div>
          <div className="card-footer px-0">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                formik.resetForm();
                handleCancel();
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => formik.handleSubmit()}
              className="btn btn-primary"
              disabled={isLoading}
              type="button"
            >
              {isLoading ? <span>Loading</span> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReusableForm;
