import React, { FormEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Login.module.css'
import { AuthContext } from '../auth/AuthContextProvider'

function Login() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { handleAuth } = useContext(AuthContext)

    const handleLogin = (e: FormEvent) => {
        e.preventDefault()
        handleAuth(email, password)
    }

    return (
        <div className={style.main_container}>
            <div className={style.container_img_div}>
            </div>

            {/*  login form  */}

            <div className={style.form_div}>
                <div className={style.inner_form_div}>
                    <h3 id={style.login_name}>Login</h3>
                    <h4 style={{ color: "#828282", width: "100%" }}>Please login to your account</h4>
                    <form onSubmit={handleLogin} id={style.loginSubmit}>
                        <label className={style.label} >Email or Phone</label><br />
                        <input type="text" id={style.email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />
                        <label className={style.label} >Password</label><br />
                        <input type="password" id={style.password} onChange={(e) => setPassword(e.target.value)} required />
                        <span className={style.hide} id={style.hide} style={{ margin: "-40px" }}><svg width="22" height="19"
                            viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 4C13.76 4 16 6.24 16 9C16 9.65 15.87 10.26 15.64 10.83L18.56 13.75C20.07 12.49 21.26 10.86 21.99 9C20.26 4.61 15.99 1.5 10.99 1.5C9.59 1.5 8.25 1.75 7.01 2.2L9.17 4.36C9.74 4.13 10.35 4 11 4ZM1 1.27L3.28 3.55L3.74 4.01C2.08 5.3 0.78 7.02 0 9C1.73 13.39 6 16.5 11 16.5C12.55 16.5 14.03 16.2 15.38 15.66L15.8 16.08L18.73 19L20 17.73L2.27 0L1 1.27ZM6.53 6.8L8.08 8.35C8.03 8.56 8 8.78 8 9C8 10.66 9.34 12 11 12C11.22 12 11.44 11.97 11.65 11.92L13.2 13.47C12.53 13.8 11.79 14 11 14C8.24 14 6 11.76 6 9C6 8.21 6.2 7.47 6.53 6.8ZM10.84 6.02L13.99 9.17L14.01 9.01C14.01 7.35 12.67 6.01 11.01 6.01L10.84 6.02Z"
                                fill="black" />
                        </svg>
                        </span>
                        <br />
                        <Link id={style.a_forgot_password} to="/">Forgot Password</Link>
                        <input className={style.submit_btn} type="submit" value="Login" />
                    </form>
                    <p style={{ marginTop: "25px", marginLeft: "10px" }}>Don't have an account? <Link id={style.a_create_account}
                        to="/register">Create an Account</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login
