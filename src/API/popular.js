import { api } from "./api"
const apiKey = `579f9cde8301da77a7eae5840c1b4661`

export const getPopular = async() => {
    const response = await api.get(`trending/movie/day?api_key=${apiKey}`)
    console.log(response.data)
    return response.data
}