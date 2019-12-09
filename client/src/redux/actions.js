import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER
} from './action-types'
import {
    reqLogin,
    reqSignup,
    reqUser,
} from '../api'

const errorMsg = (msg) => ({ type: ERROR_MSG, data: msg })
const authSuccess = (user) => ({ type: AUTH_SUCCESS, data: user })
const receiveUser = (user) => ({ type: RECEIVE_USER, data:user })
const resetUser = (msg) => ({type: RESET_USER, data: msg})

export const signup = (user) => {
    const {username, password, password2, email} = user
    if (!username || !password) {
        return errorMsg('have to enter username and password')
    }
    if (!email) {
        return errorMsg('have to enter email address')
    }
    if (password !== password2) {
        return errorMsg('not the same password typed')
    }
    return async dispatch => {
        const response = await reqSignup({ username, password, email })
        const result = response.data
        if (result.code === 0) { //successfully request send
            dispatch(authSuccess(result.data))
        } else {
            dispatch(errorMsg(result.msg))
        }
    }
}

export const login = (user) => {
    const {username, password} = user
    if (!username || !password) {
        return errorMsg('have to enter username and password')
    }
    return async dispatch => {
        const response = await reqLogin({ username, password })
        const result = response.data
        if (result.code === 0) { //successfully request send
            dispatch(authSuccess(result.data))
        } else {
            dispatch(errorMsg(result.msg))
        }
    }
}

export const getUser = () => {
    return async dispatch => {
        const response = await reqUser()
        const result = response.data
        if (result.code === 0) {
            dispatch(receiveUser(result.data))
        } else {
            dispatch(resetUser(result.msg))
        }
    }
}

export const upload = () => {
    
}

