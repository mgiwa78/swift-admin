import React, { useState } from "react";
import { useGetFaqsQuery } from "../../redux/services/faq";
import { useGetFaqCategoriesQuery } from "../../redux/services/faq-categories";
import LoadingSpinner from "../../components/common/LoadingSpinner";

const Activities = () => {
  const { data: faqsApiResponse, ...faqApiDetails } = useGetFaqsQuery({});
  const { data: faqCategoriesApiResponse, ...faqCategoriesApiDetails } =
    useGetFaqCategoriesQuery({});

  const [isCreateFaqModalOpen, setIsCreateFaqModalOpen] =
    useState<boolean>(false);

  if (faqApiDetails.isLoading || faqCategoriesApiDetails.isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container-fixed">
      <div className="grid gap-5 lg:gap-7.5">
        <div className="flex gap-5 lg:gap-7.5">
          <div className="card grow" id="activity_2024">
            <div className="card-header">
              <h3 className="card-title">Activities</h3>
            </div>
            <div className="card-body">
              <div className="flex flex-col">
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-people text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Posted a new article
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/blogger.html"
                        >
                          Top 10 Tech Trends
                        </a>
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        Today, 9:00 AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-entrance-left text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        I had the privilege of interviewing an industry expert
                        for an
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/blogger.html"
                        >
                          upcoming blog post
                        </a>
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        2 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-code text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col pb-2.5">
                      <span className="text-sm font-medium text-gray-700">
                        Jenny attended a Nature Photography Immersion workshop
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        3 days ago, 11:45 AM
                      </span>
                    </div>
                    <div className="card shadow-none">
                      <div className="card-body">
                        <div className="grid gap-4">
                          <div className="flex flex-col md:flex-row md:items-center gap-5">
                            <div className="flex items-center gap-5 shrink-0">
                              <div className="border border-brand-clarity rounded-lg max-h-20">
                                <div className="flex items-center justify-center border-b border-b-brand-clarity bg-brand-light rounded-t-lg">
                                  <span className="text-2sm text-brand fw-medium p-2">
                                    Apr
                                  </span>
                                </div>
                                <div className="flex items-center justify-center size-12">
                                  <span className="fw-semibold text-gray-800 text-1.5xl tracking-tight">
                                    02
                                  </span>
                                </div>
                              </div>
                              <img
                                alt=""
                                className="rounded-lg max-h-20 max-w-full"
                                src="/media/images/600x400/8.jpg"
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <a
                                className="text-xs font-medium text-brand leading-[14px] hover:text-primary-active mb-px"
                                href="#"
                              >
                                Photo Workshop
                              </a>
                              <a
                                className="text-md font-semibold hover:text-primary text-gray-900 leading-4"
                                href="#"
                              >
                                Nature Photography Immersion
                              </a>
                              <p className="text-xs font-medium text-gray-700 leading-[22px]">
                                Enhance your nature photography skills in a
                                hands-on workshop guided by experienced
                                photographers.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-share text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        I couldn't resist sharing a sneak peek of our
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/blogger.html"
                        >
                          upcoming content
                        </a>
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        5 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-calendar-tick text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col pb-2.5">
                      <span className="text-sm font-medium text-gray-700">
                        Jenny attended a webinar on new product features.
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        3 days ago, 11:45 AM
                      </span>
                    </div>
                    <div className="card shadow-none p-4">
                      <div className="flex flex-wrap gap-2.5">
                        <i className="ki-filled ki-code text-lg text-info"></i>
                        <div className="flex flex-col gap-5 grow">
                          <div className="flex flex-wrap items-center justify-between">
                            <div className="flex flex-col gap-0.5">
                              <span className="text-md font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                                Leadership Development Series: Part 1
                              </span>
                              <span className="text-xs font-medium text-gray-500">
                                The first installment of a leadership
                                development series.
                              </span>
                            </div>
                            <a
                              className="btn btn-link"
                              href="html/demo1/account/members/teams.html"
                            >
                              View
                            </a>
                          </div>
                          <div className="flex flex-wrap gap-7.5">
                            <div className="flex items-center gap-1.5">
                              <span className="text-2sm font-medium text-gray-500">
                                Code:
                              </span>
                              <a
                                className="text-2sm font-semibold text-primary"
                                href="#"
                              >
                                #leaderdev-1
                              </a>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-2sm font-medium text-gray-500">
                                Progress:
                              </span>
                              <div className="progress progress-success min-w-[120px]">
                                <div
                                  className="progress-bar"
                                  style={{ width: "80%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 lg:min-w-24 shrink-0 max-w-auto">
                              <span className="text-2sm font-medium text-gray-500">
                                Guests:
                              </span>
                              <div className="flex -space-x-2">
                                <div className="flex">
                                  <img
                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-7"
                                    src="/media/avatars/300-4.png"
                                  />
                                </div>
                                <div className="flex">
                                  <img
                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-7"
                                    src="/media/avatars/300-1.png"
                                  />
                                </div>
                                <div className="flex">
                                  <img
                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-7"
                                    src="/media/avatars/300-2.png"
                                  />
                                </div>
                                <div className="flex">
                                  <span className="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-7 text-primary-inverse ring-primary-light bg-primary">
                                    +24
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-coffee text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Reaching the milestone of
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/feeds.html"
                        >
                          10,000 followers
                        </a>
                        on the blog was a dream come true
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        5 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-rocket text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Completed phase one of client project ahead of schedule.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        6 days ago, 10:45 AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-directbox-default text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col pb-2.5">
                      <span className="text-sm font-medium text-gray-800">
                        Attending the virtual blogging conference was an
                        enriching experience
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        2 days ago, 4:07 PM
                      </span>
                    </div>
                    <div className="card shadow-none">
                      <div className="card-body lg:py-4">
                        <div className="flex justify-center py-4">
                          <img
                            alt="image"
                            className="dark:hidden max-h-[160px]"
                            src="/media/illustrations/28.svg"
                          />
                          <img
                            alt="image"
                            className="light:hidden max-h-[160px]"
                            src="/media/illustrations/28-dark.svg"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="text-md font-semibold text-gray-900 text-center">
                            Blogging Conference
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            <a
                              className="text-2sm font-semibold link"
                              href="html/demo1/public-profile/profiles/company.html"
                            >
                              Axio new release
                            </a>
                            <span className="text-2sm font-medium text-gray-600 mr-2">
                              email campaign
                            </span>
                            <span className="badge badge-sm badge-success badge-outline">
                              Public
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-design-1 text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Onboarded a talented designer to our creative team,
                        adding valuable expertise to upcoming projects.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        2 weeks ago, 10:45 AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-code text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="grow">
                      <div className="flex flex-col pb-2.5">
                        <div className="text-sm font-medium text-gray-700">
                          A new team
                          <a
                            className="text-sm font-semibold text-gray-900 hover:text-primary-active"
                            href="#"
                          >
                            Market Mavericks
                          </a>
                          joined community
                        </div>
                        <span className="text-xs font-medium text-gray-500">
                          1 month ago, 11:45 AM
                        </span>
                      </div>
                      <div className="card shadow-none p-4">
                        <div className="flex flex-wrap justify-between items-center gap-7">
                          <div className="flex items-center gap-4">
                            <div className="relative size-[50px] shrink-0">
                              <svg
                                className="w-full h-full stroke-primary-clarity fill-primary-light"
                                fill="none"
                                height="48"
                                viewBox="0 0 44 48"
                                width="44"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506
              18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937
              39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z"
                                  fill="none"
                                ></path>
                                <path
                                  d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506
              18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937
              39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                                  stroke="none"
                                  stroke-opacity="1"
                                ></path>
                              </svg>
                              <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                                <i className="ki-filled ki-abstract-39 text-xl ps-px text-primary"></i>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <a
                                className="text-base font-semibold hover:text-primary text-gray-900"
                                href="#"
                              >
                                Market Mavericks
                              </a>
                              <p className="text-2sm font-medium text-gray-600">
                                Navigating markets with strategic solutions
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-6 lg:gap-12">
                            <div className="flex flex-col items-end gap-5">
                              <span className="text-2xs font-normal text-gray-500 uppercase">
                                rating
                              </span>
                              <div className="rating">
                                <div className="rating-label checked">
                                  <i className="rating-on ki-solid ki-star text-base leading-none"></i>
                                  <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                                </div>
                                <div className="rating-label checked">
                                  <i className="rating-on ki-solid ki-star text-base leading-none"></i>
                                  <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                                </div>
                                <div className="rating-label checked">
                                  <i className="rating-on ki-solid ki-star text-base leading-none"></i>
                                  <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                                </div>
                                <div className="rating-label checked">
                                  <i className="rating-on ki-solid ki-star text-base leading-none"></i>
                                  <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                                </div>
                                <div className="rating-label indeterminate">
                                  <i
                                    className="rating-on ki-solid ki-star text-base leading-none"
                                    style={{ width: "50.0%" }}
                                  ></i>
                                  <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-3 lg:min-w-24 shrink-0 max-w-auto">
                              <span className="text-2xs font-normal text-gray-500 uppercase">
                                memebers
                              </span>
                              <div className="flex -space-x-2">
                                <div className="flex">
                                  <img
                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-7"
                                    src="/media/avatars/300-4.png"
                                  />
                                </div>
                                <div className="flex">
                                  <img
                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-7"
                                    src="/media/avatars/300-1.png"
                                  />
                                </div>
                                <div className="flex">
                                  <img
                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-7"
                                    src="/media/avatars/300-2.png"
                                  />
                                </div>
                                <div className="flex">
                                  <span className="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-7 text-primary-inverse ring-primary-light bg-primary">
                                    S
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="grid justify-end min-w-20">
                              <a className="btn btn-sm btn-primary">
                                <i className="ki-filled ki-people"></i>
                                Join
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-like-shapes text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Hosted a virtual
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/creator.html"
                        >
                          team-building event
                        </a>
                        , fostering collaboration and strengthening bonds among
                        team members.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        1 month ago, 13:56 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-cup text-base"></i>
                  </div>
                  <div className="pl-2.5 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        We recently
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/nft.html"
                        >
                          celebrated
                        </a>
                        the blog's 1-year anniversary
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        3 months ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer justify-center">
              <a className="btn btn-link" href="#">
                All-time Activity
              </a>
            </div>
          </div>
          <div className="card grow hidden" id="activity_2023">
            <div className="card-header">
              <h3 className="card-title">Activity</h3>
              <div className="flex items-center gap-2">
                <label className="switch">
                  <span className="switch-label">
                    Auto refresh:
                    <span className="switch-on:hidden">Off</span>
                    <span className="hidden switch-on:inline">On</span>
                  </span>
                  <input
                    checked={true}
                    name="check"
                    type="checkbox"
                    value="1"
                  />
                </label>
              </div>
            </div>
            <div className="card-body">
              <div className="flex flex-col">
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-people text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Posted a new article
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/blogger.html"
                        >
                          Top 10 Tech Trends
                        </a>
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        Today, 9:00 AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-share text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        I couldn't resist sharing a sneak peek of our
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/blogger.html"
                        >
                          upcoming content
                        </a>
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        5 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-coffee text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Reaching the milestone of
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/feeds.html"
                        >
                          10,000 followers
                        </a>
                        on the blog was a dream come true
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        5 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-design-1 text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Onboarded a talented designer to our creative team,
                        adding valuable expertise to upcoming projects.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        2 weeks ago, 10:45 AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-like-shapes text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Hosted a virtual
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/creator.html"
                        >
                          team-building event
                        </a>
                        , fostering collaboration and strengthening bonds among
                        team members.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        1 month ago, 13:56 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-cup text-base"></i>
                  </div>
                  <div className="pl-2.5 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        We recently
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/nft.html"
                        >
                          celebrated
                        </a>
                        the blog's 1-year anniversary
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        3 months ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer justify-center">
              <a className="btn btn-link" href="#">
                All-time Activity
              </a>
            </div>
          </div>
          <div className="card grow hidden" id="activity_2022">
            <div className="card-header">
              <h3 className="card-title">Activity</h3>
              <div className="flex items-center gap-2">
                <label className="switch">
                  <span className="switch-label">
                    Auto refresh:
                    <span className="switch-on:hidden">Off</span>
                    <span className="hidden switch-on:inline">On</span>
                  </span>
                  <input
                    checked={true}
                    name="check"
                    type="checkbox"
                    value="1"
                  />
                </label>
              </div>
            </div>
            <div className="card-body">
              <div className="flex flex-col">
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-people text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Posted a new article
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/blogger.html"
                        >
                          Top 10 Tech Trends
                        </a>
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        Today, 9:00 AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-entrance-left text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        I had the privilege of interviewing an industry expert
                        for an
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/blogger.html"
                        >
                          upcoming blog post
                        </a>
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        2 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-share text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        I couldn't resist sharing a sneak peek of our
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/blogger.html"
                        >
                          upcoming content
                        </a>
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        5 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-coffee text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Reaching the milestone of
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/feeds.html"
                        >
                          10,000 followers
                        </a>
                        on the blog was a dream come true
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        5 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-design-1 text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Onboarded a talented designer to our creative team,
                        adding valuable expertise to upcoming projects.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        2 weeks ago, 10:45 AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-like-shapes text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Hosted a virtual
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/creator.html"
                        >
                          team-building event
                        </a>
                        , fostering collaboration and strengthening bonds among
                        team members.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        1 month ago, 13:56 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-cup text-base"></i>
                  </div>
                  <div className="pl-2.5 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        We recently
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/nft.html"
                        >
                          celebrated
                        </a>
                        the blog's 1-year anniversary
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        3 months ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer justify-center">
              <a className="btn btn-link" href="#">
                All-time Activity
              </a>
            </div>
          </div>
          <div className="card grow hidden" id="activity_2021">
            <div className="card-header">
              <h3 className="card-title">Activity</h3>
              <div className="flex items-center gap-2">
                <label className="switch">
                  <span className="switch-label">
                    Auto refresh:
                    <span className="switch-on:hidden">Off</span>
                    <span className="hidden switch-on:inline">On</span>
                  </span>
                  <input
                    checked={true}
                    name="check"
                    type="checkbox"
                    value="1"
                  />
                </label>
              </div>
            </div>
            <div className="card-body">
              <div className="flex flex-col">
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-code text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col pb-2.5">
                      <span className="text-sm font-medium text-gray-700">
                        Jenny attended a Nature Photography Immersion workshop
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        3 days ago, 11:45 AM
                      </span>
                    </div>
                    <div className="card shadow-none">
                      <div className="card-body">
                        <div className="grid gap-4">
                          <div className="flex flex-col md:flex-row md:items-center gap-5">
                            <div className="flex items-center gap-5 shrink-0">
                              <div className="border border-brand-clarity rounded-lg max-h-20">
                                <div className="flex items-center justify-center border-b border-b-brand-clarity bg-brand-light rounded-t-lg">
                                  <span className="text-2sm text-brand fw-medium p-2">
                                    Apr
                                  </span>
                                </div>
                                <div className="flex items-center justify-center size-12">
                                  <span className="fw-semibold text-gray-800 text-1.5xl tracking-tight">
                                    02
                                  </span>
                                </div>
                              </div>
                              <img
                                alt=""
                                className="rounded-lg max-h-20 max-w-full"
                                src="/media/images/600x400/8.jpg"
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <a
                                className="text-xs font-medium text-brand leading-[14px] hover:text-primary-active mb-px"
                                href="#"
                              >
                                Photo Workshop
                              </a>
                              <a
                                className="text-md font-semibold hover:text-primary text-gray-900 leading-4"
                                href="#"
                              >
                                Nature Photography Immersion
                              </a>
                              <p className="text-xs font-medium text-gray-700 leading-[22px]">
                                Enhance your nature photography skills in a
                                hands-on workshop guided by experienced
                                photographers.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-share text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        I couldn't resist sharing a sneak peek of our
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/blogger.html"
                        >
                          upcoming content
                        </a>
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        5 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-coffee text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Reaching the milestone of
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/feeds.html"
                        >
                          10,000 followers
                        </a>
                        on the blog was a dream come true
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        5 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-rocket text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Completed phase one of client project ahead of schedule.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        6 days ago, 10:45 AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-design-1 text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Onboarded a talented designer to our creative team,
                        adding valuable expertise to upcoming projects.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        2 weeks ago, 10:45 AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-like-shapes text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Hosted a virtual
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/creator.html"
                        >
                          team-building event
                        </a>
                        , fostering collaboration and strengthening bonds among
                        team members.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        1 month ago, 13:56 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-cup text-base"></i>
                  </div>
                  <div className="pl-2.5 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        We recently
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/nft.html"
                        >
                          celebrated
                        </a>
                        the blog's 1-year anniversary
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        3 months ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer justify-center">
              <a className="btn btn-link" href="#">
                All-time Activity
              </a>
            </div>
          </div>
          <div className="card grow hidden" id="activity_2020">
            <div className="card-header">
              <h3 className="card-title">Activity</h3>
              <div className="flex items-center gap-2">
                <label className="switch">
                  <span className="switch-label">
                    Auto refresh:
                    <span className="switch-on:hidden">Off</span>
                    <span className="hidden switch-on:inline">On</span>
                  </span>
                  <input
                    checked={true}
                    name="check"
                    type="checkbox"
                    value="1"
                  />
                </label>
              </div>
            </div>
            <div className="card-body">
              <div className="flex flex-col">
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-share text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        I couldn't resist sharing a sneak peek of our
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/blogger.html"
                        >
                          upcoming content
                        </a>
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        5 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-coffee text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Reaching the milestone of
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/feeds.html"
                        >
                          10,000 followers
                        </a>
                        on the blog was a dream come true
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        5 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-design-1 text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Onboarded a talented designer to our creative team,
                        adding valuable expertise to upcoming projects.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        2 weeks ago, 10:45 AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-like-shapes text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Hosted a virtual
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/creator.html"
                        >
                          team-building event
                        </a>
                        , fostering collaboration and strengthening bonds among
                        team members.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        1 month ago, 13:56 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-cup text-base"></i>
                  </div>
                  <div className="pl-2.5 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        We recently
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/nft.html"
                        >
                          celebrated
                        </a>
                        the blog's 1-year anniversary
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        3 months ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer justify-center">
              <a className="btn btn-link" href="#">
                All-time Activity
              </a>
            </div>
          </div>
          <div className="card grow hidden" id="activity_2019">
            <div className="card-header">
              <h3 className="card-title">Activity</h3>
              <div className="flex items-center gap-2">
                <label className="switch">
                  <span className="switch-label">
                    Auto refresh:
                    <span className="switch-on:hidden">Off</span>
                    <span className="hidden switch-on:inline">On</span>
                  </span>
                  <input
                    checked={true}
                    name="check"
                    type="checkbox"
                    value="1"
                  />
                </label>
              </div>
            </div>
            <div className="card-body">
              <div className="flex flex-col">
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-share text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        I couldn't resist sharing a sneak peek of our
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/blogger.html"
                        >
                          upcoming content
                        </a>
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        5 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-calendar-tick text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col pb-2.5">
                      <span className="text-sm font-medium text-gray-700">
                        Jenny attended a webinar on new product features.
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        3 days ago, 11:45 AM
                      </span>
                    </div>
                    <div className="card shadow-none p-4">
                      <div className="flex flex-wrap gap-2.5">
                        <i className="ki-filled ki-code text-lg text-info"></i>
                        <div className="flex flex-col gap-5 grow">
                          <div className="flex flex-wrap items-center justify-between">
                            <div className="flex flex-col gap-0.5">
                              <span className="text-md font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                                Leadership Development Series: Part 1
                              </span>
                              <span className="text-xs font-medium text-gray-500">
                                The first installment of a leadership
                                development series.
                              </span>
                            </div>
                            <a
                              className="btn btn-link"
                              href="html/demo1/account/members/teams.html"
                            >
                              View
                            </a>
                          </div>
                          <div className="flex flex-wrap gap-7.5">
                            <div className="flex items-center gap-1.5">
                              <span className="text-2sm font-medium text-gray-500">
                                Code:
                              </span>
                              <a
                                className="text-2sm font-semibold text-primary"
                                href="#"
                              >
                                #leaderdev-1
                              </a>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-2sm font-medium text-gray-500">
                                Progress:
                              </span>
                              <div className="progress progress-success min-w-[120px]">
                                <div
                                  className="progress-bar"
                                  style={{ width: "80%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 lg:min-w-24 shrink-0 max-w-auto">
                              <span className="text-2sm font-medium text-gray-500">
                                Guests:
                              </span>
                              <div className="flex -space-x-2">
                                <div className="flex">
                                  <img
                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-7"
                                    src="/media/avatars/300-4.png"
                                  />
                                </div>
                                <div className="flex">
                                  <img
                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-7"
                                    src="/media/avatars/300-1.png"
                                  />
                                </div>
                                <div className="flex">
                                  <img
                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-7"
                                    src="/media/avatars/300-2.png"
                                  />
                                </div>
                                <div className="flex">
                                  <span className="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-7 text-primary-inverse ring-primary-light bg-primary">
                                    +24
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-coffee text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Reaching the milestone of
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/feeds.html"
                        >
                          10,000 followers
                        </a>
                        on the blog was a dream come true
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        5 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-design-1 text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Onboarded a talented designer to our creative team,
                        adding valuable expertise to upcoming projects.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        2 weeks ago, 10:45 AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-like-shapes text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Hosted a virtual
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/creator.html"
                        >
                          team-building event
                        </a>
                        , fostering collaboration and strengthening bonds among
                        team members.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        1 month ago, 13:56 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-cup text-base"></i>
                  </div>
                  <div className="pl-2.5 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        We recently
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/nft.html"
                        >
                          celebrated
                        </a>
                        the blog's 1-year anniversary
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        3 months ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer justify-center">
              <a className="btn btn-link" href="#">
                All-time Activity
              </a>
            </div>
          </div>
          <div className="card grow hidden" id="activity_2018">
            <div className="card-header">
              <h3 className="card-title">Activity</h3>
              <div className="flex items-center gap-2">
                <label className="switch">
                  <span className="switch-label">
                    Auto refresh:
                    <span className="switch-on:hidden">Off</span>
                    <span className="hidden switch-on:inline">On</span>
                  </span>
                  <input
                    checked={true}
                    name="check"
                    type="checkbox"
                    value="1"
                  />
                </label>
              </div>
            </div>
            <div className="card-body">
              <div className="flex flex-col">
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-share text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        I couldn't resist sharing a sneak peek of our
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/blogger.html"
                        >
                          upcoming content
                        </a>
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        5 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-coffee text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Reaching the milestone of
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/feeds.html"
                        >
                          10,000 followers
                        </a>
                        on the blog was a dream come true
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        5 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-directbox-default text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col pb-2.5">
                      <span className="text-sm font-medium text-gray-800">
                        Attending the virtual blogging conference was an
                        enriching experience
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        2 days ago, 4:07 PM
                      </span>
                    </div>
                    <div className="card shadow-none">
                      <div className="card-body lg:py-4">
                        <div className="flex justify-center py-4">
                          <img
                            alt="image"
                            className="dark:hidden max-h-[160px]"
                            src="/media/illustrations/28.svg"
                          />
                          <img
                            alt="image"
                            className="light:hidden max-h-[160px]"
                            src="/media/illustrations/28-dark.svg"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="text-md font-semibold text-gray-900 text-center">
                            Blogging Conference
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            <a
                              className="text-2sm font-semibold link"
                              href="html/demo1/public-profile/profiles/company.html"
                            >
                              Axio new release
                            </a>
                            <span className="text-2sm font-medium text-gray-600 mr-2">
                              email campaign
                            </span>
                            <span className="badge badge-sm badge-success badge-outline">
                              Public
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-design-1 text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Onboarded a talented designer to our creative team,
                        adding valuable expertise to upcoming projects.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        2 weeks ago, 10:45 AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-like-shapes text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Hosted a virtual
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/creator.html"
                        >
                          team-building event
                        </a>
                        , fostering collaboration and strengthening bonds among
                        team members.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        1 month ago, 13:56 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-cup text-base"></i>
                  </div>
                  <div className="pl-2.5 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        We recently
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/nft.html"
                        >
                          celebrated
                        </a>
                        the blog's 1-year anniversary
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        3 months ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer justify-center">
              <a className="btn btn-link" href="#">
                All-time Activity
              </a>
            </div>
          </div>
          <div className="card grow hidden" id="activity_2017">
            <div className="card-header">
              <h3 className="card-title">Activity</h3>
              <div className="flex items-center gap-2">
                <label className="switch">
                  <span className="switch-label">
                    Auto refresh:
                    <span className="switch-on:hidden">Off</span>
                    <span className="hidden switch-on:inline">On</span>
                  </span>
                  <input
                    checked={true}
                    name="check"
                    type="checkbox"
                    value="1"
                  />
                </label>
              </div>
            </div>
            <div className="card-body">
              <div className="flex flex-col">
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-share text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        I couldn't resist sharing a sneak peek of our
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/blogger.html"
                        >
                          upcoming content
                        </a>
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        5 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-coffee text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Reaching the milestone of
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/feeds.html"
                        >
                          10,000 followers
                        </a>
                        on the blog was a dream come true
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        5 days ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-design-1 text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Onboarded a talented designer to our creative team,
                        adding valuable expertise to upcoming projects.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        2 weeks ago, 10:45 AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-code text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="grow">
                      <div className="flex flex-col pb-2.5">
                        <div className="text-sm font-medium text-gray-700">
                          A new team
                          <a
                            className="text-sm font-semibold text-gray-900 hover:text-primary-active"
                            href="#"
                          >
                            Market Mavericks
                          </a>
                          joined community
                        </div>
                        <span className="text-xs font-medium text-gray-500">
                          1 month ago, 11:45 AM
                        </span>
                      </div>
                      <div className="card shadow-none p-4">
                        <div className="flex flex-wrap justify-between items-center gap-7">
                          <div className="flex items-center gap-4">
                            <div className="relative size-[50px] shrink-0">
                              <svg
                                className="w-full h-full stroke-primary-clarity fill-primary-light"
                                fill="none"
                                height="48"
                                viewBox="0 0 44 48"
                                width="44"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506
              18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937
              39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z"
                                  fill="none"
                                ></path>
                                <path
                                  d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506
              18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937
              39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                                  stroke="none"
                                  stroke-opacity="1"
                                ></path>
                              </svg>
                              <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                                <i className="ki-filled ki-abstract-39 text-xl ps-px text-primary"></i>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <a
                                className="text-base font-semibold hover:text-primary text-gray-900"
                                href="#"
                              >
                                Market Mavericks
                              </a>
                              <p className="text-2sm font-medium text-gray-600">
                                Navigating markets with strategic solutions
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-6 lg:gap-12">
                            <div className="flex flex-col items-end gap-5">
                              <span className="text-2xs font-normal text-gray-500 uppercase">
                                rating
                              </span>
                              <div className="rating">
                                <div className="rating-label checked">
                                  <i className="rating-on ki-solid ki-star text-base leading-none"></i>
                                  <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                                </div>
                                <div className="rating-label checked">
                                  <i className="rating-on ki-solid ki-star text-base leading-none"></i>
                                  <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                                </div>
                                <div className="rating-label checked">
                                  <i className="rating-on ki-solid ki-star text-base leading-none"></i>
                                  <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                                </div>
                                <div className="rating-label checked">
                                  <i className="rating-on ki-solid ki-star text-base leading-none"></i>
                                  <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                                </div>
                                <div className="rating-label indeterminate">
                                  <i
                                    className="rating-on ki-solid ki-star text-base leading-none"
                                    style={{ width: "50.0%" }}
                                  ></i>
                                  <i className="rating-off ki-outline ki-star text-base leading-none"></i>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-3 lg:min-w-24 shrink-0 max-w-auto">
                              <span className="text-2xs font-normal text-gray-500 uppercase">
                                memebers
                              </span>
                              <div className="flex -space-x-2">
                                <div className="flex">
                                  <img
                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-7"
                                    src="/media/avatars/300-4.png"
                                  />
                                </div>
                                <div className="flex">
                                  <img
                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-7"
                                    src="/media/avatars/300-1.png"
                                  />
                                </div>
                                <div className="flex">
                                  <img
                                    className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-7"
                                    src="/media/avatars/300-2.png"
                                  />
                                </div>
                                <div className="flex">
                                  <span className="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-7 text-primary-inverse ring-primary-light bg-primary">
                                    S
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="grid justify-end min-w-20">
                              <a className="btn btn-sm btn-primary">
                                <i className="ki-filled ki-people"></i>
                                Join
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-like-shapes text-base"></i>
                  </div>
                  <div className="pl-2.5 mb-7 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        Hosted a virtual
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/creator.html"
                        >
                          team-building event
                        </a>
                        , fostering collaboration and strengthening bonds among
                        team members.
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        1 month ago, 13:56 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                    <i className="ki-filled ki-cup text-base"></i>
                  </div>
                  <div className="pl-2.5 text-md grow">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-800">
                        We recently
                        <a
                          className="text-sm font-medium link"
                          href="html/demo1/public-profile/profiles/nft.html"
                        >
                          celebrated
                        </a>
                        the blog's 1-year anniversary
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        3 months ago, 4:07 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer justify-center">
              <a className="btn btn-link" href="#">
                All-time Activity
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2.5" data-tabs="true">
            <a
              className="btn btn-sm text-gray-600 hover:text-primary tab-active:bg-primary-light tab-active:text-primary active"
              data-tab-toggle="#activity_2024"
              href="#"
            >
              2024
            </a>
            <a
              className="btn btn-sm text-gray-600 hover:text-primary tab-active:bg-primary-light tab-active:text-primary"
              data-tab-toggle="#activity_2023"
              href="#"
            >
              2023
            </a>
            <a
              className="btn btn-sm text-gray-600 hover:text-primary tab-active:bg-primary-light tab-active:text-primary"
              data-tab-toggle="#activity_2022"
              href="#"
            >
              2022
            </a>
            <a
              className="btn btn-sm text-gray-600 hover:text-primary tab-active:bg-primary-light tab-active:text-primary"
              data-tab-toggle="#activity_2021"
              href="#"
            >
              2021
            </a>
            <a
              className="btn btn-sm text-gray-600 hover:text-primary tab-active:bg-primary-light tab-active:text-primary"
              data-tab-toggle="#activity_2020"
              href="#"
            >
              2020
            </a>
            <a
              className="btn btn-sm text-gray-600 hover:text-primary tab-active:bg-primary-light tab-active:text-primary"
              data-tab-toggle="#activity_2019"
              href="#"
            >
              2019
            </a>
            <a
              className="btn btn-sm text-gray-600 hover:text-primary tab-active:bg-primary-light tab-active:text-primary"
              data-tab-toggle="#activity_2018"
              href="#"
            >
              2018
            </a>
            <a
              className="btn btn-sm text-gray-600 hover:text-primary tab-active:bg-primary-light tab-active:text-primary"
              data-tab-toggle="#activity_2017"
              href="#"
            >
              2017
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
