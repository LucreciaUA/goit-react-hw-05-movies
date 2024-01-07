import { getReview } from "API/review.js"
import { Loader } from "components/spinner/loader.jsx"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export const Reviews = () => {
    const [review, setReview] = useState([])
    const { movieId } = useParams()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() =>{
    const getAllReviews = async () => {
        try {
            setIsLoading(true)
            const res = await getReview(movieId)
            setReview(res.results)
            console.log(res.results)
            setIsLoading(false)
        }
        catch(error) {
            console.log(error)
        }
    }
        getAllReviews()
    },[movieId]
    )
    

    return (
        <>{review.length === 0 ? (
        <p>There is no review</p>
    ) : (
        isLoading ? (
            <Loader/>
        ) : (
            <ul>
                {review.map(el => (
                    <li key={el.id}>
                        <h3>{el.author_details.username}</h3>
                        <p>{el.content}</p>
                    </li>
                ))}
            </ul>
        )
    )}
        </>
    )
}