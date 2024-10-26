import React, { useState } from "react";
import * as Yup from "yup";
import ReusableForm from "../../../components/form/ReusableForm";
import { Link, useParams } from "react-router-dom";
import {
  useGetRoleQuery,
  useGetRolesQuery,
  useUpdateRoleMutation,
} from "../../../redux/services/role";
import { useGetPermissionsQuery } from "../../../redux/services/permission";
import LoadingSplash from "../../../components/common/loading-splash";
import { toast } from "react-toastify";

export function AllPermissions() {
  const { id } = useParams();
  const { data: permissionsApiResponse, ...permissionsApiResponseDetails } =
    useGetPermissionsQuery({});
  const { data: roleApiResponse, ...roleApiResponseDetails } = useGetRoleQuery(
    id || ""
  );
  const [updateRole, { ...updateRoleApiDetails }] = useUpdateRoleMutation();

  const [rolePermisions, setRolePermissions] = useState<any>(
    roleApiResponse?.permissions
      ? [...roleApiResponse?.permissions?.map((p) => p.id)]
      : []
  );
  if (
    roleApiResponseDetails.isLoading ||
    permissionsApiResponseDetails.isLoading
  ) {
    return <LoadingSplash />;
  }

  const handleRoleUpdate = async () => {
    const res = await updateRole({
      id: id || "",
      data: { permissions: rolePermisions },
    });
    toast("Role updated");
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
            <Link className="btn btn-sm btn-light" to={"/admins/roles"}>
              All Roles
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fixed">
        <div className="card">
          <form>
            <div className="card-header">
              <h3 className="card-title">
                <a className="link" href="#">
                  {roleApiResponse?.name}
                </a>{" "}
                Permissions
              </h3>
            </div>
            <div className="card-table scrollable-x-auto">
              <table className="table text-gray-700 font-medium text-sm">
                <thead>
                  <tr>
                    <th className="text-left min-w-[300px]">Module</th>
                    <th className="min-w-24 text-center">View</th>
                  </tr>
                </thead>

                <tbody className="text-gray-900 font-semibold">
                  {permissionsApiResponse?.data?.map((perm) => (
                    <tr key={perm.id}>
                      <td className="!py-5.5 capitalize">
                        {perm.name.split("_").join(" ").toLowerCase()}
                      </td>
                      <td className="!py-5.5 text-center">
                        <input
                          defaultChecked={
                            !!roleApiResponse?.permissions?.find(
                              (i) => i.name === perm.name
                            )
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              rolePermisions.includes(perm.id)
                                ? null
                                : setRolePermissions([
                                    ...rolePermisions,
                                    perm.id,
                                  ]);
                            } else {
                              setRolePermissions([
                                ...rolePermisions.filter(
                                  (p: any) => p !== perm.id
                                ),
                              ]);
                            }
                          }}
                          className="checkbox checkbox-sm"
                          name={perm.name}
                          type="checkbox"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer justify-end py-7.5 gap-2.5">
              <a className="btn btn-light btn-outline" href="#">
                Restore Defaults
              </a>
              <button
                onClick={() => handleRoleUpdate()}
                className="btn btn-primary"
                type="button"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
