export interface IPost{
    id: number,
    title: string,
    text: string,
    tags: string[],
    bodyHTML?: string
}

export interface IPostData {
    title: string,
    text: string,
    tags: string[],
    id?: number
}

export interface ITagsData {
    tags: string[],
    id?: number
}

export interface ITag{
    id: number,
    tag: string
}