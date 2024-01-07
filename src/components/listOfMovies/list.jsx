import { Link } from "react-router-dom";
import css from './list.module.css';
import React from "react";
import { Nothing } from "components/nothing/nothing.jsx";

export const ListOfMovies = ({movies}) => {

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <>
            {movies.length===0 ? (<Nothing/>) : 
    (<ul>
        {movies.map(el => (
            <li key={el.id} >
                <Link to={`/movies/${el.id}`} >
                    <div className={css.filmCard}> 
                        <img className={css.poster} src={`${imageBaseUrl}${el.poster_path}`} alt={el.title} />
                        <h2>{el.title}</h2>
                    </div>
                </Link>
            </li>
        ))}
    </ul>)
}
        </>
         
    )
}