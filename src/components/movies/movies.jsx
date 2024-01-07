import { getMovies } from "API/search.js"
import { ListOfMovies } from "components/listOfMovies/list.jsx"
import { Pagination } from "components/pagination/pagination.jsx"
import { Search } from "components/search/search.jsx"
import { Loader } from "components/spinner/loader.jsx"
import { Starting } from "components/starting-page/starting-page.jsx"
import { useEffect, useState } from "react"

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getSearch = async () => {
            if (search) {
                try {
                    setIsLoading(true)
                    const res = await getMovies(search,currentPage)
                    console.log(res.results)
                    setMovies(res.results)
                    setTotalPages(res.total_pages)
                    setIsLoading(false)
                }
                catch (error) {
                    console.log(error)
                }
            }
        }

        getSearch()
        
    },[search, currentPage]
    )


    const handleSubmit = (searchQuery) => {
        setSearch(searchQuery);
        setMovies([]);
        setCurrentPage(1)

        console.log(search)
    };

    const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
};

    return (
        <>
        <Search onSubmit={handleSubmit} />
        {search === '' ? (
            <Starting/>
        ) : (
            <> {isLoading ? (
        <Loader />
    ) : (
        <>
            <ListOfMovies movies={movies} />
            {totalPages > 1 && (
                <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={handlePageChange} 
                />
            )}
        </>
    )}
            </>
        )}
    </>
    )
}

export default Movies