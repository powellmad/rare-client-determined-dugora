import React, { useContext, useEffect } from "react"
import { CategoryContext } from "./CategoryProvider"
import Category from "./Category"
import "./Category.css"

export const CategoryList = () => {
    const { categories, getCategories } = useContext(CategoryContext)

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div>
            <h1>Categories</h1>

            <button onClick={() => history.push("/categories/create")}>
                Create Category
            </button>

            <div className="categories">
                {
                    categories.map(category => <Category key={category.id} category={category}/>)
                }
            </div>
        </div>
    )
}