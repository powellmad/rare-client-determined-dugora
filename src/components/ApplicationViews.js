import React from "react"
import { Route } from "react-router-dom"
import { UserList } from "./users/UserList"
import { UserProfile } from "./auth/Profile"
import { UserProvider } from "./users/UserProvider"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        </main>
        <UserProvider>
            <Route exact path="/users">
                <UserList />
            </Route>
        </UserProvider>

        <UserProvider>
            <Route exact path="/users/profile/:userId(\d+)">
                <UserProfile />
            </Route>
        </UserProvider>
    </>
}
