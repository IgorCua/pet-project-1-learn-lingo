import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from './Navigation.module.scss';
import sprite from "../../assets/icons/icons.svg";
import { useEffect, useRef, useState } from "react";
// import _ from 'lodash/core';

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
    
    const handleWindowWidthDebounce = debounce(() => {
        // console.log('debounce')
        setWindowWidth(window.innerWidth);
    }, 100);

    // const test = () => {
    //     console.log(window.innerWidth);
    //     setWindowWidth(window.innerWidth);
    // }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener("resize", handleWindowWidthDebounce);    

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleWindowWidthDebounce);
        }
    }, [navRef, navOpen, windowWidth, handleWindowWidthDebounce])



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
                    <NavLink 
                        to={'/favorites'} 
                        className={activeLink} 
                        onClick={() => setNavOpen(false)}
                    >Favorites</NavLink>
                </nav>
            }
            {/* {window.innerWidth >= 768 &&
                <nav className={css.nav}>
                    <NavLink to={'/'} className={activeLink}>Home</NavLink>
                    <NavLink to={'/teachers'} className={activeLink}>Teachers</NavLink>
                    <NavLink to={'/favorites'} className={activeLink}>Favorites</NavLink>
                </nav>
            } */}
            <svg className={css.svgBurgerMenu} onClick={handleBurgerClick}>
                <use href={sprite + '#icon-burger-menu'}/>
            </svg>
        </div>
    )
}