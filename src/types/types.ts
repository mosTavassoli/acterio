export type PostsType = {
    body: string
    id: number;
    reactions: number
    tags: string[]
    title: string
    userId: number
}

export type PostsApiResponse = {
    posts: PostsType[]
}
