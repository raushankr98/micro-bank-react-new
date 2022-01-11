import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { axiosInstance } from '../../core/network';

const AuthContext = createContext<{
    isAuth: boolean;
    handleAuth: (email: string, password: string) => void;
    handleLogout: () => void
}>({
    isAuth: false,
    handleAuth: (email, password) => { },
    handleLogout: () => { }
});

const AuthContextProvider: React.FC = (props) => {
    const [isAuth, setAuth] = useState<boolean>(false)
    const history = useHistory()

    const handleAuth = async (email: string, password: string) => {
        if (email.trim().length > 0 && password.trim().length > 0) {
            try {
                const { data } = await axiosInstance.get(`registerAccount?email=${email}`)
                const pass: any = data[0]
                if (pass.password === password) {
                    alert("Login Successful")
                    localStorage.setItem("profileId", pass.id)
                    setAuth(true)
                    history.push("/dashboard")
                }

            } catch (e) {
                alert("Something went wrong")
                console.log(e)
            }
        } else {
            alert("input field is empty")
        }
    }
    const handleLogout = () => {
        setAuth(false)
        alert("Logout Successful")
        localStorage.removeItem("profileId")
        history.push("/")
    }
    const value = { isAuth, handleAuth, handleLogout }
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext }