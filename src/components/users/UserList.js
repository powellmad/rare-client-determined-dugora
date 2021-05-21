import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import { UserCard } from "./User"
import "./User.css"

export const UserList = (props) => {
    const { users, getUsers } = useContext(UserContext)

  useEffect(() => {
    getUsers()
    }, [])

  return (
    <div className="user__component">
    <h1>Users</h1>
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