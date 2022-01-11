import React, { useRef } from 'react'
import style from "./Card.module.css"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
type item = {
    mIcon: string,
    dIcon: string,
    rating: number,
    header: string,
    hanldeRef: (header: string) => void
}

function Card(props: item) {
    const hideRef = useRef<HTMLDivElement>(null)

    const handleRating = () => {
        hideRef.current!.style.display = "block"
    }
    const handleRatingHide = () => {
        hideRef.current!.style.display = "none"
    }

    return (
        <div onClick={() => (props.hanldeRef(props.header))} onMouseOver={handleRating} onMouseLeave={handleRatingHide} className={style.dashboard_current_item} draggable="true">
            {/* <!-- desktop icon --> */}
            <img className={style.desktop_icon} src={props.dIcon} alt="Logo" />
            {/* <!-- mobile icon --> */}
            <img className={style.mobile_icon} src={props.mIcon} alt="Logo" />
            {/* <!-- heading --> */}
            <h3 className={style.title}>{props.header}</h3>
            {/* <!-- rating --> */}
            <div ref={hideRef} id={style.rating}>
                {[1, 2, 3, 4, 5].map((el: number) => {
                    if (el <= props.rating) {
                        return (<AiFillStar className={style.star} key={el} />)
                    } else {
                        return (<AiOutlineStar key={el} />)
                    }
                })}
            </div>
        </div>
    )
}

export default Card
