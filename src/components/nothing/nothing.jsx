import React from "react";
import css from './nothing.module.css'

export const Nothing = () => {
    return (
        <div className={css.wrap}><p className={css.info}>We are sorry. There are no films for your request.</p>
        <p className={css.emoji}>(シ. .)シ</p>
        </div>
        
    )
}