import React from "react";
import * as Yup from "yup";
import ReusableForm from "../../../components/form/ReusableForm";
import { Link } from "react-router-dom";
import {
  useDeleteRoleMutation,
  useGetRolesQuery,
} from "../../../redux/services/role";
import IRole from "../../../types/role";
import useAlert from "../../../utils/use-alert";

export function AllRoles() {
  const { data: rolesApiResponse, ...rolesApiResponseDetails } =
    useGetRolesQuery({});
  const [deleteRole, { ...deleteRoleDetails }] = useDeleteRoleMutation();

  const handleDeleteRole = (role: IRole) => {
    useAlert(
      "Are you sure you want to delete this role",
      "Delete",
      () => deleteRole(role.id),
      "Role deleted"
    );
  };

  return (
    <main className="grow content pt-5 h-full" id="content" role="content">
      <div className="container-fixed">
        <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-xl font-semibold leading-none text-gray-900">
              Roles
            </h1>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              Overview of all team members and roles.
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <a className="btn btn-sm btn-light" href="#">
              New Role
            </a>
          </div>
        </div>
      </div>
      <div className="container-fixed">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5">
          {rolesApiResponse?.data?.map((role) => (
            <div className="card relative flex flex-col gap-5 p-5 lg:p-7.5">
              <div className=" absolute top-5 right-5">
                <button
                  onClick={() => handleDeleteRole(role)}
                  disabled={
                    !!deleteRoleDetails.isLoading && !!deleteRoleDetails.error
                  }
                  style={{ height: "35px" }}
                  className="btn btn-xs d-flex justify-content-center align-items-center fw-bold btn-danger"
                >
                  <i className="ki-filled ki-trash"></i>
                </button>
              </div>
              <div className="flex items-center flex-wrap justify-between gap-1">
                <div className="flex items-center gap-2.5">
                  <div className="relative size-[44px] shrink-0">
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
                        fill=""
                      ></path>
                      <path
                        d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                        stroke=""
                      ></path>
                    </svg>
                    <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                      <i className="ki-filled ki-setting text-1.5xl text-primary"></i>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      className="text-md font-semibold text-gray-900 hover:text-primary-active mb-px"
                      to={`/admins/roles/${role.id}/permissions`}
                    >
                      {role.name}
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" flex flex-wrap gap-2">
                {role.permissions.map((perm) => (
                  <span className=" badge badge-outline badge-info capitalize">
                    {perm.name.split("_").join(" ").toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <Link
            className="card border-2 border-dashed border-brand-clarity bg-center bg-[length:600px] bg-no-repeat add-new-bg"
            to={"/admins/roles/create"}
          >
            <div className="card-body grid items-center">
              <div className="flex flex-col gap-3">
                <div className="flex justify-center pt-5">
                  <div className="relative size-[60px] shrink-0">
                    <svg
                      className="w-full h-full stroke-brand-clarity fill-light"
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
                        fill=""
                      ></path>
                      <path
                        d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                        stroke=""
                      ></path>
                    </svg>
                    <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                      <i className="ki-filled ki-rocket text-2xl text-brand"></i>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col text-center">
                  <span className="text-lg font-semibold text-gray-900 hover:text-primary-active mb-px">
                    Add New Role
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
