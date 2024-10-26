import React from "react";
import LoadingSpinner from "./common/LoadingSpinner";

interface Column {
  header: string;
  accessor: string;
  minWidth?: string;
  sortable?: boolean;
  sortFunction?: (a: any, b: any) => number;
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

interface Filter {
  name: string;
  filterOptions: { label: string; value: string }[];
  onchange: (value: any) => void;
}

interface ReusableTableProps {
  data: any[];
  columns: Column[];
  isLoading: boolean;
  isFetching?: boolean;
  sort: any;
  tableFilters?: Filter[];
  error: any;
  totalItems: number;
  selectAction?: boolean;
  dataImage?: boolean;
  currentPage: number;
  itemsPerPage: number;
  onSearch?: (searchTerm: string) => void;
  handleRefresh?: () => void;
  viewAction?: (data: any) => void;
  editAction?: (data: any) => void;
  deleteAction?: (data: any) => void;
  onFilter?: (filter: any) => void;
  onSort?: (sortBy: string) => void;
  onPageChange: (page: number) => void;
  onPerPageChange: (itemsPerPage: number) => void;
  onActionClick?: (action: string, item: any) => void;
}

const ReusableTable: React.FC<ReusableTableProps> = ({
  data,
  columns,
  isLoading,
  error,
  totalItems,
  sort,
  currentPage,
  viewAction,
  editAction,
  deleteAction,
  dataImage,
  itemsPerPage,
  onSearch,
  tableFilters,
  handleRefresh,
  selectAction,
  onPageChange,
  onPerPageChange,
}) => {
  const handleSortAction = (col: any) => {
    const [by, order] = sort?.sortState.split(":");
    console.log(by, order);

    if (by === col) {
      sort?.setSort(`${by}:${order === "DESC" ? "ASC" : "DESC"}`);
    } else {
      sort?.setSort(`${col}:DESC`);
    }
  };

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header flex-wrap gap-2">
        <h3 className="card-title font-medium text-sm">
          Showing {currentPage * itemsPerPage - itemsPerPage + 1} to{" "}
          {currentPage * itemsPerPage} of {totalItems} items
        </h3>
        <div className="flex  gap-2 lg:gap-5 flex-wrap">
          {onSearch && (
            <div className="flex">
              <label className="input input-sm">
                <i className="ki-filled ki-magnifier"></i>
                <input
                  placeholder="Search"
                  type="text"
                  onChange={(e) => onSearch(e.target.value)}
                />
              </label>
            </div>
          )}
          {tableFilters?.map((filter) => (
            <select
              className="select select-sm  w-[160px]"
              key={`${filter.name}`}
              onChange={(e) => filter.onchange(e.target.value)}
            >
              <option value="">{`Select ${filter.name}`}</option>
              {filter?.filterOptions?.map((option) => (
                <option key={option.value} value={`${option.value}`}>
                  {option.label}
                </option>
              ))}
            </select>
          ))}
          {handleRefresh && (
            <button
              onClick={handleRefresh}
              disabled={isLoading && error}
              style={{ height: "35px" }}
              className="btn btn-sm d-flex gap-2 justify-content-center align-items-center fw-bold btn-primary"
            >
              <i className="ki-filled ki-arrows-circle"></i>
            </button>
          )}
        </div>
      </div>
      <div className="card-body">
        <div className="scrollable-x-auto">
          <table className="table table-auto table-border">
            <thead>
              <tr>
                {selectAction && (
                  <th className="w-[60px] text-center">
                    <input className="checkbox checkbox-sm" type="checkbox" />
                  </th>
                )}
                {dataImage && <th className="w-[60px] text-center">Image</th>}
                {columns.map((col) => {
                  const [by, order] = sort?.sortState.split(":");
                  return (
                    <th
                      key={col.accessor}
                      onClick={() =>
                        col.sortable && handleSortAction(col.accessor)
                      }
                      className={`${
                        col.minWidth ? `w-[${col.minWidth}]` : ""
                      }  ${col.sortable ? "cursor-pointer" : ""} 
                    
                    `}
                    >
                      <span
                        className={`w-full ${col.sortable ? "sort" : ""} 
                    ${
                      by === col.accessor && order.toLowerCase() === "desc"
                        ? "desc"
                        : ""
                    }
                     ${
                       by === col.accessor && order.toLowerCase() === "asc"
                         ? "asc"
                         : ""
                     }
                    
                    `}
                      >
                        <span className="sort-label">{col.header}</span>
                        {col.sortable && <span className="sort-icon"></span>}
                      </span>
                    </th>
                  );
                })}
                {(viewAction || editAction || deleteAction) && (
                  <th className="w-[60px]"> Actions</th>
                )}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={columns?.length + 2}>
                    <div className=" w-full p-10 flex justify-center items-center">
                      <div className=" w-fit flex items-center gap-2 px-4 py-2 font-medium leading-none text-2sm border border-gray-200 shadow-default rounded-md text-gray-500 bg-light">
                        <LoadingSpinner />
                      </div>
                    </div>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={columns?.length + 2}>
                    <div className="justify-center items-center flex py-10">
                      <p className="text-danger text-center fw-semibold">
                        Error: {error.message || "Something went wrong"}
                      </p>
                    </div>
                  </td>
                </tr>
              ) : data?.length === 0 ? (
                <tr>
                  <td colSpan={columns?.length + 2}>
                    <div className="justify-center items-center flex py-10">
                      <span className="text-muted">No records found</span>
                    </div>
                  </td>
                </tr>
              ) : (
                <>
                  {data?.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {selectAction && (
                        <td className="text-center">
                          <input
                            className="checkbox checkbox-sm"
                            type="checkbox"
                          />
                        </td>
                      )}
                      {dataImage && (
                        <td className="text-center ">
                          {/* {row[dataImage]} */}

                          <img
                            alt=""
                            className="rounded-full size-9 shrink-0"
                            src="/media/avatars/blank.png"
                          />
                        </td>
                      )}
                      {columns.map((col) => (
                        <td
                          onClick={() => viewAction && viewAction(row)}
                          key={col.accessor}
                          className="capitalize cursor-pointer"
                        >
                          {row[col.accessor]}
                        </td>
                      ))}
                      {(viewAction || editAction || deleteAction) && (
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
                                {viewAction && (
                                  <div className="menu-item">
                                    <button
                                      onClick={() => viewAction(row)}
                                      className="menu-link"
                                    >
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-search-list"></i>
                                      </span>
                                      <span className="menu-title">View</span>
                                    </button>
                                  </div>
                                )}
                                {editAction && (
                                  <div className="menu-item">
                                    <button
                                      onClick={() => editAction(row)}
                                      className="menu-link"
                                    >
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-pen"></i>
                                      </span>
                                      <span className="menu-title">View</span>
                                    </button>
                                  </div>
                                )}

                                {deleteAction && (
                                  <>
                                    {" "}
                                    <div className="menu-separator"></div>
                                    <div className="menu-item">
                                      <button
                                        onClick={() => deleteAction(row)}
                                        className="menu-link"
                                      >
                                        <span className="menu-icon">
                                          <i className="ki-filled ki-trash"></i>
                                        </span>
                                        <span className="menu-title">
                                          Delete
                                        </span>
                                      </button>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium">
        <div className="flex items-center gap-2 order-2 md:order-1">
          Show
          <select
            className="select select-sm w-16"
            value={itemsPerPage}
            onChange={(e) => onPerPageChange(Number(e.target.value))}
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
          <span data-datatable-info="true">
            {currentPage} - {itemsPerPage} of{" "}
            {Math.ceil(totalItems / itemsPerPage) || 0}
          </span>
          <div className="pagination" data-datatable-pagination="true">
            <div className="pagination">
              <button
                className={`btn ${currentPage === 1 ? "disabled" : ""} `}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
              >
                <i className="ki-outline ki-black-left"></i>
              </button>
              <button className="btn active">{currentPage}</button>
              {/* You can map through pagination numbers here */}
              <button
                className={`btn ${
                  currentPage === Math.ceil(totalItems / itemsPerPage)
                    ? "disabled"
                    : ""
                } `}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
              >
                <i className="ki-outline ki-black-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReusableTable;
