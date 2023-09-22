import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from '../store/actionCreator/Users';

export const useUsersAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreator, dispatch); 
}