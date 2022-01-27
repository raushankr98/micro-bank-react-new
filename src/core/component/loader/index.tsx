import React from 'react'
import { Rings } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import style from './Loader.module.css'

function Loader() {
    return (
        <div className={style.loader}>
            <Rings
                height={115}
                width={115}
                color='grey'
                arialLabel='loading'
            />
            <h2 className={style.h2}>Loading....</h2>
        </div>
    )
}

export default Loader
