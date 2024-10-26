import ReusableForm from "./ReusableForm"; // Reuse the ReusableForm component
import LoadingSpinner from "../../components/common/LoadingSpinner";
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

interface ReusableFormModalProps {
  title: string;
  attributes: any[];
  initialValues: { [key: string]: any };
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  onSubmit: (values: any) => Promise<any>;
}
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

const ReusableFormModal: React.FC<ReusableFormModalProps> = ({
  title,
  attributes,
  initialValues,
  isOpen,
  isLoading,
  onClose,
  onSubmit,
}) => {
  const handleCancel = () => {
    onClose();
  };

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
        return (
          <>
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
          </>
        );
      case "textarea":
        return (
          <div className=" row-span-3">
            {" "}
            <label className=" form-label mb-3">{attribute.label}</label>
            <textarea
              key={attribute.name}
              id={attribute.name}
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
          <div>
            <DatePicker
              key={attribute.name}
              label={attribute.label}
              value={formik.values[attribute.name]}
              onChange={(date: Date) => {
                console.log(date);
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
          <div>
            <CustomSelect
              key={attribute.name}
              label={attribute.label}
              multiple={attribute.multiple}
              options={attribute.options || []}
              value={formik.values[attribute.name]}
              onChange={(option: any) =>
                formik.setFieldValue(attribute.name, option)
              }
            />
            {formik.errors[attribute.name] && (
              <ErrorMessage message={`${formik.errors[attribute.name]}`} />
            )}
          </div>
        );
      case "reselect":
        return (
          <div>
            <CustomReselect
              key={attribute.name}
              label={attribute.label}
              isMulti={attribute.multiple}
              options={attribute.options || []}
              value={attribute.options?.find(
                (op) => op.value === formik.values[attribute.name]
              )}
              onChange={(option: any) => {
                attribute.multiple
                  ? formik.setFieldValue(
                      attribute.name,
                      option.map((o: any) => o.id)
                    )
                  : formik.setFieldValue(attribute.name, option.id);
              }}
            />
            {formik.errors[attribute.name] && (
              <ErrorMessage message={`${formik.errors[attribute.name]}`} />
            )}
          </div>
        );
      case "checkbox":
        return (
          <div>
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
          <div key={attribute.name} className="">
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
          <div className="mb-10" key={attribute.name}>
            <label className=" form-label mb-1" htmlFor={attribute.name}>
              {attribute.label}
            </label>
            <input
              id={attribute.name}
              type="file"
              className="file-input"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const file = event.target.files ? event.target.files[0] : null;
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
          <div>
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
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div>
      <div
        className="modal open bg-[#000000df]"
        data-modal="true"
        role="dialog"
        tabIndex={-1}
        style={{
          zIndex: 90,
          display: "block",
        }}
        aria-modal={true}
      >
        <div className="modal-content max-w-[500px] top-[15%]">
          <div className="modal-header pr-2.5">
            <h3 className="modal-title">{title}</h3>
            <button
              className="btn btn-sm btn-icon btn-light btn-clear shrink-0"
              onClick={() => onClose()}
            >
              <i className="ki-filled ki-cross"></i>
            </button>
          </div>
          <div className="modal-body p-0">
            <div className="p-5">
              <form onSubmit={formik.handleSubmit}>
                <div
                  className="grid gap-4 lg:grid-cols-2 grid-cols-1"
                  style={{ rowGap: "10px" }}
                >
                  {attributes.map((attribute) => (
                    <div key={attribute.name}>{renderField(attribute)}</div>
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
        </div>
      </div>
    </div>
  );
};

export default ReusableFormModal;
