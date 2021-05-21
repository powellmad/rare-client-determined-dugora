import React, { useEffect, useContext } from "react"
import { PostContext } from "./PostProvider"
import { Post } from "./Post"
import "./Post.css"
import { useHistory } from "react-router-dom"

// this is a list of all the post
export const AllPostList = (props) => {
    const { posts, getPosts } = useContext(PostContext)
    const history = useHistory()

    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getPosts()
    }, []);

    return (
        <div className="post__component">
            <h1>Posts</h1>

            <button onClick={() => history.push("/posts/create")}>
                Add Post
        </button>

            <div className="posts">
                {
                    posts.map(post => {
                        
                        return <Post key={post.id} post={post} />
                    }
                )
                }
            </div>
        </div>
    )
}