import { Link, useNavigate } from "react-router-dom";
import ReusableTable from "../../../components/ReusableTable";
import { useState } from "react";
import { useDebouncedValue } from "../../../utils/assetHelper";
import { useGetErrandsQuery } from "../../../redux/services/errands";
import Badge from "../../../components/badge";
import {
  useDeleteErrandCategoryMutation,
  useGetErrandCategoriesQuery,
} from "../../../redux/services/errand-categories";
import { IErrandCategory } from "../../../types/errand-category";
import useAlert from "../../../utils/use-alert";

export function AllErrandCategories() {
  const [showCreateOrganizationModal, setShowCreateOrganizationModal] =
    useState<boolean>(false);
  const [deleteErrandCategory] = useDeleteErrandCategoryMutation();
  const [filterParams, setFilterParams] = useState({
    search: "",
    status: "",
    paymentStatus: "",
    category: "",
    page: 1,
    limit: 10,
    sort: "createdAt:DESC",
  });
  const [sort, setsort] = useState<any>({
    createdAt: "desc",
  });

  const debouncedFilter = useDebouncedValue(filterParams);

  const {
    data: errandCategoryApiResponse,
    ...errandCategoryApiResponseDetails
  } = useGetErrandCategoriesQuery({
    page: filterParams.page,
    limit: filterParams.limit,
    ...(debouncedFilter?.search && { search: debouncedFilter.search }),
    ...(debouncedFilter?.paymentStatus && {
      paymentStatus: debouncedFilter.paymentStatus,
    }),
    ...(debouncedFilter?.status && { status: debouncedFilter.status }),
    ...(debouncedFilter?.category && { category: debouncedFilter.category }),
  });

  const columns = [
    { header: "Name", accessor: "name", sortable: true },
    { header: "Type", accessor: "type", sortable: true },
  ];

  const handleSortAction = (col: any) => {
    if (sort[col]) {
      setsort({ ...sort, [col]: sort[col] === "dsc" ? "asc" : "dsc" });
    } else {
      setsort({ ...sort, [col]: "dsc" });
    }
  };

  const navigate = useNavigate();

  // const handleViewErrand = (errandCategory: IErrandCategory) => {
  //   navigate("/errands/categoires/${errandCategory.id}/view");
  // };

  const handleEditErrand = (errandCategory: IErrandCategory) => {
    navigate(`/errands/categories/${errandCategory.id}/edit`);
  };

  const handleDeleteErrand = (errandCategory: IErrandCategory) => {
    useAlert(
      "Are you sure you want to delete this errand category",
      "Delete",
      () => deleteErrandCategory(errandCategory.id),
      "Errand deleted"
    );
  };

  const handleSearchChange = (e: any) => {
    setFilterParams({ ...filterParams, search: e.target.value });
  };

  const tableFilters: any = [];

  const debouncedSearchQuery = useDebouncedValue(filterParams.search);

  const handleErrandCategoriesApiResponse = (data: any[]) => {
    return data?.map((categories: any) => ({
      ...categories,
    }));
  };

  return (
    <>
      <main className="grow content pt-5 h-full" id="content" role="content">
        <div className="container-fixed">
          <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
            <div className="flex flex-col justify-center gap-2">
              <h1 className="text-xl font-semibold leading-none text-gray-900">
                All Errands Categories
              </h1>
              <div className="flex items-center flex-wrap gap-1.5 font-medium">
                <span className="text-md text-gray-600">All:</span>
                <span className="text-md text-gray-800 font-semibold me-2">
                  {errandCategoryApiResponse?.total || 0}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              {/* <a className="btn btn-sm btn-light" href="#">
               Import CSV
             </a> */}
              <Link
                className="btn btn-sm btn-primary"
                to={"/errands/categories/create"}
              >
                Create Category
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fixed">
          <div className="grid gap-5 lg:gap-7.5">
            <ReusableTable
              data={handleErrandCategoriesApiResponse(
                errandCategoryApiResponse?.data || []
              )}
              dataImage={false}
              deleteAction={handleDeleteErrand}
              columns={columns}
              isLoading={errandCategoryApiResponseDetails?.isFetching}
              error={null}
              totalItems={errandCategoryApiResponse?.total || 0}
              tableFilters={tableFilters}
              sort={{
                sortState: filterParams.sort,
                setSort: (newSort: string) =>
                  setFilterParams({ ...filterParams, sort: newSort }),
              }}
              viewAction={handleEditErrand}
              currentPage={filterParams?.page}
              selectAction={false}
              itemsPerPage={filterParams.limit}
              onSearch={(value) =>
                setFilterParams({ ...filterParams, search: value })
              }
              onSort={(head) => handleSortAction(head)}
              onPageChange={(value) =>
                setFilterParams({ ...filterParams, page: value })
              }
              onPerPageChange={(value) =>
                setFilterParams({ ...filterParams, limit: value })
              }
              onActionClick={() => null}
            />
          </div>
        </div>
      </main>
    </>
  );
}
