import React, { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8000/users")
        .then(res => res.json())
        .then(setUsers)
        }

    const getUserById = (id) => {
        return fetch(`http://localhost:8000/users/${id}`)
            .then(res => res.json())
    }

    return (
        <UserContext.Provider value={{
            users, getUsers, getUserById
        }}>
            {props.children}
        </UserContext.Provider>
    )
}