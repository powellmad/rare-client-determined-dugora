import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider"
import "./Post.css"
import { useParams, useHistory } from "react-router-dom"

export const PostDetail = () => {
    const { getPostById } = useContext(PostContext)

    const [post, setPosts] = useState({})

    const {postId} = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", postId)
        getPostById(postId)
        .then((response) => {
            setPosts(response)
        })
    }, [])

    return (
        <section className="post">
        <h3 className="post_title">{post.title}</h3>
        <div className="post_publication_date">Publised: {post.publication_date}</div>
        <div className="post_image_url">Url: {post.image_url}</div>
        <div className="post_content">Content: {post.content}</div>
        </section>
    )
}