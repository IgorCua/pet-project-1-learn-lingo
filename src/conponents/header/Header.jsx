import { Outlet } from "react-router-dom";
import css from "./Header.module.scss";
import { Navigation } from "../navigation/Navigation";
import { useEffect, useState } from "react";
import sprite from '../../assets/icons/icons.svg';
import { Backdrop } from "../modal/Backdrop";
import { Authenticate } from "../modal/Authenticate";
import { Register } from "../modal/Register";

export const Header = () => {
    const [isModalAuth, setIsModalAuth] = useState(false);
    const [isModalRegister, setIsModalRegister] = useState(false);
    // let screenSize = window.innerWidth > 768 ? true : false;
    
    useEffect(() => {
        // if (window.innerWidth >= 768) 
    }, [isModalAuth, isModalRegister]);

    // const handleModal = () => {
    //     setIsModalAuth(false);
    //     setIsModalRegister(false);
    // }

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
                    <div className={css.auth} onClick={() => setIsModalAuth(true)}>
                        <svg className={css.svgLogIn}>
                            <use href={sprite + '#icon-log-in'}/>
                        </svg>
                        <p className={css.loginText}>Log in</p>
                    </div>
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