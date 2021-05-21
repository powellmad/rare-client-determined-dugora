import React from "react"
import "./Post.css"
import { Link } from "react-router-dom"

export const Post = ({ post }) => {

    return (
        <section className="post">
            <h3 className="post__title">
                <Link to={`/posts/detail/${post.id}`}>
                    {post.title}
                </Link>
            </h3>

            <div className="post_author">{post.user.user.first_name} {post.user.user.last_name}</div>

            <div className="post_category">{post.category.label}</div>            
        </section>

    )
}