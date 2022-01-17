import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/store/reducers';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import authReducer from './Auth/authReducer';

const store = configureStore({
    reducer: {
        auth: authReducer
    },
    devTools: (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;