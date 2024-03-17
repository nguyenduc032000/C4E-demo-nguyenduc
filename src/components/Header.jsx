import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='logo'>
        <img src="https://demo.themetorium.net/html/sepia/assets/img/logo-light.png" alt="sepia" width="100px" />
      </div>
      <div className='menu2'>
        <NavLink to={"/Phimbo"} style={{ color: 'white', textDecoration: 'none' }}> Phimbo </NavLink>
        <NavLink to={"/Phimle"} style={{ color: 'white', textDecoration: 'none' }}> Phimle </NavLink>
        <NavLink to={"/Phimmoi"} style={{ color: 'white', textDecoration: 'none' }}> Phimmoi </NavLink>
        <NavLink to={"/product"} style={{ color: 'white', textDecoration: 'none' }}> Product </NavLink>
      </div>
    </div>
  )
}

export default Header
