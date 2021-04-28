import React, { useEffect, useContext, useState } from "react"
import { PostContext } from "./PostProvider"
import { Post } from "./Post"
// import "./Post.css"
import { useHistory } from "react-router-dom"

export const PostList = () => {
    const { posts, getPosts } = useContext(PostContext)
    
    const [ filteredPosts ] = useState([])
    const history = useHistory()
    
    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getPosts()
    }, [])
    
    
    return (
    <>
        <h1>My Post</h1>
        
        <div className="posts">
        {
        filteredPosts.map(post => {
            return <Post key={post.id} post={post} />
        })
        }
        </div>
    </>
    )
    }