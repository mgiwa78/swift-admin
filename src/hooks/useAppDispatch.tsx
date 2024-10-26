import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
