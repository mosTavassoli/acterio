import { PostsApiResponse, PostsType } from "../types/types"
import axios from "axios"

const baseUrl = "https://dummyjson.com/posts"

export const getPosts = async () => {
    try {
        const response = await axios.get<PostsApiResponse>(baseUrl)
        return response.data.posts
    } catch (error) {
        console.error(error)
    }
}

export const getPostById = async (id?: string) => {
    try {
        const response = await axios.get<PostsType>(baseUrl + `/${id}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}