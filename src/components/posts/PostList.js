import React, { useEffect, useContext, useState } from "react"
import { PostContext } from "./PostProvider"
import { Post } from "./Post"
import "./Post.css"
import { useHistory } from "react-router-dom"

// this is a list of all the post
export const PostList = (props) => {
    const { posts, getPosts, searchTerms } = useContext(PostContext)
    const [ filteredPosts, setFiltered ] = useState([])
    const history = useHistory()
    
    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getPosts()
    }, []);

    return (
    <>
        <h1>My Post</h1>

        <button onClick={() => history.push("/posts/create")}>
            Add Post
        </button>
        
        <div className="posts">
        {
        posts.map(post => {
            return <Post key={post.id} post={post} />
        })
        }
        </div>
    </>
    )
    }