import { getPopular } from "API/popular";
import React, { useEffect, useState } from "react";
import css from './home.module.css'
import { ListOfMovies } from "components/listOfMovies/list";
import { Loader } from "components/spinner/loader";

export const Home = () => {
    const [popular, setPopular] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    //const [totalPages, setTotalPages] = useState([]);
    //const [page, setCurrentPage] = useState(1);

   useEffect(() => {
        const popularList = async () => {
            try {
                setIsLoading(true)
                const response = await getPopular();
                console.log(response);
                setPopular(response.results);
                //setTotalPages(response.total_pages)

                setIsLoading(false)
            } catch (error) {
                console.error("Failed to fetch popular movies:", error);
            }
        };

        popularList();
   }, []); 
    
    
   // const goToNextPage = () => {
   // setCurrentPage(page => page + 1);
//};

//const goToPreviousPage = () => {
//    setCurrentPage(page => page > 1 ? page - 1 : 1);
    //};


   

    return (
        <>
            <h1 className={css.headline}>Popular movies</h1>
            {isLoading?(<Loader/>):
       <ListOfMovies movies={popular}/>}
        </>
        
    )

}