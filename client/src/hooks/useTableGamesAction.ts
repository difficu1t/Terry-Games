import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as actionCreator from '../store/actionCreator/TableGames'

export const useTableGamesAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreator, dispatch); 
}