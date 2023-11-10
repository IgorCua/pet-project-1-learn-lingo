import { NavLink, Outlet } from "react-router-dom";
import css from "./Header.module.scss";
export const Header = () => {
    return (
        <>
            <header className={css.header}>
                <div className={css.logoContainer}>
                    <div className={css.logo}></div>
                    <p className={css.logoText}>LearnLingo</p>
                </div>
                <div className={css.navigation}>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/teachers'}>Teachers</NavLink>
                    <NavLink to={'/favorites'}>Favorites</NavLink>
                </div>
                <div className={css.authContainer}>
                    <div className={css.auth}>
                        <div className={css.svg}></div>
                        <p>Log in</p>
                    </div>
                    <button type="button">Registration</button>
                </div>
            </header>
            <Outlet/>
        </>
        
    )
}