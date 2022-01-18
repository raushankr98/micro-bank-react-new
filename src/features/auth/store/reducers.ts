import { loadData, saveData } from './api';
import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT_USER } from './actions';

const isAuth = loadData("isAuth") || false ;

interface IState {
    isLoading: boolean;
    isError: boolean;
    isAuth: boolean;
    err: any;
}

const initState: IState = {
    isLoading: false,
    isError: false,
    isAuth:  isAuth,
    err: ''
}

const authReducer = (state: IState | any= initState, action: any) => {
    const payload = action?.payload;

    switch(action?.type){
        case LOGIN_USER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false,
                err: ''
            }
        }

        case LOGIN_USER_SUCCESS: {
            saveData("isAuth", true);
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                err: ''
            }
        }

        case LOGIN_USER_FAILURE: {
            return {
                ...state,
                isError: true,
                isLoading: false,
                isAuth: false,
                err: payload
            }
        }

        case LOGOUT_USER: {
            saveData("isAuth", false);
            return {
                ...state,
                isError: false,
                isLoading: false,
                isAuth: false,
                err: ""
            }
        }

        default: 
            return state;
    }
}

export default authReducer;