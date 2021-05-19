import React, { useState, createContext } from "react"


export const PostContext = createContext()

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})


    const getPosts = () => {
        return fetch("http://localhost:8000/", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
            }
        })
            .then(response => response.json())
            .then(setPosts);

    }

    const getPostById = (id) => {
        return fetch(`http://localhost:8000/posts/${id}`)
            .then(res => res.json())
            .then(setPost);
    }

    const addPost = postObj => {
        return fetch("http://localhost:8000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
        })
            .then(getPosts)
    }

    const deletePost = post => {
        return fetch(`http://localhost:8000/posts/${post}`, {
            method: "DELETE"
        }).then(getPosts);
    };

    const updatePost = post => {
        return fetch(`http://localhost:8000/posts/${post.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        }).then(getPosts);
    };

    return (
        <PostContext.Provider value={{
            posts, post, setPost, getPosts, getPostById, addPost, deletePost, updatePost
        }}>
            {props.children}
        </PostContext.Provider>
    )
}