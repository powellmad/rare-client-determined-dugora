import React, { useEffect, useContext } from "react"
import "./Post.css"
import { Link } from "react-router-dom"
import { PostContext } from "./PostProvider.js"

export const Post = ({ post }) => {
    const { posts, deletePost } = useContext(PostContext)

    return (
        <section className="post">
            <h3 className="post__title">
                <Link to={`/posts/detail/${post.id}`}>
                    {post.title}
                </Link>
            </h3>

            {/* <div className="post_content">{post.publication_date}</div> */}
            <div className="post_content">{post.content}</div>

            <div className="post_category">{post.category.label}</div>

            <div className="post_imageUrl">{post.imageUrl}</div>

            {
                post.user === parseInt(localStorage.getItem('rare_user_id')) ?

                    <button className="btn btn-3"
                    onClick={() => deletePost(post.id)}
                    >Delete</button>
                    :
                    ""
            }
        </section>

    )
}