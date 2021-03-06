import React, { useEffect, useRef, useState } from 'react'
import style from "./Dashboard.module.css"
import Summary from '../summary/Summary'
import Card from '../../components/card/Card'
import PopupCart from '../../components/popupCard/PopupCart'
import { axiosInstance } from '../../../../core/network'
import { useHistory } from 'react-router-dom';
import { useAppSelector } from '../../../../store/store'
import Details from '../details'


type Current = {
    mIcon: string,
    dIcon: string,
    rating: number,
    header: string
}

function Dashboard() {
    const [currentData, setCurrentData] = useState<Current[]>();
    const [availableData, setAvailableData] = useState<Current[]>();
    const [header, setHeader] = useState<string>('');
    const [show, setShow] = useState<boolean>(true);
    const divRef = useRef<HTMLDivElement>(null);
    const ratingRef = useRef<HTMLInputElement>(null);
    const history = useHistory();
    const isAuth = useAppSelector(state => state.auth.isAuth);


    useEffect(() => {
        if (isAuth) {
            getData()
        } else {
            history.push("/")
        }
    }, [history, isAuth])

    const getData = async () => {
        const id = localStorage.getItem("profileId")
        const { data }: any = await axiosInstance.get(`/registerAccount?id=${id}`);
        setCurrentData(data[0].currentServices)
        setAvailableData(data[0].availableServices)
    }
    const hanldeRef = (header: string): void => {
        divRef.current!.style.display = "block"
        setHeader(header)
    }

    const hidePopup = (): void => {
        divRef.current!.style.display = "none"
    }

    //updating Rating of cart
    const handleRating = async () => {
        const rating = Number(ratingRef.current?.value)
        if (rating > 0 && rating < 6) {
            const id = localStorage.getItem("profileId")
            const { data }: any = await axiosInstance.get(`/registerAccount?id=${id}`);
            data[0].currentServices.forEach((element: any) => {
                if (element.header === header) {
                    element.rating = rating
                }
            });
            data[0].availableServices.forEach((element: any) => {
                if (element.header === header) {
                    element.rating = rating
                }
            });
            await axiosInstance.patch(`/registerAccount/${id}`, data[0]);
            alert("Rating Updated")
            getData()
            divRef.current!.style.display = "none"
        } else {
            alert("Please Enter Rating From 1 to 5")
        }
    }

    const handleMove = async () => {
        let flag = true
        const id = localStorage.getItem("profileId")
        const { data }: any = await axiosInstance.get(`/registerAccount?id=${id}`);
        // move to Available services
        data[0].currentServices.forEach((element: any) => {
            if (element.header === header) {
                data[0].availableServices.push(element)
                flag = false
            }
        });
        const filter = data[0].currentServices.filter((element: any) => {
            if (header !== element.header) {
                return element
            }
            return null
        })
        data[0].currentServices = filter
        // move to Current services
        if (flag) {
            data[0].availableServices.forEach((element: any) => {
                if (element.header === header) {
                    data[0].currentServices.push(element)
                }
            });
            const filter2 = data[0].availableServices.filter((element: any) => {
                if (header !== element.header) {
                    return element
                }
                return null
            })
            data[0].availableServices = filter2
        }

        await axiosInstance.patch(`/registerAccount/${id}`, data[0]);
        alert("Move To Current/Available Services Completed")
        getData()
        divRef.current!.style.display = "none"
    }

    return (
        <>
            <PopupCart divRef={divRef} hidePopup={hidePopup} handleRating={handleRating} ratingRef={ratingRef} handleMove={handleMove} />
            <div className={style.main_container}>
                {/* dashboard heading */}
                <h2 id={style.dashboard} className={style.dashboard}>Dashboard</h2>
                {/* summary and details button */}
                <div className={style.dashboard_container}>
                    <div className={style.dashboard_div}>
                        <button id={style.summary_btn} onClick={() => setShow(true)} style={show ? { borderTop: '3px solid #D90429', padding: "16px 24px" } : {}} className={style.dashboard_btn}>Summary</button>
                        <button onClick={() => setShow(false)} style={show ? {} : { borderTop: '3px solid #D90429', padding: "16px 24px" }} className={style.dashboard_btn}>Details</button>
                    </div>
                </div>
                {show ? <>
                    {/* summary of account like account no and account balance */}
                    <Summary />
                    {/* micro bank summary heading  */}
                    <h2 id={style.services_heading}>Services <br id={style.br} />
                        <span id={style.services_heading_inner}>Micro bank services
                            for you</span>
                    </h2>

                    {/* current services */}
                    <div id={style.current_services} className={style.dashboard_container}>
                        <div id={style.current_services_outer} className={style.dashboard_current_service_div}>
                            <h2 id={style.current_head} className={style.dashboard_summary}>Current Services</h2>
                            <div id={style.current_services_inner} className={style.inner_item}>
                                {currentData ? currentData.map(({ mIcon, dIcon, header, rating }) => (<Card key={header} mIcon={mIcon} dIcon={dIcon} rating={rating} header={header} hanldeRef={hanldeRef} showRating={true} />)) : null}
                            </div>
                        </div>
                    </div>

                    {/* available services */}
                    <div id={style.available_services} className={style.dashboard_container}>
                        <div id={style.available_services_outer} className={style.dashboard_current_service_div}>
                            <h2 id={style.available_head} className={style.dashboard_summary}>Available Services</h2>
                            <div id={style.available_services_inner} className={style.inner_item}>
                                {availableData ? availableData.map(({ mIcon, dIcon, header, rating }) => (<Card key={header} mIcon={mIcon} dIcon={dIcon} rating={rating} header={header} hanldeRef={hanldeRef} />)) : null}
                            </div>
                        </div>
                    </div>
                </> :
                    <Details />
                }
            </div>
        </>
    )
}

export default Dashboard
