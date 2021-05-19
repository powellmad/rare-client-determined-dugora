import React, { useContext, useState, useEffect } from "react"
import { PostContext } from "./PostProvider"
import { CategoryContext } from "../categories/CategoryProvider"
import { useHistory, useParams } from 'react-router-dom'
import "./Post.css"

export const PostForm = (props) => {
    const { posts, getPosts, getPostById, addPost, updatePost } = useContext(PostContext)
    const { categories, getCategories } = useContext(CategoryContext)
    const currentdate = new Date().toLocaleString()

    const [ post, setPost ] = useState({
        "userId": 0,
        "categoryId": 0,
        "title": "", 
        "publicationDate": currentdate,
        "imageUrl": "",
        "content": ""
    })
    
    const [isLoading, setIsLoading] = useState(true);
    const { postId } = useParams();
    const history = useHistory()


    useEffect(() => {
        getCategories()
        .then(getPosts)
        .then(getPostById)
    }, [])

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array, always create a new one and change state instead of modifying current one */
        const newPost = {...post}
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
          }
        newPost[event.target.id] = selectedVal
        setPost(newPost)
    }

    const constructNewPost = (event) => {
        const categoryId = post.categoryId

        // if (categoryId === 0 ) {
        //     window.alert("Please select a category")  
        // } else {
            setIsLoading(true);
            { postId ?
                updatePost({
                    id: post.id,
                    userId: parseInt(localStorage.getItem("rare_user_id")),
                    categoryId: parseInt(post.categoryId),
                    title: post.title,
                    imageUrl: post.imageUrl,
                    content: post.content
                })
            :
                addPost({
                    userId: parseInt(localStorage.getItem("rare_user_id")),
                    categoryId: parseInt(post.categoryId),
                    title: post.title,
                    publicationDate: post.publicationDate,
                    imageUrl: post.imageUrl,
                    content: post.content
                })
                .then(() => history.push('/posts'))
            }
        }

        useEffect(() => {
            getCategories().then(() => {
              if (postId) {
                getPostById(postId)
                  .then(post => {
                    setPost(post)
                    setIsLoading(false)
                  })
              } else {
                setIsLoading(false)
              }
            })
          }, [])
    
    return (
        <form className="postForm">
            <h2 className="postForm__title">{postId ? "Edit Post" : "Create Post"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        placeholder="title"
                        // value={post.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Write Post: </label>
                    <textarea 
                    name="content" 
                    required autoFocus className="form-control"
                    placeholder="Begin new post..." 
                    // value={post.content}
                    onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="categoryId">Category: </label>
                    <select name="categoryId" className="form-control"
                        // value={post.categoryId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a Category</option>
                        {categories.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.label}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="imageUrl">Upload an Image </label>
                    <input type="text" name="imageUrl" required className="form-control"
                        proptype="varchar"
                        placeholder="imageUrl"
                        // value={post.imageUrl}
                        onChange={handleControlledInputChange}
                    />
                    <input type="file" id="myFile" name="filename"/>
                </div>
            </fieldset>

            <div>
                <button className="btn btn-primary" 
                    disabled={isLoading}
                    onClick={constructNewPost}>
                    {postId ? "Update" : "Save"}
                </button>
            </div>
        </form>
    )
}