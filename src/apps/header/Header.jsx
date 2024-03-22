import { Outlet, useNavigate } from "react-router-dom";
import css from "./Header.module.scss";
import { Navigation } from "../../conponents/navigation/Navigation";
import { useEffect } from "react";
import { Backdrop } from "../../conponents/modal/Backdrop";
import { LogIn } from "../../conponents/modal/LogIn";
import { Register } from "../../conponents/modal/Register";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserID } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import Icon from "../../conponents/icon/Icon";
import { selectModalLogIn, selectModalRegistration } from "../../redux/modals/selectors";
import { modalLogIn, modalRegister } from "../../redux/modals/operations";

export const Header = () => {
    const isModalAuth = useSelector(selectModalLogIn)
    const isModalRegister = useSelector(selectModalRegistration)
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const userID = useSelector(selectUserID);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
    }, [isModalAuth, isModalRegister]);
    
    const handleLogOff = () => {
        dispatch(logOut(userID));
        navigate('/', {replace: true});
    }

    const handleModalLogIn = () => {
        dispatch(modalLogIn(!isModalAuth));
    }

    const handleModalRegister = () => {
        dispatch(modalRegister(!isModalRegister));
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
                        <div className={css.auth} onClick={() => dispatch(modalLogIn(!isModalAuth))}>
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
                        onClick={() => dispatch(modalRegister(!isModalRegister))}
                    >Registration</button>
                </div>
                {isModalAuth && 
                    <Backdrop handleModal={handleModalLogIn}>
                        <LogIn/>
                    </Backdrop>}
                
                {isModalRegister && 
                    <Backdrop handleModal={handleModalRegister}>
                        <Register/>
                    </Backdrop>}
            </header>
            <Outlet/>
        </>
    )
}