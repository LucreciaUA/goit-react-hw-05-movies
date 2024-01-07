import { getSelected } from "API/selected";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import css from './detail.module.css'
import { Loader } from "components/spinner/loader";

export const SelectedMovie = (id) => {
    const {movieId} = useParams()
    const [movieData, setMovieData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
  const buttonBack = location.state?.from ?? '/';

     useEffect(() => {
        const getDetail = async () => {
            try {
                setIsLoading(true)
                const res = await getSelected(movieId); 
                setMovieData(res);
                console.log(res);
                setIsLoading(false)
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        if (movieId) {
            getDetail();
        }
    }, [movieId]); 
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
    return (
        <>
            <>
                <button onClick={() => navigate(buttonBack)}>Go Back</button>
                {isLoading?<Loader/>:
                (<>
                    <div className={css.wrap}>
                <img className={css.poster} src={`${imageBaseUrl}${movieData.poster_path}`} alt={movieData.title} />
                    <div className={css.info}><h2>{movieData.title}</h2>
                        <p>User score: {movieData.popularity}</p>
                        <h3>Overview</h3>
                        <p>{movieData.overview}</p>
                        <h3>Genres:</h3>
                        <p>{movieData.genres && <p className={css.text}>{movieData.genres.map(({ name }) => name).join(', ')}</p>}</p>
                    </div>
            </div>
            <div className={css.linksBlock}>
                <NavLink className={({ isActive }) => 
                            isActive ? `${css.listItems} ${css.activeLink}` : css.listItems} to='cast'>Cast</NavLink>
                <NavLink className={({ isActive }) => 
                            isActive ? `${css.listItems} ${css.activeLink}` : css.listItems} to='reviews'>Reviews</NavLink>
                </div>
                </>)}
                </>
            <Outlet/>
        </>
    )
    
}