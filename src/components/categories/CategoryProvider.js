import React, { useState } from "react"

export const CategoryContext = React.createContext()

export const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        return fetch("http://localhost:8000/categories", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("rare_user_token")}`
            }
        })
            .then(response => response.json())
            .then(setCategories)
    }

    const addCategory = (category) => {
        return fetch('http://localhost:8000/categories', {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_token")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(category)
        })
        .then(getCategories)
    }
    

    const getCategoryById = (id) => {
        return fetch(`http://localhost:8000/categories/${id}`)
            .then(res => res.json())
    }

    

    return (
        <CategoryContext.Provider value={{
            categories, getCategories, addCategory,getCategoryById
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}