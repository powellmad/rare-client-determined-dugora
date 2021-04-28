import React from "react"
import { Route } from "react-router-dom"
import {PostProvider} from "./posts/PostProvider"
import { PostList } from "./posts/PostList"
import { PostDetail } from "./posts/PostDetail"
// import { PostForm } from "./posts/PostForm"

export const ApplicationViews = () => {
    return (
        <>
            {/* <main style={{
                margin: "5rem 2rem",
                lineHeight: "1.75rem"
            }}>
            </main> */}
    
                {/* Render the post list when http://localhost:3000/ */}
                <Route exact path="/">
                    {/* <PostList /> */}
                </Route> 
    
                <PostProvider>
                        <Route exact path="/posts">
                            <PostList />
                        </Route>
                        <Route path="/posts/detail/:postId(\d+)">
                            <PostDetail/>
                        </Route>
                        <Route path="/posts/create">
                            {/* <PostForm /> */}
                        </Route>
                </PostProvider>    
        </>
        )
}
