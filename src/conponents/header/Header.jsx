import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.scss";
import { Navigation } from "../navigation/Navigation";
export const Header = () => {

    const test = () => {
        console.log(window.innerWidth)
        
    }

    // const activeLink = (navData) => {
    //     // return clsx({
    //     //     [css.navLink]: true,
    //     //     [css.active]: navData.isActive ? true : false
    //     // });
    //     return clsx(
    //         css.navLink, 
    //         navData.isActive && css.active
    //     )
    // }

    return (
        <>
            <header className={css.header}>
                <div className={css.logoContainer}>
                    <div className={css.logo}></div>
                    <p className={css.logoText}>LearnLingo</p>
                </div>
                {
                    window.innerWidth < 768 ? 
                    <div>
                        <div className={css.svgBurgerMenu}></div> 
                        <div>
                            <Navigation/>
                        </div>
                    </div>
                    : <Navigation/>
                }
                
                <div className={css.authContainer}>
                    <div className={css.auth}>
                        <div className={css.svgLogIn}></div>
                        <p className={css.loginText}>Log in</p>
                    </div>
                    <button type="button" className={css.registrationBtn}>Registration</button>
                </div>
            </header>
            <Outlet/>
        </>
        
    )
}