import { Outlet } from "react-router-dom";
import css from "./Header.module.scss";
import { Navigation } from "../navigation/Navigation";
import { useEffect, useState } from "react";
import sprite from '../../assets/icons/icons.svg';
import { Backdrop } from "../modal/Backdrop";
import { Authenticate } from "../modal/Authenticate";
import { Register } from "../modal/Register";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserID } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

export const Header = () => {
    const [isModalAuth, setIsModalAuth] = useState(false);
    const [isModalRegister, setIsModalRegister] = useState(false);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const userID = useSelector(selectUserID);
    const dispatch = useDispatch();
    // let screenSize = window.innerWidth > 768 ? true : false;
    // console.log("userID", userID)
    useEffect(() => {
        // if (window.innerWidth >= 768) 
    }, [isModalAuth, isModalRegister]);

    // const handleModal = () => {
    //     setIsModalAuth(false);
    //     setIsModalRegister(false);
    // }
    const handleLogOff = () => {
        dispatch(logOut(userID))
    }

    return (
        <>
            <header className={css.header}>
                <div className={css.logoContainer}>
                    <svg className={css.logoSvg}>
                        <use href={sprite + '#icon-logo'}/>
                    </svg>
                    <h2 className={css.logoText}>LearnLingo</h2>
                </div>

                <Navigation/>

                <div className={css.authContainer}>
                    { !isLoggedIn &&
                        <div className={css.auth} onClick={() => setIsModalAuth(true)}>
                            <svg className={css.svgLogIn}>
                                <use href={sprite + '#icon-log-in'}/>
                            </svg>
                            <p className={css.loginText}>Log in</p>
                        </div>
                    }
                    { isLoggedIn &&
                        <div className={css.auth} onClick={handleLogOff}>
                            <svg className={css.svgLogIn}>
                                <use href={sprite + '#icon-log-in'}/>
                            </svg>
                            <p className={css.loginText}>Log off</p>
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