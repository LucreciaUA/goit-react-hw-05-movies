import { api } from "./api.js"
const apiKey = `579f9cde8301da77a7eae5840c1b4661`

export const getSelected = async(movieId) => {
    const response = await api.get(`movie/${movieId}?api_key=${apiKey}&language=en-US`)
    console.log(response.data)
    return response.data
}