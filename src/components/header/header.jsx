import React from "react";
import css from './header.module.css'
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
            <header className={css.header}>
            <nav className={css.nav}>
                <NavLink className={({ isActive }) => 
                            isActive ? `${css.listItems} ${css.activeLink}` : css.listItems} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => 
                            isActive ? `${css.listItems} ${css.activeLink}` : css.listItems} to="/movies">Movie</NavLink>
            </nav>
            </header>
    )
}