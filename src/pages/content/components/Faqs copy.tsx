import React, { useState } from "react";
import { useGetFaqsQuery } from "../../../redux/services/faq";
import { useGetFaqCategoriesQuery } from "../../../redux/services/faq-categories";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import CreateFaqModal from "./create-faq";

export function Faqs() {
  const { data: faqsApiResponse, ...faqApiDetails } = useGetFaqsQuery({});
  const { data: faqCategoriesApiResponse, ...faqCategoriesApiDetails } =
    useGetFaqCategoriesQuery({});

  const [isCreateFaqModalOpen, setIsCreateFaqModalOpen] =
    useState<boolean>(false);

  if (faqApiDetails.isLoading || faqCategoriesApiDetails.isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <div className="container-fixed">
        <div className="grid gap-5 lg:gap-7.5 xl:w-[38.75rem] mx-auto">
          {faqCategoriesApiResponse.data.map((faqcat: any) => (
            <div className="card">
              <div className="card-header">
                <h3 className="card-title capitalize text-left">
                  {faqcat.title}
                </h3>
              </div>
              <div className="card-body py-3">
                <div data-accordion="true" data-accordion-expand-all="true">
                  {faqcat?.faqs?.map((faq: any) => (
                    <div
                      className="accordion-item [&amp;:not(:last-child)]:border-b border-b-gray-200"
                      data-accordion-item="true"
                    >
                      <button
                        className="accordion-toggle py-4"
                        data-accordion-toggle={`#faq_${faq.id}_content`}
                      >
                        <span className="text-base text-gray-900 font-medium">
                          {faq?.question}
                        </span>
                        <i className="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block"></i>
                        <i className="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden"></i>
                      </button>
                      <div
                        className="accordion-content hidden"
                        id={`faq_${faq?.id}_content`}
                      >
                        <div className="text-gray-700 text-md pb-4">
                          {faq?.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isCreateFaqModalOpen && (
        <CreateFaqModal
          handleClose={() => setIsCreateFaqModalOpen(false)}
          isOpen={isCreateFaqModalOpen}
        />
      )}
    </>
  );
}
