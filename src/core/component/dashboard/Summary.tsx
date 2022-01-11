import React from 'react'
import style from "./Dashboard.module.css"


function Summary() {
    return (
        <div id={style.summary}>
            <div className={style.dashboard_container}>
                <div className={style.dashboard_summary_div}>
                    <h2 id={style.summary_head} className={style.dashboard_summary}>Summary</h2>
                    <div id={style.inner_item} className={style.inner_item}>
                        {/* desktop view  */}
                        <div className={style.dashboard_item}>
                            <h3 className={style.accountHeader} >Account Number</h3>
                            <h3 className={style.accountNum} >6215482</h3>
                        </div>
                        <div className={style.dashboard_item}>
                            <h3 className={style.accountHeader} >Income</h3>
                            <h3 className={style.accountNum}>$20,000,00</h3>
                        </div>
                        <div className={style.dashboard_item}>
                            <h3 className={style.accountHeader} >Spends</h3>
                            <h3 className={style.accountNum}>$11,000,00</h3>
                        </div>
                        {/*  mobile view */}
                        <h3 className={style.account_no}>Account No: 67238744</h3>
                        <div id={style.income} className={style.account_no}>Income
                            <div id={style.income_div}>$ 20,000,00</div>
                        </div>
                        <div id={style.spends} className={style.account_no}>Spends <div id={style.spends_div}>$
                            11,000,00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Summary
