import React from "react"
import { Route } from "react-router-dom"
import { UserList } from "./users/UserList"
import { UserProfile } from "./auth/Profile"
import { UserProvider } from "./users/UserProvider"
import { CategoryProvider } from "./categories/CategoryProvider"
import { CategoryList } from "./categories/CategoryList"
import { CategoryForm } from "./categories/CategoryForm"

export const ApplicationViews = () => {
    return (
    <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        </main>
        <UserProvider>
            <Route exact path="/users">
                <UserList />
            </Route>

            <Route exact path="/users/profile/:userId(\d+)">
                <UserProfile />
            </Route>
        </UserProvider>
        <CategoryProvider>
            <Route exact path="/categories">
                <CategoryList />
            </Route>

            <Route path="/categories/create">
                <CategoryForm />
            </Route>

            <Route path="/categories/edit/:categoryId(\d+)">
                <CategoryForm />
            </Route>
        </CategoryProvider>
    </>
    )
}