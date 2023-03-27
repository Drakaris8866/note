import React, {FC, FormEvent} from 'react';
import Button from "../../Button/Button";
import styles from './PostCreator.module.scss'
import {findWords} from "../../../../utils/FindWords";
import PostService from "../../../../services/Post.service";
import TagsService from "../../../../services/Tags.service";

const PostCreator:FC  = () => {

    const [title, setTitle] = React.useState("")
    const [text, setText] = React.useState("")
    const [tags, setTags] = React.useState<string[]>([])

    const tagsRef = React.useRef<null | HTMLDivElement>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await PostService.createPost({title, text, tags: Object.values(tags)})
        await TagsService.createTags({tags: Object.values(tags)})
    }

    const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTags(prevState => ({...prevState, ...findWords(e.target.value)}))
        if (tagsRef.current){
            tagsRef.current.innerText = Object.values(tags).join(", ")
        }
        setText(e.target.value)
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.content}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Заголовок" type="text"/>
            <input value={text} onChange={(e) => handleText(e)} placeholder="Заметка" type="text"/>
            <div ref={tagsRef}/>
            <Button htmlType="submit">Создать заметку</Button>
        </form>
    );
};

export default PostCreator;