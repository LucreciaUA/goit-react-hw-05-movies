import React from "react";
import css from './starting-page.module.css'

export const Starting = () => {
    return (
        <div className={css.wrap}><p className={css.info}>Search films</p>
        <p className={css.emoji}></p>
        </div>
        
    )
}