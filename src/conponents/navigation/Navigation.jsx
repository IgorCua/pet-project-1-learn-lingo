import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from './Navigation.module.scss';
import sprite from "../../assets/icons/icons.svg";
import { useEffect, useRef, useState } from "react";

export const Navigation = () => {
    const [navOpen, setNavOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        
    },[navOpen])

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);

        return () => document.removeEventListener('mousedown', handleClick);
    },[navRef])

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

    const handleClick = (event) => {
        if(navRef.current && !navRef.current.contains(event.target)) {
            setNavOpen(false);
        }
    }

    return(
        <div className={css.navigation}>
            {window.innerWidth < 767 && navOpen &&
                <nav ref={navRef} className={css.nav}>
                    <NavLink 
                        to={'/'} 
                        className={activeLink} 
                        onClick={() => setNavOpen(false)}
                    >Home</NavLink>
                    <NavLink 
                        to={'/teachers'} 
                        className={activeLink} 
                        onClick={() => setNavOpen(false)}
                    >Teachers</NavLink>
                    <NavLink 
                        to={'/favorites'} 
                        className={activeLink} 
                        onClick={() => setNavOpen(false)}
                    >Favorites</NavLink>
                </nav>
            }
            {window.innerWidth >= 768 &&
                <nav className={css.nav}>
                    <NavLink to={'/'} className={activeLink}>Home</NavLink>
                    <NavLink to={'/teachers'} className={activeLink}>Teachers</NavLink>
                    <NavLink to={'/favorites'} className={activeLink}>Favorites</NavLink>
                </nav>
            }
            <svg className={css.svgBurgerMenu} onClick={() => setNavOpen(!navOpen)}>
                <use href={sprite + '#icon-burger-menu'}/>
            </svg>
        </div>
    )
}