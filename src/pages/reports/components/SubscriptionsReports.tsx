export function SubscriptionsReports() {
  return (
    <main className="grow content pt-5 h-full" id="content" role="content">
      <div className="container-fixed">
        <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-xl font-semibold leading-none text-gray-900">
              Subscriptions Report
            </h1>
          </div>
          <div className="flex items-center gap-2.5">
            {/* <a className="btn btn-sm btn-light" href="#">
              Import CSV
            </a> */}
            <a className="btn btn-sm btn-primary" href="#">
              Create
            </a>
          </div>
        </div>
      </div>
      <div className="container-fixed">
        <div className="grid gap-5 lg:gap-7.5">
          <div className="card card-grid min-w-full">
            <div className="card-header flex-wrap gap-2">
              <h3 className="card-title font-medium text-sm">
                Showing 20 of 68 users
              </h3>
              <div className="flex flex-wrap gap-2 lg:gap-5">
                <div className="flex">
                  <label className="input input-sm">
                    <i className="ki-filled ki-magnifier"></i>
                    <input placeholder="Search users" type="text" />
                  </label>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <select className="select select-sm w-28">
                    <option value="1">Active</option>
                    <option value="2">Disabled</option>
                    <option value="2">Pending</option>
                  </select>
                  <select className="select select-sm w-28">
                    <option value="1">Latest</option>
                    <option value="2">Older</option>
                    <option value="3">Oldest</option>
                  </select>
                  <button className="btn btn-sm btn-outline btn-primary">
                    <i className="ki-filled ki-setting-4"></i>
                    Filters
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div
                data-datatable="true"
                data-datatable-page-size="20"
                className="datatable-initialized"
              >
                <div className="scrollable-x-auto">
                  <table
                    className="table table-auto table-border"
                    data-datatable-table="true"
                  >
                    <thead>
                      <tr>
                        <th className="w-[60px] text-center">
                          <input
                            className="checkbox checkbox-sm"
                            data-datatable-check="true"
                            type="checkbox"
                          />
                        </th>
                        <th className="min-w-[300px]">
                          <span className="sort asc">
                            <span className="sort-label">Member</span>
                            <span className="sort-icon"></span>
                          </span>
                        </th>
                        <th className="min-w-[180px]">
                          <span className="sort">
                            <span className="sort-label">Role</span>
                            <span className="sort-icon"></span>
                          </span>
                        </th>
                        <th className="min-w-[180px]">
                          <span className="sort">
                            <span className="sort-label">Status</span>
                            <span className="sort-icon"></span>
                          </span>
                        </th>
                        <th className="min-w-[180px]">
                          <span className="sort">
                            <span className="sort-label">Location</span>
                            <span className="sort-icon"></span>
                          </span>
                        </th>
                        <th className="min-w-[180px]">
                          <span className="sort asc">
                            <span className="sort-label">Activity</span>
                            <span className="sort-icon"></span>
                          </span>
                        </th>
                        <th className="w-[60px]"></th>
                      </tr>
                    </thead>

                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      data-datatable-spinner="true"
                      style={{ display: "none" }}
                    >
                      <div className="flex items-center gap-2 px-4 py-2 font-medium leading-none text-2sm border border-gray-200 shadow-default rounded-md text-gray-500 bg-light">
                        <svg
                          className="animate-spin -ml-1 h-5 w-5 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="3"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Loading...
                      </div>
                    </div>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <input
                            className="checkbox checkbox-sm"
                            data-datatable-row-check="true"
                            type="checkbox"
                          />
                        </td>
                        <td>
                          <div className="flex items-center gap-2.5">
                            <img
                              alt=""
                              className="rounded-full size-9 shrink-0"
                              src="/media/avatars/300-2.png"
                            />
                            <div className="flex flex-col">
                              <a
                                className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                                href="#"
                              >
                                Cody Fisher
                              </a>
                              <a
                                className="text-2sm font-medium text-gray-600 hover:text-primary-active"
                                href="#"
                              >
                                cody.fisher@gmail.com
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>Manager</td>
                        <td>
                          <span className="badge badge-primary badge-outline rounded-[30px]">
                            <span className="size-1.5 rounded-full bg-primary me-1.5"></span>
                            Remote
                          </span>
                        </td>
                        <td>
                          <div className="flex items-center gap-1.5">
                            <img
                              alt=""
                              className="rounded-full size-4 shrink-0"
                              src="/media/flags/canada.svg"
                            />
                            Canada
                          </div>
                        </td>
                        <td>Current session</td>
                        <td className="text-center">
                          <div className="menu flex-inline" data-menu="true">
                            <div
                              className="menu-item menu-item-dropdown"
                              data-menu-item-offset="0, 10px"
                              data-menu-item-placement="bottom-end"
                              data-menu-item-toggle="dropdown"
                              data-menu-item-trigger="click|lg:click"
                            >
                              <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                                <i className="ki-filled ki-dots-vertical"></i>
                              </button>
                              <div
                                className="menu-dropdown menu-default w-full max-w-[175px]"
                                data-menu-dismiss="true"
                              >
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-search-list"></i>
                                    </span>
                                    <span className="menu-title">View</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-file-up"></i>
                                    </span>
                                    <span className="menu-title">Export</span>
                                  </a>
                                </div>
                                <div className="menu-separator"></div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-pencil"></i>
                                    </span>
                                    <span className="menu-title">Edit</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-copy"></i>
                                    </span>
                                    <span className="menu-title">
                                      Make a copy
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-separator"></div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-trash"></i>
                                    </span>
                                    <span className="menu-title">Remove</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <input
                            className="checkbox checkbox-sm"
                            data-datatable-row-check="true"
                            type="checkbox"
                          />
                        </td>
                        <td>
                          <div className="flex items-center gap-2.5">
                            <img
                              alt=""
                              className="rounded-full size-9 shrink-0"
                              src="/media/avatars/300-3.png"
                            />
                            <div className="flex flex-col">
                              <a
                                className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                                href="#"
                              >
                                Tyler Hero
                              </a>
                              <a
                                className="text-2sm font-medium text-gray-600 hover:text-primary-active"
                                href="#"
                              >
                                tyler.hero@gmail.com
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>Super Admin</td>
                        <td>
                          <span className="badge badge-success badge-outline rounded-[30px]">
                            <span className="size-1.5 rounded-full bg-success me-1.5"></span>
                            In Office
                          </span>
                        </td>
                        <td>
                          <div className="flex items-center gap-1.5">
                            <img
                              alt=""
                              className="rounded-full size-4 shrink-0"
                              src="/media/flags/estonia.svg"
                            />
                            Estonia
                          </div>
                        </td>
                        <td>Current session</td>
                        <td className="text-center">
                          <div className="menu flex-inline" data-menu="true">
                            <div
                              className="menu-item menu-item-dropdown"
                              data-menu-item-offset="0, 10px"
                              data-menu-item-placement="bottom-end"
                              data-menu-item-toggle="dropdown"
                              data-menu-item-trigger="click|lg:click"
                            >
                              <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                                <i className="ki-filled ki-dots-vertical"></i>
                              </button>
                              <div
                                className="menu-dropdown menu-default w-full max-w-[175px]"
                                data-menu-dismiss="true"
                              >
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-search-list"></i>
                                    </span>
                                    <span className="menu-title">View</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-file-up"></i>
                                    </span>
                                    <span className="menu-title">Export</span>
                                  </a>
                                </div>
                                <div className="menu-separator"></div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-pencil"></i>
                                    </span>
                                    <span className="menu-title">Edit</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-copy"></i>
                                    </span>
                                    <span className="menu-title">
                                      Make a copy
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-separator"></div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-trash"></i>
                                    </span>
                                    <span className="menu-title">Remove</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="text-center">
                          <input
                            className="checkbox checkbox-sm"
                            data-datatable-row-check="true"
                            type="checkbox"
                          />
                        </td>
                        <td>
                          <div className="flex items-center gap-2.5">
                            <img
                              alt=""
                              className="rounded-full size-9 shrink-0"
                              src="/media/avatars/300-10.png"
                            />
                            <div className="flex flex-col">
                              <a
                                className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                                href="#"
                              >
                                Olivia Martinez
                              </a>
                              <a
                                className="text-2sm font-medium text-gray-600 hover:text-primary-active"
                                href="#"
                              >
                                olivia.martinez@gmail.com
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>Product Manager</td>
                        <td>
                          <span className="badge badge-primary badge-outline rounded-[30px]">
                            <span className="size-1.5 rounded-full bg-primary me-1.5"></span>
                            Remote
                          </span>
                        </td>
                        <td>
                          <div className="flex items-center gap-1.5">
                            <img
                              alt=""
                              className="rounded-full size-4 shrink-0"
                              src="/media/flags/italy.svg"
                            />
                            Italy
                          </div>
                        </td>
                        <td>Current session</td>
                        <td className="text-center">
                          <div className="menu flex-inline" data-menu="true">
                            <div
                              className="menu-item menu-item-dropdown"
                              data-menu-item-offset="0, 10px"
                              data-menu-item-placement="bottom-end"
                              data-menu-item-toggle="dropdown"
                              data-menu-item-trigger="click|lg:click"
                            >
                              <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                                <i className="ki-filled ki-dots-vertical"></i>
                              </button>
                              <div
                                className="menu-dropdown menu-default w-full max-w-[175px]"
                                data-menu-dismiss="true"
                              >
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-search-list"></i>
                                    </span>
                                    <span className="menu-title">View</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-file-up"></i>
                                    </span>
                                    <span className="menu-title">Export</span>
                                  </a>
                                </div>
                                <div className="menu-separator"></div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-pencil"></i>
                                    </span>
                                    <span className="menu-title">Edit</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-copy"></i>
                                    </span>
                                    <span className="menu-title">
                                      Make a copy
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-separator"></div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-trash"></i>
                                    </span>
                                    <span className="menu-title">Remove</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <input
                            className="checkbox checkbox-sm"
                            data-datatable-row-check="true"
                            type="checkbox"
                          />
                        </td>
                        <td>
                          <div className="flex items-center gap-2.5">
                            <img
                              alt=""
                              className="rounded-full size-9 shrink-0"
                              src="/media/avatars/300-18.png"
                            />
                            <div className="flex flex-col">
                              <a
                                className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                                href="#"
                              >
                                Ronald Richards
                              </a>
                              <a
                                className="text-2sm font-medium text-gray-600 hover:text-primary-active"
                                href="#"
                              >
                                ronald.richards@gmail.com
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>Manager</td>
                        <td>
                          <span className="badge badge-primary badge-outline rounded-[30px]">
                            <span className="size-1.5 rounded-full bg-primary me-1.5"></span>
                            Remote
                          </span>
                        </td>
                        <td>
                          <div className="flex items-center gap-1.5">
                            <img
                              alt=""
                              className="rounded-full size-4 shrink-0"
                              src="/media/flags/uruguay.svg"
                            />
                            Uruguay
                          </div>
                        </td>
                        <td>Current session</td>
                        <td className="text-center">
                          <div className="menu flex-inline" data-menu="true">
                            <div
                              className="menu-item menu-item-dropdown"
                              data-menu-item-offset="0, 10px"
                              data-menu-item-placement="bottom-end"
                              data-menu-item-toggle="dropdown"
                              data-menu-item-trigger="click|lg:click"
                            >
                              <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                                <i className="ki-filled ki-dots-vertical"></i>
                              </button>
                              <div
                                className="menu-dropdown menu-default w-full max-w-[175px]"
                                data-menu-dismiss="true"
                              >
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-search-list"></i>
                                    </span>
                                    <span className="menu-title">View</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-file-up"></i>
                                    </span>
                                    <span className="menu-title">Export</span>
                                  </a>
                                </div>
                                <div className="menu-separator"></div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-pencil"></i>
                                    </span>
                                    <span className="menu-title">Edit</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-copy"></i>
                                    </span>
                                    <span className="menu-title">
                                      Make a copy
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-separator"></div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-trash"></i>
                                    </span>
                                    <span className="menu-title">Remove</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <input
                            className="checkbox checkbox-sm"
                            data-datatable-row-check="true"
                            type="checkbox"
                          />
                        </td>
                        <td>
                          <div className="flex items-center gap-2.5">
                            <img
                              alt=""
                              className="rounded-full size-9 shrink-0"
                              src="/media/avatars/300-20.png"
                            />
                            <div className="flex flex-col">
                              <a
                                className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                                href="#"
                              >
                                Guy Hawkins
                              </a>
                              <a
                                className="text-2sm font-medium text-gray-600 hover:text-primary-active"
                                href="#"
                              >
                                guy.hawkins@gmail.com
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>HR</td>
                        <td>
                          <span className="badge badge-primary badge-outline rounded-[30px]">
                            <span className="size-1.5 rounded-full bg-primary me-1.5"></span>
                            Remote
                          </span>
                        </td>
                        <td>
                          <div className="flex items-center gap-1.5">
                            <img
                              alt=""
                              className="rounded-full size-4 shrink-0"
                              src="/media/flags/turkey.svg"
                            />
                            Turkey
                          </div>
                        </td>
                        <td>Current session</td>
                        <td className="text-center">
                          <div className="menu flex-inline" data-menu="true">
                            <div
                              className="menu-item menu-item-dropdown"
                              data-menu-item-offset="0, 10px"
                              data-menu-item-placement="bottom-end"
                              data-menu-item-toggle="dropdown"
                              data-menu-item-trigger="click|lg:click"
                            >
                              <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                                <i className="ki-filled ki-dots-vertical"></i>
                              </button>
                              <div
                                className="menu-dropdown menu-default w-full max-w-[175px]"
                                data-menu-dismiss="true"
                              >
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-search-list"></i>
                                    </span>
                                    <span className="menu-title">View</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-file-up"></i>
                                    </span>
                                    <span className="menu-title">Export</span>
                                  </a>
                                </div>
                                <div className="menu-separator"></div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-pencil"></i>
                                    </span>
                                    <span className="menu-title">Edit</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-copy"></i>
                                    </span>
                                    <span className="menu-title">
                                      Make a copy
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-separator"></div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#">
                                    <span className="menu-icon">
                                      <i className="ki-filled ki-trash"></i>
                                    </span>
                                    <span className="menu-title">Remove</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium">
                  <div className="flex items-center gap-2 order-2 md:order-1">
                    Show
                    <select
                      className="select select-sm w-16"
                      data-datatable-size="true"
                      name="perpage"
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="50">50</option>
                    </select>
                    per page
                  </div>
                  <div className="flex items-center gap-4 order-1 md:order-2">
                    <span data-datatable-info="true">1-5 of 68</span>
                    <div
                      className="pagination"
                      data-datatable-pagination="true"
                    >
                      <div className="pagination">
                        <button className="btn disabled" disabled={true}>
                          <i className="ki-outline ki-black-left"></i>
                        </button>
                        <button className="btn active disabled" disabled={true}>
                          1
                        </button>
                        <button className="btn">2</button>
                        <button className="btn">3</button>
                        <button className="btn">...</button>
                        <button className="btn">
                          <i className="ki-outline ki-black-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
