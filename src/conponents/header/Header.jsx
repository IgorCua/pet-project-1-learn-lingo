import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.scss";
import { Navigation } from "../navigation/Navigation";
import { useEffect } from "react";
import sprite from '../../assets/icons/icons.svg';
export const Header = () => {
    // let screenSize = window.innerWidth > 768 ? true : false;
    const test = () => {
        console.log(window.innerWidth)
        
    }

  
    

    
    // useEffect(() => {

    // }, [screenSize]);

    return (
        <>
            <header className={css.header}>
                <div className={css.logoContainer}>
                    <div className={css.logo}>
                        <svg className={css.logoSvg}>
                            <use href={sprite + '#icon-logo'}/>
                        </svg>
                    </div>
                    <p className={css.logoText}>LearnLingo</p>
                </div>

                <div>
                    <svg className={css.svgBurgerMenu}>
                        <use href={sprite + '#icon-burger-menu'}/>
                    </svg>
                    <Navigation/>
                </div>
                
                <div className={css.authContainer}>
                    <div className={css.auth}>
                        <svg className={css.svgLogIn}>
                            <use href={sprite + '#icon-log-in'}/>
                        </svg>
                        <p className={css.loginText}>Log in</p>
                    </div>
                    <button type="button" className={css.registrationBtn}>Registration</button>
                </div>
            </header>
            <Outlet/>
        </>
        
    )
}