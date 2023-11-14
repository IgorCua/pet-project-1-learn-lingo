import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from './Navigation.module.scss';

export const Navigation = () => {
    const activeLink = (navData) => {
        // return clsx({
        //     [css.navLink]: true,
        //     [css.active]: navData.isActive ? true : false
        // });
        return clsx(
            css.navLink, 
            navData.isActive && css.active
        )
    }

    return(
        <div className={css.navigation}>
            <nav className={css.nav}>
                <NavLink to={'/'} className={activeLink}>Home</NavLink>
                <NavLink to={'/teachers'} className={activeLink}>Teachers</NavLink>
                <NavLink to={'/favorites'} className={activeLink}>Favorites</NavLink>
            </nav>
        </div>
    )
}