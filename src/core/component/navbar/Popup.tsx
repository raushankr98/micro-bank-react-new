import React from "react";
import { Link, useHistory } from "react-router-dom";
import { handleLogout } from "../../../features/auth/store/actions";
import { loadData } from "../../../features/auth/store/api";
import { useAppDispatch } from "../../../store/store";
import style from "./Navbar.module.css";

function Popup({ setShow, show }: any) {
  const fullName = loadData("name").split(" ");
  const fName = loadData("name");
  const email = loadData("email");
  const dispatch = useAppDispatch();
  const history = useHistory();
  const logout = () => {
    handleLogout(dispatch);
    history.push("/");
  };

  return (
    <div className={style.main_popupcard}>
      <div className={style.popupcard}>
        <div className={style.profile_img}>
          <h1>
            {fullName[0][0]}
            {fullName[1][0]}
          </h1>
        </div>
        <h1 className={style.fullname}>{fName}</h1>
        <p className={style.email}>{email}</p>
        <div className={style.linepopup}></div>
        <Link
          style={{ textDecoration: "none" }}
          onClick={() => setShow(!show)}
          to={"/editProfile"}
        >
          <p className={style.option}>Edit Profile</p>
        </Link>
        <div className={style.linepopup2}></div>
        <p className={style.option}>Settings</p>
        <div className={style.linepopup2}></div>
        <p onClick={logout} className={style.option}>
          Logout
        </p>
      </div>
    </div>
  );
}

export default Popup;
