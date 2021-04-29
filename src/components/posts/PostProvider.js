import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const PostContext = createContext()

/*
export const PostProvider = (props) => {}
This component establishes what data can be used.
all components and their children have access to the context. 
context is used for passing down props to any of the children. 
*/
export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])

    const [ searchTerms, setSearchTerms ] = useState("")

  // the getPosts function fetches data from json database and then returns it
    const getPosts = () => {
    return fetch("http://localhost:8088/posts")
        .then(response => response.json())
        .then(setPosts)
}

const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`)
        .then(res => res.json())
}

const addPost = postObj => {
    return fetch("http://localhost:8088/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
    })
    .then(getPosts)
}

/*
    You return a context provider which has the `posts` state, `getPosts` function 
    as keys. This allows any child elements to access them.
  */
/*
    other components can access the array of objects being stored in the posts 
    variable, and they can invoke the getPosts function.
*/
    return (
// PostContext.Provider allows you to access child components

    <PostContext.Provider value={{
    // these are the child components of PostContext.Provider
    posts, getPosts, getPostById, addPost
    }}>
        {props.children}
        </PostContext.Provider>
)
}