import React, { useState } from "react";
import * as Yup from "yup";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../../../components/common/LoadingSpinner";

import Badge from "../../../components/badge";

import { useGetProfileQuery } from "../../../redux/services/auth";
import { formatDateTime } from "../../../utils/dateUtils";
import { useFormik } from "formik";
import {
  useCreateErrandConversationMutation,
  useGetConversationsForErrandQuery,
} from "../../../redux/services/errand-conversation";
import { useGetErrandQuery } from "../../../redux/services/errands";

export function ErrandConversation() {
  const [createErrandConversation] = useCreateErrandConversationMutation();
  const { errandId } = useParams();
  const { data: profileApiResponse } = useGetProfileQuery();

  const { data: errandApiResponse, ...errandApiResponseDetails } =
    useGetErrandQuery(errandId || "");

  const handleSubmit = async (values: any) => {
    try {
      const filesArray = Array.from(selectedFiles);

      // const uploadedFiles = await Promise
      //   .all
      //   // filesArray.map((file: any) => uploadFileToFirebase(file))
      //   ();

      await createErrandConversation({
        errand: errandId,
        message: values.message,
        // files: JSON.stringify(uploadedFiles),
      });
      setSelectedFiles([]);
      formik.resetForm();
    } catch (error) {
      console.error("Error submitting ticket response", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: handleSubmit,
  });

  const {
    data: errandConversationsApiResponse,
    ...errandConversationsApiResponseDetails
  } = useGetConversationsForErrandQuery(errandId);

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  if (
    errandApiResponseDetails.isLoading ||
    errandConversationsApiResponseDetails.isLoading
  ) {
    return <LoadingSpinner />;
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...fileArray]);
    }
  };

  const handleRemoveFile = (fileName: string) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== fileName)
    );
  };

  return (
    <div>
      <div className=" grid grid-cols-8 gap-5">
        <div className="card col-span-8 xl:col-span-8">
          <div className="card-header">
            <h3 className="card-title">Chat</h3>
          </div>
          <div className="card-body">
            <div className="flex flex-col justify-end h-full">
              <div
                className="scrollable-y-auto gap-4 flex flex-col"
                data-scrollable="true"
                data-scrollable-dependencies="#header"
                data-scrollable-max-height="auto"
                data-scrollable-offset="280px"
                style={{ maxHeight: "400px" }}
              >
                {errandConversationsApiResponse?.data?.map((conversation) => {
                  if (conversation?.author?.id === profileApiResponse?.id) {
                    return (
                      <div
                        key={conversation.id}
                        className=" w-full flex justify-end"
                      >
                        <div className="flex items-end max-w-[800px] justify-end gap-3.5 px-5">
                          <div className="flex flex-col gap-1.5">
                            <div className="card shadow-none flex bg-primary flex-col gap-2.5 p-3 rounded-br-none">
                              <p className="text-2sm font-medium text-light">
                                {conversation.message}
                              </p>
                            </div>
                            <div className="flex items-center justify-end relative">
                              <span className="text-2xs font-medium text-gray-500">
                                {formatDateTime(conversation.createdAt)}
                              </span>
                            </div>
                          </div>
                          <div className="relative shrink-0">
                            <img
                              alt=""
                              className="rounded-full size-9"
                              src={
                                conversation?.author?.profileImage ||
                                `/media/avatars/blank.png`
                              }
                            />
                            <span className="size-[4.8px] badge badge-circle badge-success absolute top-7 end-0 transform -translate-y-1/2"></span>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={conversation.id}
                        className=" w-full flex justify-start"
                      >
                        <div
                          key={conversation?.id}
                          className="flex items-end  max-w-[600px]  gap-3.5 px-5"
                        >
                          <img
                            alt=""
                            className="rounded-full size-9"
                            src={
                              conversation?.author?.profileImage ||
                              `/media/avatars/blank.png`
                            }
                          />
                          <div className="flex flex-col gap-1.5">
                            <div className="card shadow-none flex flex-col bg-gray-100 gap-2.5 p-3 rounded-bl-none">
                              <p className="text-2sm font-medium text-gray-700">
                                {conversation.message}
                              </p>
                            </div>
                            <div className="flex items-center justify-start relative">
                              <span className="text-2xs font-medium text-gray-500">
                                {`${conversation?.author?.fullName}` +
                                  " at " +
                                  formatDateTime(conversation.createdAt)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-2.5">
              <div className="relative grow mx-5">
                <img
                  alt=""
                  className="rounded-full size-[30px] absolute left-0 top-2/4 -translate-y-2/4 ms-2.5"
                  src="/media/avatars/blank.png"
                />
                <input
                  className="input h-auto py-4 ps-12 bg-transparent"
                  placeholder="Write a message..."
                  type="text"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <div className="flex items-center gap-2.5 absolute right-3 top-1/2 -translate-y-1/2">
                  <label className="btn btn-sm btn-light btn-clear">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <i className="ki-filled ki-exit-up"></i>
                  </label>

                  <button
                    type="submit"
                    className="btn btn-dark btn-sm"
                    disabled={formik.isSubmitting}
                  >
                    Send
                  </button>
                </div>
              </div>
              <div>
                <div className="relative grow mx-5">
                  {formik.touched.message && formik.errors.message ? (
                    <div className="text-red-600 text-sm">
                      {typeof formik.errors.message === "string"
                        ? formik.errors.message
                        : JSON.stringify(formik.errors.message)}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="mt-3 px-5">
                <label className="btn btn-sm btn-light btn-clear">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  Attach files
                </label>
              </div>
              {selectedFiles.length > 0 && (
                <div className="mt-3 px-5">
                  <h4 className="text-sm font-medium text-gray-800">Files:</h4>
                  <ul className="list-disc pl-5">
                    {selectedFiles.map((file, index) => (
                      <li key={index} className="text-sm text-gray-700">
                        {file.name}{" "}
                        <button
                          type="button"
                          className="text-red-600"
                          onClick={() => handleRemoveFile(file.name)}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
