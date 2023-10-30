import { actions } from "@/store/slices/usersSlice";
import { bindActionCreators } from "@reduxjs/toolkit"; 
import { useDispatch } from "react-redux"

export const useUsersActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}