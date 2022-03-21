import React from 'react';

function Nav() {
  return (
    <div className='Nav'>
      <nav className="navbar is-transparent has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"/>
          </a>
        </div>
        <div className="navbar-menu is-active">
          <div className="navbar-end">
            <div className="navbar-item">
              <a href="/" className="button is-black">GitHub</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav