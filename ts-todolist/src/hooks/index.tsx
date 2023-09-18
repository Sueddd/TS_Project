import type { TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "../consts/store";
import { useSelector, useDispatch } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
