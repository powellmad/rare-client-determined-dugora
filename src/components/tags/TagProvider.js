import React, { useState } from "react";

export const TagContext = React.createContext();

export const TagProvider = props => {
  const [tags, setTags] = useState([]);

  const getTags = () => {
    return fetch("http://localhost:8000/tags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
        }
    })
      .then(res => res.json())
      .then(setTags);
  };

  const getTagById = (id) => {
    return fetch(`http://localhost:8000/tags/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem('rare_user_id')}`   
         }
    })
        .then(res => res.json())
  }

    const addTag = (tag) => {
        return fetch("http://localhost:8000/tags", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem('rare_user_id')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tag)
        })
            .then(getTags)
    }

    const updateTag = tag => {
    return fetch(`http://localhost:8000/tags/${tag.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem('rare_user_id')}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
        .then(getTags)
  }

    const deleteTag = (tagId) => {
    return fetch(`http://localhost:8000/tags/${tagId}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
        }
    })
        .then(getTags)
  }

  const createTag = (tag) => {
    return fetch("http://localhost:8000/tags", {
        method: "POST", 
        headers: {
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
        .then(setTags)
    }


    return (
        <TagContext.Provider value={{
            tags, addTag, getTags, updateTag, deleteTag, getTagById, createTag
        }}>
            {props.children}
        </TagContext.Provider>
    )
    

}