import { Navigate, Outlet } from "react-router-dom";
import css from "./Header.module.scss";
import { Navigation } from "../navigation/Navigation";
import { useEffect, useState } from "react";
import { Backdrop } from "../modal/Backdrop";
import { Authenticate } from "../modal/Authenticate";
import { Register } from "../modal/Register";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserID } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import Icon from "../icon/Icon";

export const Header = () => {
    const [isModalAuth, setIsModalAuth] = useState(false);
    const [isModalRegister, setIsModalRegister] = useState(false);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const userID = useSelector(selectUserID);
    const dispatch = useDispatch();
    useEffect(() => {
    }, [isModalAuth, isModalRegister]);

    const handleLogOff = () => {
        dispatch(logOut(userID));
        return <Navigate to={'/'}/>
    }

    return (
        <>
            <header className={css.header}>
                <div className={css.logoContainer}>
                    <Icon className={css.logoSvg} name={'#icon-logo'}/>
                    <h2 className={css.logoText}>LearnLingo</h2>
                </div>

                <Navigation/>

                <div className={css.authContainer}>
                    { !isLoggedIn &&
                        <div className={css.auth} onClick={() => setIsModalAuth(true)}>
                            <Icon className={css.svgLogIn} name={'#icon-log-in'}/>
                            <button className={css.loginBtn}>Log in</button>
                        </div>
                    }
                    { isLoggedIn &&
                        <div className={css.auth} onClick={handleLogOff}>
                            <Icon className={css.svgLogIn} name={'#icon-log-in'}/>
                            <button className={css.logOffBtn}>Log off</button>
                        </div>
                    }
                    
                    <button 
                        type="button" 
                        className={css.registrationBtn} 
                        onClick={() => setIsModalRegister(true)}
                    >Registration</button>
                </div>
                {isModalAuth && 
                    <Backdrop isModalOpen={setIsModalAuth}>
                        <Authenticate isModalOpen={setIsModalAuth}/>
                    </Backdrop>}
                
                {isModalRegister && 
                    <Backdrop isModalOpen={setIsModalRegister}>
                        <Register isModalOpen={setIsModalRegister}/>
                    </Backdrop>}
            </header>
            <Outlet/>
        </>
        
    )
}