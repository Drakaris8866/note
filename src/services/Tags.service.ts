import {instance as axios} from '../api/interseptors'
import {ITag, ITagsData} from "../types/post.types";

class TagsService {

    async getAllTags() {
        const {data} = await axios.get("/tags")

        return data as ITag[]
    }

    async createTags({tags}: ITagsData) {
        tags.map(async tag => await axios.post<string[], string[]>("/tags", {
            tag
        }))
    }

    async updateTags({tags, id}: ITagsData) {
        tags.map(async tag => await axios.put(`/tags/${id}`, {
            tag
        }))

    }

    async deleteTag(id: number) {
        return axios.delete(`tags/${id}`)
    }
}

export default new TagsService()