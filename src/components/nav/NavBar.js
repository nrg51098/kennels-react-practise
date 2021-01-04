import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    const history = useHistory()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">NSS Kennels</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Animals</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            {
                    (localStorage.getItem("kennel_customer") !== null) ?
                        <li className="navbar__item ml-auto mr-3">
                            
                                <Link className=""
                                    onClick={() => {
                                        localStorage.removeItem("kennel_customer");
                                        history.push({ pathname: "/" });
                                    }}
                                >Logout</Link>
                            
                        </li> :
                        <>
                            <li className="navbar__item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="navbar__item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                }
        </ul>
    )
}