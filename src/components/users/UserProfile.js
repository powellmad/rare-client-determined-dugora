import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserProvider"
import "./User.css"
import { useParams, useHistory } from "react-router-dom"

export const UserProfile = () => {
  const { getUserById } = useContext(UserContext)

  const [user, setUser] = useState({})

  const { userId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getUserById(userId)
      .then((response) => {
        setUser(response)
      })
  }, [])

  return (
    <section className="user-profile">
      <h3 className="user-profile__name">{user.first_name} {user.last_name}</h3>
      {user.profile_image_url ? <img src="{user.profile_image_url}" alt="user's profile image"/> : <img src="./images/default-profile-image.png" alt="default profile image"/> }
      <div className="user__email">{user.email}</div>
      <div className="user__bio">Bio: {user.bio}</div>
      <div className="user__created_on">Rare User Since: {user.created_on}</div>
      <button onClick={() => {
        history.push(`/users/edit/${user.id}`)
      }}>Edit</button>
    </section>
  )
}