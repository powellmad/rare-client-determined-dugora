import React, { useEffect, useContext, useRef } from "react"
import "./Post.css"
import { Link } from "react-router-dom"
import { PostContext } from "./PostProvider.js"

export const Post = ({ post }) => {
    const { deletePost } = useContext(PostContext)
    const deleteWarning = useRef()

    const handleDeleteWarning = event => {
        deleteWarning.current.showModal()
    }

    const handleCloseModal = () => {
        deleteWarning.current.close()
    }

    const handleClickDelete = () => {
        deletePost(post.id)
        handleCloseModal()
    }

    

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

            <dialog className="dialog dialog--auth" ref={deleteWarning}>
                <div>Are you sure you want to delete this post?</div>
                <button className="button--close" onClick={handleCloseModal}>Cancel</button>
                <button className="button--close" onClick={handleClickDelete}>Confirm</button>
            </dialog>

            {
                post.user.user.id === parseInt(localStorage.getItem('user_id')) ?
                    <button className="btn btn-3" id={post.id}
                    onClick={handleDeleteWarning}>Delete</button>
                    :
                    ""
            }
        </section>

    )
}