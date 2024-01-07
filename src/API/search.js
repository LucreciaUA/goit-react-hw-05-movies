

import { api } from "./api.js"
const apiKey = `579f9cde8301da77a7eae5840c1b4661`

export const getMovies= async(search, page) => {
    const response = await api.get(`search/movie?query=${search}&api_key=${apiKey}&language=en-US&page=${page}`)
    console.log(response.data)
    return response.data
}

