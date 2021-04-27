import React, { useState, useContext, useEffect } from "react"
import { CategoryContext } from "./CategoryProvider"
import "./Category.css"

export const CategoryForm = (props) => {

    const { getCategories, addCategory } = useContext(CategoryContext)

    const [category, setCategory] = useState({
        label: "",
    });

    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
}