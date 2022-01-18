import React from 'react'
import { Oval } from 'react-loader-spinner';
import { useAppSelector } from '../../../store/store';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loader() {
    const isLoading = useAppSelector(state => state.auth.isAuth);
    return (
        <div>
            <Oval
                height={100}
                width={100}
                color='grey'
                arialLabel='loading'
            />
        </div>
    )
}

export default Loader
