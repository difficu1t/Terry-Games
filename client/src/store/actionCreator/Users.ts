import { Dispatch } from "react"
import { UserField, UsersAction, UsersTypes } from "../../types/users"
import { usersbd } from '../../gamesbt'
import { convertToUser } from "../../tools/convertToUser"
import { useTypedSelector } from "../../hooks/useTypedSelector"

export const fetchUsers = () => {
    return (dispath: Dispatch<UsersAction>) => {
        try {
            dispath({type: UsersTypes.FETCH_USERS});
            dispath({type: UsersTypes.FETCH_USERS_SUCCESS, payload: usersbd})
        } catch (e) {
            dispath({type: UsersTypes.FETCH_USERS_ERROR, payload: "Error during loading users."})
        }
    }
}

export const addUser = (name: string, skill: string) => {
    return (dispath: Dispatch<UsersAction>) => {
        try {
            const user = convertToUser(name, skill)
            dispath({type: UsersTypes.ADD_USER, payload: user})
        } catch(e) {
            dispath({type: UsersTypes.ADD_USER_ERROR, payload: "Error during adding user."})
        }
    }
}

export const addOrRemoveWin = (user: UserField) => {
    return (dispath: Dispatch<UsersAction>) => {
        dispath({type: UsersTypes.ADD_WIN_OR_REMOVE, payload: user})
    }
}