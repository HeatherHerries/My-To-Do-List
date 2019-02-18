import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>My To-do List</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} 
      to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#807F89',
  color: '#ECA4A6',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#F9D5D3',
  textDecoration: 'none'
}

export default Header;