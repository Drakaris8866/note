import {instance as axios} from '../api/interseptors'
import {IPost, IPostData, ITag, ITagsData} from "../types/post.types";
import {AxiosResponse} from "axios";

class PostService {
    async getAllPosts() {
        const {data} = await axios.get("/posts")

        return data as IPost[]
    }

    async createPost({title, text, tags}: IPostData) {
        return axios.post<IPostData, AxiosResponse<IPost>>("/posts", {
            title, text, tags
        })
    }

    async deletePost(id: number) {
        return axios.delete(`/posts/${id}`)
    }

    async updatePost({title, text, tags, id}: IPostData) {
        return axios.put(`/posts/${id}`, {
            title, text, tags
        })
    }

    async getFiltredPosts(filter: string) {
        const {data} = await axios.get(`/posts?q=${filter}`)

        return data as IPost[] | []
    }
}

export default new PostService()