import { getCast } from "API/cast.js"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import css from './cast.module.css'
import { Loader } from "components/spinner/loader.jsx";

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {

        const getMovieCast = async () => {
            
            try {
                setIsLoading(true)
                const res = await getCast(movieId)
                console.log(res.cast)
                setCast(res.cast)
                setIsLoading(false)
            }
            catch (error) {
                console.log(error)
            }
            
        }

        getMovieCast()
    },[movieId])
    return (
        <>{
            isLoading?(<Loader/>):
        (<>
            <div className={css.wrap}>
            {cast.length === 0 ?(
                <p>There is no data</p>
            ): (
                cast.map((el) => (
                    <div className={css.card} key={el.id}>
                        {
                            <img
                            src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                            alt={el.name}
                            />
                        
                        }
                        <div className={css.character}>
                        <h4 className={css.text}>{el.name}</h4>
                        <p className={css.text}>
                            <b>Character:</b>  {el.character}
                        </p></div>
                        
                    </div>
                ))
            )  }
        </div>
            
            </>)}
            </>
         
    )
}

