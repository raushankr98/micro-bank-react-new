import { handleLogin, saveData } from './api'

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const LOGOUT_USER = "LOGOUT_USER";

export default interface ISignIn {
    email: string;
    password: string;
    dispatch?: any
}

const registerUserRequest = () => {
    return {
        type: REGISTER_USER_REQUEST
    }
}

const registerUserSuccess = (payload: string) => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload
    }
}

const registerUseFailure = (err: string) => {
    return {
        type: REGISTER_USER_FAILURE,
        payload: err
    }
}

const loginUserRequest = () => {
    return {
        type: LOGIN_USER_REQUEST
    }
}

const loginUserSuccess = (payload: string) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload
    }
}

const loginUseFailure = (err: any) => {
    return {
        type: LOGIN_USER_FAILURE,
        payload: err
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}

export const registerUser = () => (dispatch: any) => {

}

export const loginUser = async (data: ISignIn) => {
    const { email, password, dispatch } = data;
    dispatch(loginUserRequest())

    try {
        setTimeout(async () => {
            const { data } = await handleLogin(email)
            const pass: any = data[0]
            if (pass.password === password) {
                localStorage.setItem("profileId", pass.id);
                saveData("name", pass.fullName);
                saveData("email", pass.email);
                dispatch(loginUserSuccess("true"));
            } else {
                alert("Something went wrong")
            }
        }, 500);
    } catch (e) {
        alert("Something went wrong")
        dispatch(loginUseFailure(e))
        console.log(e)
    }
}

export const handleLogout = (dispatch: any) => {
    localStorage.removeItem("profileId")
    localStorage.removeItem("isAuth")
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    dispatch(logoutUser())
}