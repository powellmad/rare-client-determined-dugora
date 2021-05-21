import React, { useContext } from "react"
import { TagContext } from "./TagProvider"
import "./Tag"

export const TagSearch = () => {
    const { setSearchTerms } = useContext(TagContext)

    return (
        <>
        Tag Search:
        <input type="text"
            className="input--wide" 
            onKeyUp={(event) => setSearchTerms(event.target.value)}
            placeholder="Search for a Tag... " />
        </>
    )
}