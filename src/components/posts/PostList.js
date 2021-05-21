import React, { useEffect, useContext, useState } from "react"
import { PostContext } from "./PostProvider"
import { Post } from "./Post"
import "./Post.css"
import { useHistory } from "react-router-dom"

// this is a list of all the post
export const PostList = (props) => {
    const { posts, getPosts, getMyPosts } = useContext(PostContext)
    const currentUser = parseInt(localStorage.getItem('rare_user_id'))
    const history = useHistory()

    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getMyPosts(currentUser)
    }, []);

    return (
    <>
        <h1>My Posts</h1>

            <button onClick={() => history.push("/posts/create")}>
                Add Post
            </button>

            <div className="posts">
                {posts.map(post => {
                    return <Post key={post.id} post={post} />
                })}
            </div>
        </>
    )
}