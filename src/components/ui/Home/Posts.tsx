import React, {FC, useState} from 'react';
import Post from "./Post/Post";
import styles from './Posts.module.scss'
import {IPost, ITag} from "../../../types/post.types";

interface IPostsProps {
    posts: IPost[],
    tags: ITag[]
}

const Posts: FC<IPostsProps> = ({posts, tags}) => {
    if (!posts.length) {
        return <div>Заметок нет</div>
    }
    return (
        <div className={styles.posts}>
            {posts?.map(post => <Post tags={tags} key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;