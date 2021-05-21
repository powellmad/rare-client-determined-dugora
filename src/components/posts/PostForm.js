import React, { useContext, useState, useEffect } from "react"
import { PostContext } from "./PostProvider"
import { CategoryContext } from "../categories/CategoryProvider"
import { TagContext } from "../tags/TagProvider"
import { useHistory, useParams } from 'react-router-dom'
import "./Post.css"

export const PostForm = (props) => {
    const { posts, getPosts, getPostById, addPost, updatePost } = useContext(PostContext)
    const { categories, getCategories } = useContext(CategoryContext)
    const { tags, getTags } = useContext(TagContext)
    const currentdate = new Date().toLocaleString()

    const [ post, setPost ] = useState({
        "categoryId": 0,
        "title": "", 
        "publicationDate": currentdate,
        "image_url": "",
        "content": "",
        "tagId": 0
    })
    
    const [isLoading, setIsLoading] = useState(true);
    const { postId } = useParams();
    const history = useHistory()


    useEffect(() => {
        getCategories()
        .then(getTags)
        .then(getPosts)
    }, [])

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array, always create a new one and change state instead of modifying current one */
        const newPost = {...post}
        let selectedVal = event.target.value
        newPost[event.target.name] = selectedVal
        setPost(newPost)
    }

    const HandleSave = (event) => {
        const categoryId = post.categoryId

        if (categoryId === 0 ) {
            window.alert("Please select a category")  
        } else {
            setIsLoading(true);
            { postId ?
                updatePost({
                    id: post.id,
                    categoryId: parseInt(post.categoryId),
                    title: post.title,
                    image_url: post.image_url,
                    content: post.content
                })
            :
                addPost({
                    categoryId: parseInt(post.categoryId),
                    title: post.title,
                    publicationDate: post.publicationDate,
                    image_url: post.image_url,
                    content: post.content
                })
                .then(() => history.push('/'))
            }
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
                    <input value={post.title} type="text" name="title" required autoFocus className="form-control"
                        placeholder="Title"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="imageUrl">Upload an Image </label>
                    <input type="text" name="image_url" required className="form-control"
                        proptype="varchar"
                        placeholder="image url"
                        onChange={handleControlledInputChange}
                    />
                    <input type="file" id="myFile" name="filename"/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Write Post: </label>
                    <textarea 
                    name="content" 
                    required autoFocus className="form-control"
                    placeholder="Begin new post..." 
                    onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="categoryId">Category: </label>
                    <select value={post.categoryId} name="categoryId" id="categoryId" className="form-control"
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
                    {tags.map(t => (
                        <input type="checkbox" id={t.id} name={t.id} value={t.id} 
                        onChange={handleControlledInputChange} className="form-control">
                        <label for={t.id}>{t.label}</label>
                        </input>
                    ))}

                </div>
            </fieldset>
                            
            <div>
                <button className="btn btn-primary" 
                    disabled={isLoading}
                    onClick={HandleSave}>
                    {postId ? "Save" : "Post"}
                </button>
            </div>
        </form>
    )
}