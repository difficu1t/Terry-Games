import { actions } from "@/store/slices/boardGamesSlice";
import { bindActionCreators } from "@reduxjs/toolkit"; 
import { useDispatch } from "react-redux"

export const useBoardGamesActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}