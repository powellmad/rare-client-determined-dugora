import React from "react"
import "./Category.css"

export const Category = () => (
    <section className="category">
        <h4 className="category__label">{ category.label }</h4>
        <button onClick={() => {
            history.push(`/categories/edit/${category.id}`)
            }}>Edit
        </button>
    </section>
)