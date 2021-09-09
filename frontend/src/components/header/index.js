import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css';


const Header = (props) => {
  const token = localStorage.getItem("CC_Token");

  return (
    <header className="header">
      <div style={{ display: 'flex' }}>
        <div className="logo">Chat Room</div>

        {
          !token ?
            <NavLink to={'/login'} className="menu">Login</NavLink>
            : null
        }

        {
          !token ?
            <NavLink to={'/register'} className="menu">Sign up</NavLink>
            : null
        }

        <NavLink to={'/dashboard'} className="menu">Dashboard</NavLink>

      </div>
      <div style={{ margin: '20px 0', color: '#fff', fontWeight: 'bold' }}>
        
      </div>

      <Link to={'/'} className="menu" onClick={() => {
        localStorage.clear();
      }}>Logout</Link>

    </header>
  )

}

export default Header