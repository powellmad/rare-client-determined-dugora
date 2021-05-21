import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider"
import "./Post.css"
import { useParams } from "react-router-dom"

export const PostDetail = (props) => {
    const { getPostById, deletePost } = useContext(PostContext)
    const [post, setPost] = useState({})
    const { postId } = useParams();

    useEffect(() => {
        getPostById(postId)
            .then((response) => {
                setPost(response)
            })
    }, [])

    return (

        <section className="post">

            <h3 className="post_title">{post.title}</h3>
            <div className="post_category">{post.category?.label}</div>
            <img className="post_image_url" src={post.image_url} />
            <div className="post_publication_date">Published: {new Date(post.publication_date).toLocaleDateString()}</div>
            <div className="post_author">By: {post.user?.user.first_name} {post.user?.user.last_name}</div>
            <div className="post_content">{post.content}</div>

            <button onClick={() => deletePost(post.id).then(() => props.history.push("/posts"))} >Delete Post</button>

            <button onClick={() => {
                props.history.push(`/posts/edit/${postId}`)
            }}>Edit</button>
        </section>
    )
}