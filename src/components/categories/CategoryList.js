import React, { useContext, useEffect } from "react"
import { CategoryContext } from "./CategoryProvider"
import { useHistory } from 'react-router-dom';
import { Category } from "./Category"
import "./Category.css"

export const CategoryList = () => {
    const { categories, getCategories } = useContext(CategoryContext)

    const history = useHistory();

    useEffect(() => {
        getCategories()
    }, [])

    const sortedCategories = categories.sort((a, b) => a.label > b.label ? 1 : -1)

    return (
        <div className="category__page">
            <h1>Categories</h1>

            <button onClick={() => history.push("/categories/create")}>
                Create Category
            </button>

            <div className="categories">
                {
                    sortedCategories.map(category => {
                        return <Category key={category.id} category={category}/>
                    })
                }
            </div>
        </div>
    )
}