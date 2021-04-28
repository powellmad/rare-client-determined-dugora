import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserProvider"
import { UserCard } from "./User"
import "./User.css"

export const UserList = () => {
    const { users, getUsers } = useContext(UserContext)

  useEffect(() => {
    getUsers()
    }, [])

  return (
    <div className="user-component">
    <h2>Users</h2>
    
    <div className="user__list">
      {
        users.map(user => {
          return <UserCard key={user.id} user={user} />
        })
      }
      </div>
    </div>
  )
}