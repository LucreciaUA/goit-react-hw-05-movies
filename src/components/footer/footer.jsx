import React from "react";
import css from './footer.module.css'

export const Footer = () => {
    return (
        <footer className={css.footer}>
            <p >This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.</p>
        </footer>
    )
}