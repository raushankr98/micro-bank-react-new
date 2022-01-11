import React from 'react'
import style from "./PopupCart.module.css"

type item = {
    divRef: any,
    hidePopup: () => void,
    handleRating: () => void,
    ratingRef: any,
    handleMove: () => void
}

function PopupCart(props: item) {
    return (
        <div ref={props.divRef} id={style.popup_container}>
            <div className={style.popup_container_inner}>
                <button onClick={props.hidePopup} className={style.popup_crose}>X</button>
                <div>
                    <input id={style.popup_input} type="number" min="1" max="5" placeholder="Enter rating" ref={props.ratingRef} required />
                    <button onClick={props.handleRating} style={{ width: "100px" }} className={style.popup_rating_btn}>Add Rating</button>
                </div>
                <div style={{ marginTop: "15px" }}>
                    <button onClick={props.handleMove} className={style.popup_rating_btn}>Move to Available/Current</button>
                </div>
            </div>
        </div>
    )
}

export default PopupCart
