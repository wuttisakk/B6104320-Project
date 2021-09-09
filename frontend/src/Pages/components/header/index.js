import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css';


const Header = (props) => {


  return (
    <header className="header">
      <div style={{ display: 'flex' }}>
        <div className="logo">Chat Room</div>

        <NavLink to={'/login'} className="menu">Login</NavLink>
        <NavLink to={'/register'} className="menu">Sign up</NavLink>
        <NavLink to={'/dashboard'} className="menu">Dashboard</NavLink>

      </div>
      <div style={{ margin: '20px 0', color: '#fff', fontWeight: 'bold' }}>
        Name
      </div>

      <Link to={'/'} className="menu" onClick={() => {
        localStorage.clear();
      }}>Logout</Link>

    </header>
  )

}

export default Header