import {IPostData} from "../../../../types/post.types";
import React from "react";
import PostService from "../../../../services/Post.service";
import {findWords} from "../../../../utils/FindWords";
import TagsService from "../../../../services/Tags.service";

export const usePostUpdate = ({title, text, tags, id}: IPostData) => {
    const [isLoading, setIsLoading] = React.useState(false)

    const [updateStatus, setUpdateStatus] = React.useState(false)

    const [titleUpdate, setTitleUpdate] = React.useState(title)
    const [textUpdate, setTextUpdate] = React.useState(text)
    const [tagsUpdate, setTagsUpdate] = React.useState(tags)
    const [textWithMark, setTextWithMark] = React.useState("")

    const markTagInText = (text: string) => {
        const reg = RegExp(tags.join("").replace(/[\\^$|.*?+{}()[\]]/g, '\\$&'), 'gi');
        let replaceText
        if (tags){
            replaceText = text.replace(reg, '<mark>$&</mark>')
            if (replaceText) {
                setTextUpdate(replaceText)
            }
        }

    };

    const handleClickDelete = async () => {
        if (id) {
            await PostService.deletePost(id)
        }
    }

    const handleClickUpdate = async () => {
        setIsLoading(true)
        await PostService.updatePost({title: titleUpdate, text: textUpdate, tags: tagsUpdate, id})
        await TagsService.updateTags({tags: tagsUpdate, id})
        setUpdateStatus(false)
    }

    const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTagsUpdate(findWords(e.target.value))
        setTextUpdate(e.target.value)
    }

    const handleUpdateStatus = (text: string) => {

        markTagInText(text)

        setUpdateStatus(true)
    }

    return {
        isLoading,
        info: {
            titleUpdate,
            textUpdate,
            tagsUpdate,
            updateStatus,
            textWithMark
        },
        functions: {
            setUpdateStatus: handleUpdateStatus,
            setTitleUpdate,
            setTextUpdate,
            setTagsUpdate,
            handleClickDelete,
            handleClickUpdate,
            handleText
        }
    }
}