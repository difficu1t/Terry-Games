import { stat } from "fs";
import { UsersState, UsersTypes, UsersAction } from "../../types/users"

const defaultState: UsersState = {
    users: [{name: "", numOfWins: 0, skill: "undefined"}],
    loading: false,
    error: null
}

export const usersReducer = (state = defaultState, action: UsersAction) => {
    switch(action.type){
        case UsersTypes.FETCH_USERS:
            return {loading: true, error: null, users: []};
        case UsersTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload};
        case UsersTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []};

        case UsersTypes.ADD_USER:
            return {loading: false, error: null, users: [...state.users, action.payload]}
        case UsersTypes.ADD_USER_ERROR:
            return {loading: false, error: action.payload, users: state.users};

        case UsersTypes.ADD_WIN_OR_REMOVE: 
            const currentuser = state.users.find(user => user.name === action.payload.currentuser);
            if(currentuser){
                if(action.payload.add){
                    currentuser.numOfWins++;
                    state.users.map(user => {
                        if(user.name === currentuser.name)
                            return currentuser;
                        return user;
                    })
                    return {loading: false, error: null, users: state.users}
                } else {
                    currentuser.numOfWins--;
                    state.users.map(user => {
                        if(user.name === currentuser.name)
                            return currentuser;
                        return user;
                    })
                    return {loading: false, error: null, users: state.users}
                }
            }
            return {loading: false, error: null, users: state.users}

        default:
            return state;
    }
}