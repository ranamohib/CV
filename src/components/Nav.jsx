import React from 'react';
import '../styles/nav.css';

function Nav() {
  return (
    <div className='Nav'>
        <nav className="nav-bar container">
          <a href="/"><h2 className="logo">logo</h2></a>
          <div className="menu">
            <h2>Genertate Cv</h2>
          </div>
          <div className="right">
            <a href="" className="btn"><span>GitHub</span></a>
          </div>
        </nav>

    </div>
  )
}

export default Nav