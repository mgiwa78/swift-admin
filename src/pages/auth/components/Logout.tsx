/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from "react-redux";
import { removeCredentials } from "../../../redux/slice/authSlice";
import { api } from "../../../redux/services/api";

export function Logout() {
  const dispatch = useDispatch();
  dispatch(removeCredentials());
  dispatch(api.util.resetApiState());
  return <></>;
}
