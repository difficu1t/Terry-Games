import { actions } from "@/store/slices/currentUserSlice";
import { bindActionCreators } from "@reduxjs/toolkit"; 
import { useDispatch } from "react-redux"

export const useCurrentUserActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}