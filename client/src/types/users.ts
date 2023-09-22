export enum UsersTypes{
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",

    ADD_USER = "ADD_USER",
    ADD_USER_ERROR = "ADD_USER_ERROR",

    ADD_WIN_OR_REMOVE = "ADD_WIN_OR_REMOVE",
}

export interface IUsers {
    name: string;
    numOfWins: number;
    skill: string;
}

export interface UsersState {
    users: IUsers[];
    loading: boolean;
    error: null | string;
}

interface FetchUsersAction {
    type: UsersTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: UsersTypes.FETCH_USERS_SUCCESS;
    payload: IUsers [];
}

interface FetchUsersErrorAction {
    type: UsersTypes.FETCH_USERS_ERROR;
    payload: string;
}

interface AddUserAction {
    type: UsersTypes.ADD_USER;
    payload: IUsers;
}

interface AddUserErrorAction {
    type: UsersTypes.ADD_USER_ERROR;
    payload: string;
}

interface AddOrRemoveWinAction {
    type: UsersTypes.ADD_WIN_OR_REMOVE;
    payload: UserField;
}


export type UsersAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction | AddUserAction | AddUserErrorAction
| AddOrRemoveWinAction;

export interface UserField {
    currentuser: string;
    add: boolean;
} 