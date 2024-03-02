import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from './Navigation.module.scss';
import { useEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from "../../redux/auth/selectors"; 
import Icon from "../icon/Icon";

function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
}

export const Navigation = () => {
    const [navOpen, setNavOpen] = useState(window.innerWidth > 767 ? true : false);
    const [windowWidth, setWindowWidth] = useState(null);
    const navRef = useRef(null);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    const handleWindowWidthDebounce = debounce(() => {
        setWindowWidth(window.innerWidth);
    }, 100);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener("resize", handleWindowWidthDebounce);    

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleWindowWidthDebounce);
        }
    }, [navRef, navOpen, windowWidth, handleWindowWidthDebounce])



    const activeLink = (navData) => {
        return clsx(
            css.navLink, 
            navData.isActive && css.active
        )
    }

    const handleClickOutside = (event) => {
        const eventLocalName = event.target.localName;

        if(navRef.current && !navRef.current.contains(event.target)) {
            if(eventLocalName === 'svg' || eventLocalName === 'use') return;
            setNavOpen(false);
        }
    }

    const handleBurgerClick = () => {
        setNavOpen(!navOpen);
    }

    return(
        <div className={css.navigation}>
            {(window.innerWidth > 767 || navOpen) &&
                <nav ref={navRef} className={css.nav} aria-label="primary-navigation">
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
                    {isLoggedIn && <NavLink 
                        to={'/favorites'} 
                        className={activeLink} 
                        onClick={() => setNavOpen(false)}
                    >Favorites</NavLink>}
                </nav>
            }
            <div onClick={handleBurgerClick}>
                <Icon className={css.svgBurgerMenu} name={'#icon-burger-menu'}/>
            </div>
        </div>
    )
}