import React from 'react'
import SearchBar from "../searchBar/SearchBar.jsx"
import { NavLink } from 'react-router-dom'
import './navBarStyle.css'

export const Nav = (props) => {
  return (
    <nav className='Nav'>
        <NavLink to='/home'>
        <img className='logo' src="./src/images/icons8-rick-sanchez-96.png" alt="img" />
        </NavLink>

        <NavLink to='/home' style={({ isActive })=> isActive ? {color: "#fff"} : { color: "#0000008c", fontWeight: "bold", fontSize: "18px", textDecoration: "none"}}>
          <span className='Home'>Home</span>
        </NavLink>

        <NavLink to="/about" style={({ isActive })=> isActive ? {color: "#fff"} : { color: "#0000008c", fontWeight: "bold", fontSize: "18px", textDecoration: "none"}}>
          <span className='About'>About</span>
        </NavLink>

        <NavLink to="/favorites" style={({ isActive })=> isActive ? {color: "#fff"} : { color: "#0000008c", fontWeight: "bold", fontSize: "18px",textDecoration: "none"}}>
          <span >Favorites</span>
        </NavLink>

        <NavLink to="/login" style={({ isActive })=> isActive ? {color: "#fff"} : { color: "#0000008c", fontWeight: "bold", fontSize: "18px",textDecoration: "none"}}>
          <span className='LogOut'>Log out</span>
        </NavLink>


        <SearchBar onSearch={props.onSearch} />
    </nav>
  )
}
