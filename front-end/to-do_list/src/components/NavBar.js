import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <section className="nav-bar">
      <nav className="nav-bar__switch">
        <NavLink 
        to='/' 
        className={({ isActive }) => isActive ? 'nav-bar__link nav-bar__link_active' : 'nav-bar__link'}>
          To do
        </NavLink>
        <NavLink 
        to='/done' 
        className={({ isActive }) => isActive ? 'nav-bar__link nav-bar__link_active' : 'nav-bar__link'}>
          Done
        </NavLink>
      </nav>
    </section>
  )
};

export default NavBar;

