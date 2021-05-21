import React, { useContext, useEffect, useState, useRef } from "react"
import { PostContext } from "./PostProvider"
import "./Post.css"
import { useHistory, useParams } from "react-router-dom"

export const PostDetail = (props) => {
    const { getPostById, deletePost } = useContext(PostContext)
    const [post, setPost] = useState({})
    const { postId } = useParams();
    const history = useHistory()
    const deleteWarning = useRef()


    useEffect(() => {
        getPostById(postId)
            .then((response) => {
                setPost(response)
            })
    }, [])


    const handleDeleteWarning = event => {
        deleteWarning.current.showModal()
    }

    const handleCloseModal = () => {
        deleteWarning.current.close()
    }

    const handleClickDelete = () => {
        deletePost(postId)
        handleCloseModal()
        history.push('/')
    }

    return (

        <section className="post">

            <h3 className="post_title">{post.title}</h3>
            <div className="post_category">{post.category?.label}</div>
            <img className="post_image_url" src={post.image_url} />
            <div className="post_publication_date">Published: {new Date(post.publication_date).toLocaleDateString()}</div>
            <div className="post_author">By: {post.user?.user.first_name} {post.user?.user.last_name}</div>
            <div className="post_content">{post.content}</div>
            <dialog className="dialog dialog--auth" ref={deleteWarning}>
                <div>Are you sure you want to delete this post?</div>
                <button className="button--close" onClick={handleCloseModal}>Cancel</button>
                <button className="button--close" onClick={handleClickDelete}>Confirm</button>
            </dialog>
            {
                post.user?.user.id === parseInt(localStorage.getItem('user_id')) ?
                    <button className="btn btn-3" id={post.id}
                    onClick={handleDeleteWarning}>Delete</button>
                    :
                    ""
            }
            <button onClick={() => {
                props.history.push(`/posts/edit/${postId}`)
            }}>Edit</button>
        </section>
    )
}