import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider"
import "./Post.css"
import { useParams, useHistory } from "react-router-dom"
// import { Link } from "react-router-dom"

export const PostDetail = (props) => {
    const { post, getPostById } = useContext(PostContext)

    // const [post, setPosts] = useState({})

    const {postId} = useParams();
    const history = useHistory();

    useEffect(() => {
        debugger
        console.log("useEffect", postId)
        getPostById(postId)
        // .then(setPosts)
    }, [])

    return (
        
        <section className="post">
        <h3 className="post_title">{post.title}</h3>
        <div className="post_publication_date">Published: {post.publication_date}</div>
        {/* <Link to={post.image_url}>
            { post.image_url }
        </Link> */}
        <a className="post_image_url" href={ post.image_url } target="_blank">{ post.image_url }</a>
        {/* <div className="post_image_url" src={post.image_url }>Url: {post.image_url}</div> */}
        <div className="post_content">Content: {post.content}</div>
        </section>
    )
}