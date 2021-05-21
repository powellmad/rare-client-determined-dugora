import React, { useContext } from "react"
import {useHistory } from "react-router-dom"
import {TagContext} from "./TagProvider"


export default ({ tag }) => {

const history = useHistory()
const {deleteTag} = useContext(TagContext)

const handleDeleteTag = () => {
        if (window.confirm('Are you sure you wish to delete this category?')) {
              deleteTag(tag.id)
        .then(() => {
                    history.push("/tags")
                })
        }
    }




return (
    <section className="singleTag">
        <h3 className="tag__title">
          {tag.label}
        </h3>
        <button onClick={() => {history.push(`/tags/edit/${tag.id}`)}}>Edit</button>
        <button onClick={handleDeleteTag}>Delete</button>
    </section>
)
}