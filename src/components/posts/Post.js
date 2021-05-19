import React, {useEffect, useContext } from "react"
import "./Post.css"
import { Link } from "react-router-dom"

export const Post = ({post}) => {
        
    return (
    <section className="post">
        <h3 className="post__title">
            <Link to={`/posts/detail/${post.id}`}>
                { post.title }
            </Link>
        </h3>
        <div className="post_category">
            { post.category.label }
        </div>
    </section>
    )
}