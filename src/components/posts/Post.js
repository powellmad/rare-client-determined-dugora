import React, { useEffect, useContext } from "react"
import "./Post.css"
import { Link } from "react-router-dom"
import { CategoryContext } from "../categories/CategoryProvider"

export const Post = ({ post }) => {

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
        </section>

    )
}