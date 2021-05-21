import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import Logo from "./rare.jpeg"

export const NavBar = () => {
    const history = useHistory()

    return (
        <>
        <div className="header">
            <ul className="navbar">
                <li className="logo">
                    <img className="navbar__logo" src={Logo} />
                    <h2 className="rare__title">Rare Publishing</h2>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/">All Posts</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/posts">My Posts</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/categories">Category Manager</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/tags">Tag Manager</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/users">User Manager</Link>
                </li>
                <div className="navbar__item">
                {
                    (localStorage.getItem("rare_user_id") !== null) ?
                        <li className="navbar__item">
                            <button className="nav-link fakeLink navbar__item"
                                onClick={() => {
                                    localStorage.removeItem("rare_user_id")
                                    localStorage.removeItem("user_id")
                                    history.push({ pathname: "/" })
                                }}
                            >Logout</button>
                        </li> :
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                }
                </div>
            </ul>
            <hr></hr>
        </div>
            </>
    )
}
