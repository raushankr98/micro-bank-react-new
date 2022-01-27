import React from 'react'
import style from "./editProfile.module.css"
function EditProfile() {
    return (
        <div className={style.main_container}>
            <h1 className={style.dashboard}>Edit Profile</h1>
            <div className={style.edit_profile_div}>
                <div className={style.image_div}>
                    <div className={style.showimage}>
                        <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37 33.7778V4.22222C37 1.9 35.15 0 32.8889 0H4.11111C1.85 0 0 1.9 0 4.22222V33.7778C0 36.1 1.85 38 4.11111 38H32.8889C35.15 38 37 36.1 37 33.7778ZM11.3056 22.1667L16.4444 28.5211L23.6389 19L32.8889 31.6667H4.11111L11.3056 22.1667Z" fill="#D90429" />
                        </svg>
                    </div>
                    <button className={style.btn_image}>Browse Image</button>
                </div>
                <div style={{ marginTop: '24px' }}>
                    <label className="label" >Company Name</label><br />
                    <input type="text" id="fullName" required /><br /><br />

                    <label className="label" >Email Address</label><br />
                    <input type="email" id="email" required /><br /><br />

                    <label className="label" >Old Password</label><br />
                    <input type="password" id="password" minLength={8} required /><br /><br />

                    <label className="label" >New Password</label><br />
                    <input type="password" id="password" minLength={8} required /><br /><br />

                    <label className="label" >Confirm Password</label><br />
                    <input type="password" id="password" minLength={8} required /><br /><br />
                </div>
                <input className="submit_btn" type="submit" value="Update" />
            </div>
        </div>
    )
}

export default EditProfile
