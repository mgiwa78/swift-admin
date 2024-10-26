import { useSelector } from "react-redux";
import ResetPassword from "./reset-password";
import UpdateProfile from "./update-profile";

export function EditProfile() {
  return (
    <>
      <div className="container-fixed">
        <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-xl font-semibold leading-none text-gray-900">
              Settings - Profile
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fixed">
        <div className="grid">
          <UpdateProfile />
          <ResetPassword />
        </div>
      </div>
    </>
  );
}
